module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-sass');
    // The following should be something like 'C:/webappbuilder/arcgis-web-appbuilder-2.6/WebAppBuilderForArcGIS/server/apps/9'
    var appDir = '[YOUR_PATH_TO]/WebAppBuilderForArcGIS/server/apps/[APP_ID]';
    // The following should be something like 'C:/webappbuilder/arcgis-web-appbuilder-2.6/WebAppBuilderForArcGIS/client/stemapp3d'
    var stemappDir = '[YOUR_PATH_TO]/WebAppBuilderForArcGIS/client/stemapp3d';
    grunt.initConfig({
        sync: {
            main: {
                verbose: true,
                files: [
                    {
                        cwd: 'dist/',
                        src: '**',
                        dest: stemappDir
                    },
                    {
                        cwd: 'dist/',
                        src: '**',
                        dest: appDir
                    }
                ]
            }
        },
        ts: {
            default: {
                tsconfig: {
                    passThrough: true
                }
            }
        },
        watch: {
            main: {
                files: [
                    'widgets/**',
                    'themes/**'
                ],
                tasks: [
                    'clean',
                    'sass',
                    'ts',
                    'copy',
                    'sync'
                ],
                options: {
                    spawn: false,
                    atBegin: true
                }
            }
        },
        copy: {
            'main': {
                'src': [
                    'widgets/**/**.html',
                    'widgets/**/**.json',
                    'widgets/**/**.css',
                    'widgets/**/images/**',
                    'widgets/**/nls/**',
                    'themes/**/**.html',
                    'themes/**/**.json',
                    'themes/**/**.css',
                    'themes/**/images/**',
                    'themes/**/nls/**'
                ],
                'dest': 'dist/',
                'expand': true
            }
        },
        clean: { 'dist': { 'src': 'dist/**' } },
        sass: {
            dist: {
                options: { sourceMap: true },
                files: [{
                        expand: true,
                        src: ['widgets/**/*.scss'],
                        rename: function (dest, src) {
                            return src.replace('scss', 'css');
                        }
                    }]
            }
        }
    });
    grunt.registerTask('default', ['watch']);
};