'use strict';
var grunt = require('grunt'),
    read = grunt.file.read;

require('chai').should();

describe('grunt-requirejs-paths', function() {
    describe('defining the json, template, and main', function() {
        it('should replace "// <%= paths %>" with the paths object', function() {
            read('test/build/simple.js')
                .should.equal(read('test/expected/simple.js'));
        });
    });
    describe('prefixComma', function() {
        it('should place a comma before the paths object', function() {
            read('test/build/prefixComma.js')
                .should.equal(read('test/expected/prefixComma.js'));
        });
    });
    describe('suffixComma', function() {
        it('should place a comma after the paths object', function() {
            read('test/build/suffixComma.js')
                .should.equal(read('test/expected/suffixComma.js'));
        });
    });
    describe('options.data', function() {
        it('should be used as the data passed into the paths key/value templates',
            function() {
                read('test/build/templating.js')
                    .should.equal(read('test/expected/templating.js'));
            });
    });
});

