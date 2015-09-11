# sortable-table

[![Build Status](https://travis-ci.org/felixzapata/sortable-table.png)](https://travis-ci.org/felixzapata/sortable-table)

An element providing a solution to show a table and sort the columns.

Update to Polymer 1.0 and added some tests of the example [Sortable Table with Polymer Web Components](http://stevenskelton.ca/sortable-table-with-polymer-web-components/).


## Demo

[http://felixzapata.github.io/sortable-table/](http://felixzapata.github.io/sortable-table/)

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

If you want to use the Gulp tasks inside this project, you should Gulp first:

    npm install -g gulp


## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/sortable-table/`, where `sortable-table` is the name of the directory containing it.


## Lint analysis

There are two tasks that can be run for this project: __lint__ and __watch__.

To use this tasks you must install the node modules inside ``package.json`` file:

    npm install

## Task: lint

Running this will execute a JSHint and JSCS analysis to the JavaScript code inside HTML files.

To run this task:

    gulp lint


### JSCS analysis

It uses the preset rules for [Airbnb](https://github.com/airbnb/javascript/tree/master/es5).
Overrides the rules:

* [disallowQuotedKeysInObjects](http://jscs.info/rule/disallowQuotedKeysInObjects): set to false
* [requireLineFeedAtFileEnd](http://jscs.info/rule/requireLineFeedAtFileEnd): removed


## Testing Your Element

Simply navigate to the `/test` directory of your element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/sortable-table/test/`

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.
