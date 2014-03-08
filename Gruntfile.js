'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.template.setDelimiters('bump');

    grunt.loadTasks('tasks');

    grunt.initConfig({
        warning : { readme : 'Compiled file. Do not modify directly.' },
        releaseNotes : {
            main : {
                src : 'templates/README.template.md',
                dest : 'README.md',
                baseLinkPath : 'https://github.com/pajtai/grunt-requirejs-paths/tree/master/'
            }
        },
        paths : {
            test1 : {
                options : {
                    pathsJson : 'test/fixtures/paths.json',
                    mainTemplate : 'test/fixtures/main1.template.js',
                    main : 'test/build/main1.js'
                }
            },
            test2 : {
                options : {
                    pathsJson : 'test/fixtures/paths.json',
                    mainTemplate : 'test/fixtures/main2.template.js',
                    main : 'test/build/main2.js',
                    prefixComma : true
                }
            },
            test3 : {
                options : {
                    pathsJson : 'test/fixtures/paths.json',
                    mainTemplate : 'test/fixtures/main3.template.js',
                    main : 'test/build/main3.js',
                    suffixComma : true
                }
            },
            test4 : {
                options : {
                    pathsJson : 'test/fixtures/paths2.json',
                    mainTemplate : 'test/fixtures/main1.template.js',
                    main : 'test/build/main4.js',
                    data : {
                        platform : 'mobile'
                    }
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/pathsTest.js']
            }
        }
    });

    grunt.registerTask('test', [
        'paths',
        'mochaTest'
    ]);
};
