# omom TodoMVC Example

## Why omom

* It is based on the [blazing fast](http://vdom-benchmark.github.io/vdom-benchmark/) virtual-dom implementation.
* It provides **optional** unidirectional event dispatcher, inspired by Flux and alt.js.
* It has no opinion on the tool you choose e.g. omom + immstruct, omom + Backbone.
* It is a very small collection of functions, no mixin, no inheritance, just functional composition.

Here are some links you may find helpful:

* Why is React's concept of Virtual DOM said to be more performant than dirty model checking? [stackoverflow](http://stackoverflow.com/a/23995928)

## Building

This demo app is built with JSX and compiled by browserify with browserify plugin.
Run `make bundle.js` to build it from scratch.

## Running

To run the app, spin up an HTTP server (e.g. `python -m SimpleHTTPServer`) and visit http://localhost/.

## Running Tests

Tests are served by zuul. Run `make test` and visit http://localhost:8080/__zuul.
