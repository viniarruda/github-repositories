import React from 'react'
import { shallow } from 'enzyme'

import Home from '../src/components/views/home'

describe('Testing Home Component', () => {
 it('should render correctly', () => {
   const wrapper = shallow(
     <Home />
   )

   expect(wrapper).toMatchSnapshot()
 })
})


// Shallow = simulate DOM