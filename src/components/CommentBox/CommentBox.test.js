import React from 'react'
import { mount } from 'enzyme'

import Store from '../../Store'
import CommentBox from '../CommentBox'

let wrapper

beforeEach(() => {
  wrapper = mount(<Store><CommentBox /></Store>)
})

afterEach(() => {
  wrapper.unmount()
})

describe('<CommentBox />', () => {
  it('has a text area', () => {
    expect(wrapper.find('textarea')).toHaveLength(1)
  })

  it('has a button', () => {
    expect(wrapper.find('button')).toHaveLength(1)
  })

  describe('textarea', () => {
    beforeEach(() => {
      // .simulate(event, mock)
      wrapper.find('textarea').simulate('change', {
        target: { value: 'new comment' }
      })

      // force re-render with .update()
      wrapper.update()
    })

    it('has a text area that users can type in', () => {
      expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
    })

    it('will clear textarea after submit', () => {
      wrapper.find('form').simulate('submit')

      wrapper.update()

      expect(wrapper.find('textarea').prop('value')).toEqual('')
    })
  })
})
