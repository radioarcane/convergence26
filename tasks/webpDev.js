import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import colors from 'colors/safe';

export function gulpWebpDev(src = []) {
   return gulp.src(src)
   .pipe(imagemin([
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
   ]))
   .on('error', err => {
      console.log(colors.red(err.toString()));
   })
   .pipe(webp({
      quality: 80
   }))
   .on('error', err => {
      console.log(colors.red(err.toString()));
   })
	.pipe(gulp.dest('tmp/images'))
   .on('error', err => {
      console.log(colors.red(err.toString()));
   });
}
