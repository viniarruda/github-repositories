import React from 'react'
import { shallow } from 'enzyme'

import Home from '../src/components/views/home'

import configureStore from 'redux-mock-store'

const mockStore = configureStore()

const initialState = {
  github: {
    loading: false,
    list: null,
    error: null,
    user: null,
    commits: null
  }
}

const store = mockStore(initialState)

describe('Testing Home Component', () => {
 it('should render correctly', () => {
   const wrapper = shallow(
     <Home />,
      { context: { store } }
   ).dive();

   expect(wrapper).toMatchSnapshot()
 })
})


// Shallow = simulate DOM