/*
   Converts sass files in src/sass folder to css files.
   Then moves the compiled css file(s) to the /public/assets/css folder.
*/
import fs from 'fs';
import beautifyCode from 'gulp-beautify-code';
import colors from 'colors/safe';
import cssnano from 'gulp-cssnano';
import debug from 'gulp-debug';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

/* determine if in production or dev mode */
const devMode = process.env.NODE_ENV !== 'production';

const distFolder = 'public/css';

/* Get browserlist array in package.json file */
const packageData = JSON.parse(fs.readFileSync('package.json'));
const browserslist = packageData.hasOwnProperty('browserslist') ? packageData.browserslist : [];

export function gulpSass() {
   return gulp.src(['src/styles/**/*.scss'])
   .pipe(sourcemaps.init())
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
   .pipe(gulpIf(devMode, sourcemaps.write('.')))
   .pipe(gulpIf(devMode, beautifyCode({
      indent_size: 4,
      indent_char: ' '
    })))
	.pipe(gulp.dest(distFolder));
}
