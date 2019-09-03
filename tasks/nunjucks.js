/*
   Converts nunjucks templates in src/html folder to html files.
   Then moves the compiled html file to the /public folder.
*/
import del from 'del';
import path from 'path';
import fs from 'fs';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import filter from 'gulp-filter';
import nunjucksRender from 'gulp-nunjucks-render';
import htmlmin from 'gulp-htmlmin';
import data from 'gulp-data';
import debug from 'gulp-debug';
import colors from 'colors/safe';
import beautifyCode from 'gulp-beautify-code';
import inlinesource from 'gulp-inline-source';
import posthtml from 'gulp-posthtml';
import phObfuscate from 'posthtml-obfuscate';

/* determine if in production or dev mode */
const devMode = process.env.NODE_ENV !== 'production';

/*
   Filter function to keep folders starting with '_' from being
   copied to the public folder.
*/

export function nunjucks() {
   /* Scan for files in the src/html folder */
   //return gulp.src('src/html/**/*')
   return gulp.src([
      'src/html/**/*',
      '!src/html/_*/',
      '!src/html/_*/**/*'
   ])
   /*
      Pass in JSON data to our templates
   */
   .pipe(data(function(file) {
      let obj = {};

      fs.readdirSync('src/html/_data/').forEach(file => {
         const thisData = JSON.parse(fs.readFileSync(`src/html/_data/${ file }`));
         obj = Object.assign({}, obj, thisData);
      });

      return obj;
   }))
   .on('error', function(err) {
      console.log(colors.red(err.toString()));
      //this.emit('end');
   })
   /* Convert Nunjucks templates to HTML */
   .pipe(nunjucksRender({
      path: ['src/html/']
   }))
   .on('error', function(err) {
      console.log(colors.red(err.toString()));
      //this.emit('end');
   })
   .pipe(inlinesource({
      compress: true,
      rootpath: path.resolve('public'),
   }))
   .on('error', function(err) {
      console.log(colors.red(err.toString()));
      this.emit('end');
   })
   .pipe(posthtml([
      phObfuscate({
         includeMailto: true
      })
   ]))
   /* If in production mode, minify html */
   .pipe(gulpIf(devMode === false, htmlmin({
      collapseWhitespace: true,
   })))
   /* If in dev mode, beautify html */
   .pipe(gulpIf(devMode, beautifyCode({
      indent_size: 4,
      indent_char: ' ',
      unformatted: ['code', 'pre']
    })))
   .on('error', function(err) {
      console.log(colors.red(err.toString()));
      //this.emit('end');
   })
   /* Output html files */
   .pipe(gulp.dest('public'))
   /* Delete empty nunjucks-related folders in public folder */
   .on('end', function() {
      /* Delete folders/files in build folder that are not needed */
      ['components', 'data', 'layouts', 'macros', 'partials']
      .forEach(fileFolder => {
         del(`public/_${ fileFolder }`, {
            force: true
         });
      });
   });
}
