module.exports = function(grunt) {
  var config = {

    // Browserify
    // ----------
    // Concatenates all of our JS files
    // and allows to use node style
    // CommonJS modules, using `require()`.
    browserify: {

      dev: {
        options: {
          // this option creates
          // source maps for your
          // code.
          browserifyOptions: { debug: true }
        },

        src: 'client/scripts/app.js',
        dest: 'static/assets/js/app.js'
      }
    },

    // SASS
    // ----
    // Allows us to write SCSS rather
    // than regular CSS. Concatenates
    // our files using `import`.
    sass: {
      dev: {
        files: [{
          // Destination                 Source
          'static/assets/css/index.css': 'client/styles/index.scss'
        }]
      }
    },

    // Watch
    // -----
    // Constantly observes files for
    // changes and executes other tasks
    // when they change.
    watch: {
      js: {
        // js or json
        files: 'client/scripts/**/*.js*',
        tasks: ['browserify'],
        options: {
          livereload: true
        }
      },
      scss: {
        files: 'client/styles/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['static/**/*.html'],
        options: {
          livereload: true
        }
      }
    },

    // HTTP Server
    // -----------
    // Lightweight HTTP server that
    // acts as a dev-ready
    // way to serve your static files.
    devserver: {
      server : {
        options: {
          base: 'static',
          port: 3838,
          async: false
        }
      }
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-devserver');

  // Enables desktop notifications when grunt fails
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('dev', ['sass', 'browserify']);
  grunt.registerTask('default', ['devserver', 'dev', 'watch']);
};

