/*
   Gulp entry file with your main commands
*/
import fs from "fs-extra";
import del from "del";
import gulp from "gulp";
import { watch as gulpWatch } from "gulp";
import { EventEmitter } from 'events';
import { scripts } from "./webpack";
import { server, serverReload } from "./server";
import { nunjucks as nunjucksRender } from "./nunjucks";
import { gulpCss } from "./css";
import { gulpImages } from "./images";
import { gulpSass } from "./sass";
import { siteMap } from "./siteMap";
import { gulpWebpDev } from './webpDev';
import { gulpWebpProd } from './webpProd';

const createTmpFolders = () => {
   const tmpFolder = "./tmp";

   del.sync(tmpFolder, {
      force: true
   });

   if (!fs.existsSync(tmpFolder)) {
      fs.mkdirSync(tmpFolder);
   }

   [
      '/images'
   ].forEach(path => fs.mkdirSync(tmpFolder + path));
};

const htmlHandler = (path, stats) => {
   if (path.startsWith("src\\html\\_")) {
      console.log('Rebuilding site... this may take a minute.');

      nunjucksRender([
         'src/html/**/*',
         '!src/html/_*/',
         '!src/html/_*/**/*'
      ])
      .on('end', function(err) {
         serverReload();
      });
   }
   else {
      const files = Array.isArray(path) ? path : [path];
      nunjucksRender(files, serverReload);
   }
};

const sassHandler = (path, stats) => {
   gulpSass()
   .on('end', function(err) {
      serverReload();
   });
};

const jsHandler = (path, stats) => {
   scripts()
   .then(() => {
      serverReload();
   });
};

/*
   Primary command to work with while developing.
*/
function watch() {
   createTmpFolders();

   const distFolder = "./public";
   const eventListener = new EventEmitter();

   del.sync(distFolder, {
      force: true
   });

   if (!fs.existsSync(distFolder)) {
      fs.mkdirSync(distFolder);
   }

   console.log('BUILDING FILES...');

   scripts();
   gulpSass();
   gulpCss();

   nunjucksRender([
      'src/html/**/*',
      '!src/html/_*/',
      '!src/html/_*/**/*',
   ])
   .on('end', function(err) {
      eventListener.emit('nunjucks complete');
   });

   eventListener.on('nunjucks complete', () => {
      console.log('FILES DONE... STARTING SERVER');

      server();

      const htmlWatcher = gulpWatch(['src/html/**/*']);
      const sassWatcher = gulpWatch(['src/styles/**/*.scss']);
      const jsWatcher = gulpWatch(['src/js/**/*.js']);

      const imgWatcher = gulpWatch([
         'src/images/**/*.jpg',
         'src/images/**/*.png',
      ]);

      htmlWatcher.on('change', htmlHandler);
      htmlWatcher.on('add', htmlHandler);

      htmlWatcher.on('unlink', (path, stats) => {
         serverReload();
      });

      sassWatcher.on('change', sassHandler);
      sassWatcher.on('add', sassHandler);
      sassWatcher.on('unlink', sassHandler);

      jsWatcher.on('change', jsHandler);
      jsWatcher.on('add', jsHandler);
      jsWatcher.on('unlink', jsHandler);

      imgWatcher.on('add', (path, stats) => {
         //console.log(path);
         //console.log(path.replace('src\\images', ''));
         gulpWebpDev([path]);
         //gulpWebpDev([path.replace('src\\images', '')]);
      });

      imgWatcher.on('change', (path, stats) => {
          //gulpWebpDev([path.replace('src\\images', '')]);
          gulpWebpDev([path]);
      });
   });

   gulpWebpDev([
      "src/images/**/*.jpg",
      "src/images/**/*.png",
   ]);
}

export const dev = gulp.series(watch);

/*
   Primary command to build a production version of the site.
*/
export function build() {
   return new Promise(resolve => {
      const eventListener = new EventEmitter();

      createTmpFolders();

      scripts();
      gulpSass();
      gulpCss();

      console.log('Building blog...');

      nunjucksRender([
         'src/html/**/*',
         '!src/html/_*/',
         '!src/html/_*/**/*',
      ])
      .on('end', function(err) {
         eventListener.emit('nunjucks complete');
      });

      eventListener.on('nunjucks complete', () => {
         console.log('Starting images...');

         gulpImages()
         .on('end', function() {
            gulpWebpProd();
         });

         fs.copySync("./src/static", "./public");
         siteMap();
      });

      resolve();
   });
}

export default dev;
