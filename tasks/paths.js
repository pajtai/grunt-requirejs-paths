module.exports = function(grunt) {

    'use strict';
    var _ = require('lodash'),
        SUFFIX = '+';

    grunt.registerMultiTask('paths', 'Use JSON to define you paths block in requirejs', function() {

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
                pathsJson : 'paths.json',
                mainTemplate : 'main.template.js',
                main : 'main.js'
            }),
            paths = grunt.file.readJSON(options.pathsJson),
            template = grunt.file.read(options.mainTemplate);

        paths = createRequireJsPaths(paths);
        paths = grunt.template.process(template, {
            data : {
                paths : ' paths: \n        , paths: {\n            ' + format(paths) + '\n        }'
            }
        });

        grunt.file.write(options.main, paths);
    });

    function createRequireJsPaths(pathsTree, prefix) {
        var pathsToReturn = {};

        prefix = prefix || '';

        _.each(pathsTree, function(value, key) {

            if (_.isString(value)) {
                if (! pathsToReturn[key]) {
                    pathsToReturn[prefix + key] = value;
                } else {
                    grunt.fail.warn('Duplicate paths entry for: "' + key + '"');
                }
            } else {
                grunt.log.writeln("fetching paths for: " + key);
                pathsToReturn = _.extend(pathsToReturn, createRequireJsPaths(value, getPrefix(key)));
            }
        });
        return pathsToReturn;
    }

    function getPrefix(key) {
        if (SUFFIX === key.slice(-1)) {
            return key.slice(0,-1);
        }
        return '';
    }

    function format(paths) {
        var pathsArray = [];
        _.each(paths, function(value, key) {
             pathsArray.push(grunt.template.process("'<%= key %>' : '<%= value %>'", {
                 data : {
                     key : key,
                     value : value
                 }
             }));
        });
        return pathsArray.join(',\n            ');
    }
};
