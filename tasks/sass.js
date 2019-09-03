/*
   Converts sass files in src/sass folder to css files.
   Then moves the compiled css file(s) to the /public/assets/css folder.
*/
import fs from 'fs';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import debug from 'gulp-debug';
import cssnano from 'gulp-cssnano';
import sass from 'gulp-sass';
import colors from 'colors/safe';
import sourcemaps from 'gulp-sourcemaps';
import beautifyCode from 'gulp-beautify-code';

/* determine if in production or dev mode */
const devMode = process.env.NODE_ENV !== 'production';

/* Get browserlist array in package.json file */
const packageData = JSON.parse(fs.readFileSync('package.json'));
const browserslist = packageData.hasOwnProperty('browserslist') ? packageData.browserslist : [];

export function gulpSass() {
   /* Scan sass files in the src/sass folder */
   return gulp.src(['src/sass/**/*.scss'])
   /* Setup sourcemaps */
   .pipe(sourcemaps.init())
   /*
      Convert sass files to css.
      Include node_modules folder to be able to import library files such as
      normalize.css or others from specific libraries
   */
	.pipe(sass({
		outputStyle: 'nested',
		includePaths: [
			'./node_modules'
		]
	}))
	.on('error', function(err){
		console.warn(colors.red(err));
		this.emit('end');
	})
   /*
      Run css file(s) through cssnano.

      cssnano: Minifies, autoprefixes, combines media queries, etc.
      https://cssnano.co/
   */
	.pipe(cssnano({
		autoprefixer: {
			browsers: browserslist,
			add: true
		}
	}))
   .on('error', function(err) {
      console.log(colors.red(err.toString()));
      this.emit('end');
   })
   /* Write sourcemap */
   .pipe(gulpIf(devMode, sourcemaps.write('.')))
   /*
      If in devMode, this will make the code clean to read through, delete is not necessary.
      If you do not want the code minified for production, remove the gulpIf function and
      simply add the beautifyCode function...
   */
   .pipe(gulpIf(devMode, beautifyCode({
      indent_size: 4,
      indent_char: ' '
    })))
    /* Output css file(s) */
	.pipe(gulp.dest('public/css'));
}
