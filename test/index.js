// test enviroment
import 'phantomjs-polyfill'
import addon from 'chai-jquery'
chai.use(addon)

// PhantomJS polyfills
if (!Object.is) {
  Object.is = (x, y) => {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y
    } else {
      return x !== x && y !== y
    }
  }
}

// test suites
import './h'
import './cx'
import './action'
import './component'
import './main-loop'
