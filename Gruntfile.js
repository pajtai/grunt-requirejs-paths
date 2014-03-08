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
            testSimple : {
                options : {
                    pathsJson : 'test/fixtures/simple.json',
                    mainTemplate : 'test/fixtures/simple.template.js',
                    main : 'test/build/simple.js'
                }
            },
            testPrefixComma : {
                options : {
                    pathsJson : 'test/fixtures/simple.json',
                    mainTemplate : 'test/fixtures/prefixComma.template.js',
                    main : 'test/build/prefixComma.js',
                    prefixComma : true
                }
            },
            testSuffixComma : {
                options : {
                    pathsJson : 'test/fixtures/simple.json',
                    mainTemplate : 'test/fixtures/suffixComma.template.js',
                    main : 'test/build/suffixComma.js',
                    suffixComma : true
                }
            },
            testTemplating : {
                options : {
                    pathsJson : 'test/fixtures/templating.json',
                    mainTemplate : 'test/fixtures/simple.template.js',
                    main : 'test/build/templating.js',
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
