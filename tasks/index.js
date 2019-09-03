/*
   Gulp entry file with your main commands
*/
import fs from 'fs-extra';
import gulp from 'gulp';
import { scripts } from './webpack';
import { server, serverReload }  from './server';
import { nunjucks as nunjucksRender }  from './nunjucks';
import { gulpSass } from './sass';
/*
   Primary command to work with while developing.
*/
function watch() {
   nunjucksRender();
   scripts();
   gulpSass();
   server();

   gulp.watch('src/html/**/*')
   .on('change', () => {
      Promise.resolve(nunjucksRender())
      .then(() => serverReload());
   });

   gulp.watch('src/js/**/*.js')
   .on('change', () => {
      scripts().then(() => serverReload());
   });

   gulp.watch('src/sass/**/*.scss')
   .on('change', () => {
      Promise.resolve(gulpSass())
      .then(() => serverReload());
   });
}

export const dev = gulp.series(watch);


/*
   Primary command to build a production version of the site.
*/
export function build() {
   return new Promise(resolve => {
      Promise.all([
         scripts(),
         gulpSass(),
         nunjucksRender(),
         fs.copySync('./src/static', './public')
      ])
      .then(() => {
         resolve();
      });
    });
}

export default dev;
