import colors from 'colors/safe';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export function gulpImages() {
   return gulp.src([
      'src/images/**/*'
   ])
   .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
       plugins: [
			{ removeViewBox: true },
			{ cleanupIDs: false }
	    ]
	  })
   ]))
   .on('error', err => {
      console.log(colors.red(err.toString()));
      this.emit('end');
   })
	.pipe(gulp.dest('public/images'));
}
