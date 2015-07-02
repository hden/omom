# omom with coroutine, channel, and custom DOM element
This pattern is heavily inspired by golang [concurrency patterns](https://talks.golang.org/2012/concurrency.slide#19)

* each component runs within an individual coroutine
* components communicate via channels
* runloops are blocked until message, but the main loop remains free

## Running

To run the app, spin up an HTTP server (e.g. `python -m SimpleHTTPServer`) and visit http://localhost/.
