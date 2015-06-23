# omom [![Circle CI](https://circleci.com/gh/hden/omom.svg?style=svg)](https://circleci.com/gh/hden/omom)
Bite-sized virtual-dom

## Example

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

## Development

    npm install
    npm test

### browser tests

    make test


## Inspirations

* Rob Pike's [state functions](http://cuddle.googlecode.com/hg/talk/lex.html#slide-17)
* [virtual-dom](https://github.com/Matt-Esch/virtual-dom)
* [mercury](https://github.com/Raynos/mercury)
* [deku](http://github.com/segmentio/deku)
