import axios from 'axios'

const baseUrl = '/api/comments'

const getAllBy = async state => {
  const { data } = await axios.get(baseUrl, { params: { state } })

  return data
}

/**
 * @todo Add user config
 * @param {*} text comment's text
 * @param {*} state user's state
 */
const createNew = async (text, state) => {
  const comment = { text, state }
  const { data } = await axios.post(baseUrl, comment)

  return data
}

export { getAllBy, createNew }
