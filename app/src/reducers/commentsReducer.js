import { getAllBy, createNew } from '../services/comments'
export const commentsReducer = (state = [], action) => {
  if (action.type === '@comments/init') {
    return action.payload
  }

  if (action.type === '@comments/new') {
    return [...state, action.payload]
  }

  return state
}

/**
 * Create a new comment
 * @param {*} text comment's text
 * @param {*} state user's state
 * @returns
 */
const createComment = (text, state) => {
  return async dispatch => {
    const newComment = await createNew(text, state)

    dispatch({
      type: '@comments/new',
      payload: newComment
    })
  }
}

/**
 * Will send, to the store, all the comments that we
 * have on the server side and match with the specific
 * state
 * @param {*} state user's state
 */
const initComments = (state) => {
  return async dispatch => {
    const comments = await getAllBy(state)

    dispatch({
      type: '@comments/init',
      payload: comments
    })
  }
}

export { createComment, initComments }
