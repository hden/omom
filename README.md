# omom [![Circle CI](https://circleci.com/gh/hden/omom.svg?style=svg)](https://circleci.com/gh/hden/omom)
Bite-sized virtual-dom

## Why omom

* It is based on the [blazing fast](http://vdom-benchmark.github.io/vdom-benchmark/) virtual-dom implementation.
* It provides **optional** unidirectional event dispatcher, inspired by Flux and alt.js.
* It has no opinion on the tool you choose e.g. omom + immstruct, omom + Backbone.
* It is a very small collection of functions, no mixin, no inheritance, just functional composition.

## Example

### TodoMVC

* [omom + immstruct](https://github.com/hden/omom/tree/master/example/todomvc/immstruct)
* omom + pojo [coming soon]
* omom + Backbone [coming soon]
* omom + router [coming soon]

### Hello world

```js
/** @jsx h */
import {h, loop, component} from 'omom'

let List = component(({items}) => {
  items = items.map((item) => {
    return <li>{item}</li>
  })

  return (
    <ul>{items}</ul>
  )
})

let app = ({className, items}) => {
  return (
    <div className={className}>
      <List items={items} />
    </div>
  )
}

let createInitialState = loop(document.body, render)
let update = createInitialState({className: 'foobar', items: ['foo', 'bar']})

// performs update
update({className: 'foobar', items: ['foo', 'bar', 'baz']})
```

## Installation

    npm install --save omom

## Running Tests

Tests are served by zuul. Run `make test` and visit http://localhost:8080/__zuul.

## Inspirations

* Rob Pike's [state functions](http://cuddle.googlecode.com/hg/talk/lex.html#slide-17)
* Mike Bostock's [Reusable Charts](http://bost.ocks.org/mike/chart/)
* [virtual-dom](https://github.com/Matt-Esch/virtual-dom)
* [mercury](https://github.com/Raynos/mercury)
* [deku](http://github.com/segmentio/deku)
