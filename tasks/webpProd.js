import gulp from 'gulp';
import webp from 'gulp-webp';

export function gulpWebpProd() {
   return gulp.src([
      'public/images/**/*.jpg',
      'public/images/**/*.jpeg',
      'public/images/**/*.png',
   ])
   .pipe(webp({
      quality: 80
   }))
	.pipe(gulp.dest('public/images'));
}
