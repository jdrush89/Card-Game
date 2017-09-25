module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    env: {
      build: {
        NODE_ENV: 'development'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015', 'react', 'stage-2']
      },
      build: {
        files: [{
          'expand': true,
          'src': ['src/**/*.jsx'],
          'dest': 'lib/',
          'ext': '.js',
          'lib/': 'src/**/*.jsx'
        }]
      }
    },
    browserify: {
      dev: {
        options: {
          debug: true
        },
        files: {
          'public/build/build.js': 'lib/src/app/app.js'
        }
      },
      build: {
        options: {
          debug: true
        },
        files: {
          'public/build/build.js': 'lib/src/app/app.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['env:build', 'babel:build', 'browserify:build']);
};
