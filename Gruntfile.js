module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    concat: {
      build: {
        src: 'src/$.js',
        dest: 'dist/$.js'
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
    }
  });

  grunt.registerTask('build', ['concat:build', 'uglify:build']);
  grunt.registerTask('default', ['build']);
};
