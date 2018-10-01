import commentsReducer from '../comments'
import { SAVE_COMMENT } from '../../actions'

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  const newState = commentsReducer([], action)

  expect(newState).toEqual(['New Comment'])
})

it('handles actions of unknown type', () => {
  const action = {
    type: 'UNKNOWN_TYPE',
    payload: 'UNKNOWN'
  }

  const newState = commentsReducer([], action)

  expect(newState).toEqual([])
})
