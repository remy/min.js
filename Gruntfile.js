module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    concat: {
      build: {
        src: 'src/$.js',
        dest: 'dist/$.js'
      }
    },

    jasmine: {
      compiled: {
        src: 'dist/$.js',
        options: {
          helpers: 'test/helpers.js',
          specs: 'test/*.js'
        }
      }
    },

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
        tasks: ['concat:build', 'jasmine:compiled']
      }
    }
  });

  grunt.registerTask('test', 'jasmine:compiled');
  grunt.registerTask('build', ['concat:build', 'test', 'uglify:build']);
  grunt.registerTask('default', ['build']);
};
