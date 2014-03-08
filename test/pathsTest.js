'use strict';
var grunt = require('grunt'),
    read = grunt.file.read;

require('chai').should();

describe('grunt-requirejs-paths', function() {
    describe('defining the json, template, and main', function() {
        it('should replace "// <%= paths %>" with the paths object', function() {
            read('test/build/main1.js')
                .should.equal(read('test/expected/main1.js'));
        });
    });
    describe('prefixComma', function() {
        it('should place a comma before the paths object', function() {
            read('test/build/main2.js')
                .should.equal(read('test/expected/main2.js'));
        });
    });
    describe('suffixComma', function() {
        it('should place a comma after the paths object', function() {
            read('test/build/main3.js')
                .should.equal(read('test/expected/main3.js'));
        });
    });
    describe('options.data', function() {
        it('should be used as the data passed into the paths key/value templates',
            function() {
                read('test/build/main4.js')
                    .should.equal(read('test/expected/main4.js'));
            });
    });
});

