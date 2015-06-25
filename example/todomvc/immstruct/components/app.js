/** @jsx omom.h */
import omom from '../../../../index'
import emit from '../actions/todoAction'

import Header      from './header'
import Footer      from './Footer'
import MainSection from './mainSection'

export default omom.component((root /* cursor */) => {
  return (
    <div>
      <Header />
      <MainSection {...root} />
      <Footer {...root}/>
    </div>
  )
})
