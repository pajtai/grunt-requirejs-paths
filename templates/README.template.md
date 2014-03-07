# grunt-requirejs-paths

> A helper multitask to create your paths object in main.js for requirejs

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-requirejs-paths --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-requirejs-paths');
```

## The "paths" task

### Overview
In your project's Gruntfile, add a section named `paths` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  paths: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

* `pathsJson` - the path to a `path.json` file that defines your requirejs paths. key value pairs where the value is a
string is used to build the paths object. You can nest as much as you want, and keys ending in a `+` a prefixed to nested keys.

    ```javascript
    {
        "example+" : {
            "View" : "app/view"
        },
        "template " "text!app/template.html"
    }

    // will produce
    , paths : {
        'exampleView' : 'app/view'
        'template' : 'text!app/template.html'
    }
    ```

    * default : 'paths.json'

* `mainTemplate` - a template file used to generate your `main.js`, inside the template the variable `paths` is the
outcome from `pathsJson`.

    ```javascript
    // sample usage
    (function () {
        'use strict';

        require.config({
            packages : [
                {
                    name : 'underscore',
                    location : '../vendor/lodash-amd/underscore'
                },
                {
                    name : 'masseuse',
                    location : '../vendor/masseuse/app'
                }
            ]
            // < %= paths %>
        });

        require([
            'backbone',
            'routers/router',
            'guideView'
        ], function (Backbone, Router, GuideView) {
            new GuideView().start();
            new Router();
            Backbone.history.start();
        });
    }());
    ```

    * default - `main.template.js`
* `main` - The path to where you want the final version of the main file to go.
    * default - `main.js`

### Known Issues

A comma is included at the beginning of the paths object. This will be configurable later.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

<%= releaseNotes.notes %>

_<%= warning.readme  + ' Created: ' + grunt.template.today('yyyy-mm-dd hh:MM:ss') %>_
