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
        }
    });
};
