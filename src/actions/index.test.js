import { SAVE_COMMENT, saveComment } from './index'

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment('New Comment')

    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has the correct payload', () => {
    const action = saveComment('New Comment')

    expect(action.payload).toEqual('New Comment')
  })
})