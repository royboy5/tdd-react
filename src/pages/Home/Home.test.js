import React from 'react'
import { shallow } from 'enzyme'

import Home from '../Home'
import CommentBox from '../../components/CommentBox'
import CommentList from '../../components/CommentList'

describe('<Home />', () => {
  it('renders <CommentBox />', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper.find(CommentBox).length).toEqual(1)
  })

  it('renders <CommentList />', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper.find(CommentList).length).toEqual(1)
  })
})
