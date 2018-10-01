import React from 'react'
import { shallow } from 'enzyme'

import Home from '../Home'
import CommentBox from '../../components/CommentBox'
import CommentList from '../../components/CommentList'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Home />)
})

describe('<Home />', () => {
  it('renders <CommentBox />', () => {
    expect(wrapper.find(CommentBox)).toHaveLength(1)
  })

  it('renders <CommentList />', () => {
    expect(wrapper.find(CommentList)).toHaveLength(1)
  })

  it('render Home', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
