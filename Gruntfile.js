module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    concat: {
      build: {
        src: 'src/$.js',
        dest: 'dist/$.js'
      }
    },

    karma: {
      // sadly, the file we test from isn't controllable here (tests src/$.js)
      options: {
        configFile: 'karma.conf.js',
        runnerPort: 9999,
        browsers: ['Firefox', 'Chrome', 'Safari', 'Opera']
      },
      all: {

      },
      build: {
        singleRun: true
      }
    },

    // mocha: {
    //   compiled: {
    //     src: 'dist/$.js',
    //     options: {
    //       helpers: 'test/helpers.js',
    //       specs: 'test/*.js'
    //     }
    //   }
    // },

    uglify: {
      options: {
        compress: true
      },
      build: {
        src: 'src/$.js',
        dest: 'dist/$.min.js'
      }
    },

    watch: {
      src: {
        files: ['src/*.js', 'test/*.js'],
        tasks: ['concat:build', 'karma:build:run']
      }
    }
  });

  grunt.registerTask('test', 'karma:all');
  grunt.registerTask('build', ['concat:build', 'karma:build', 'uglify:build']);
  grunt.registerTask('default', ['build']);
};
