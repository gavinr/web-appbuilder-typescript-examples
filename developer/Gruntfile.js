module.exports = function(grunt) {
  'use strict';
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-text-replace');

  var configObject = {
    watch: {
      'main': {
        'files': ['app/**'],
        'tasks': [
          'copy:main',
          'ts',
          'replace'
        ],
        'options': {
          'spawn': false,
          'atBegin': true,
          'livereload': true
        }
      }
    },
    ts: {
      default: {
        tsconfig: {
          passThrough: true
        }
      }
    },
    replace: {
      default: {
        src: ['dist/**/*.js.map'],
        overwrite: true,
        replacements: [{
          from: /..\/..\/..\/app\/widgets\/Demo\//g,
          to: ""
        }]
      }
    },
    copy: {
      'main': {
        'cwd': 'app/',
        'src': [
          '**/**.html',
          '**/**.json',
          '**/**.css',
          '**/**.ts',
          '**/images/**',
          '**/nls/**',
          '**/lib/**',
          '**/*.ts',
          '*.ts',
          '**/*.js',
          '*.js'

        ],
        'dest': 'dist/',
        'expand': true
      },
      'zip': {
        cwd: 'temp/WebAppBuilderForArcGIS/client/stemapp3d',
        src: '**/*.*',
        dest: 'dist/',
        expand: true
      }
    },
    clean: {
      'dist': {
        'src': 'dist/*'
      },
      temp: {
        'src': 'temp/*'
      }
    },
    unzip: {
      'temp/': 'arcgis-web-appbuilder-2.12.zip'
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'dist',
          open: true,
          protocol: 'https'
        }
      }
    }
  };

  grunt.initConfig(configObject);
  grunt.registerTask('init', ['clean:temp', 'unzip', 'copy:zip', 'clean:temp']);
  grunt.registerTask('build', ['copy:main', 'ts', 'replace']);
  grunt.registerTask('serve', ['build', 'connect', 'watch']);
  grunt.registerTask('default', ['serve']);
};