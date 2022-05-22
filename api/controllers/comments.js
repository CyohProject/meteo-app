const commentsRouter = require('express').Router()
const Comment = require('../models/Comment')

/** TODO:
 * @todo Add populte User to find comments
 * @todo Add User to create note
 * @todo Add like comment
*/
// GET all comments by state
commentsRouter.get('/', async (req, res) => {
  const comments = await Comment.find({ state: req.query.state })
  res.json(comments)
})

commentsRouter.post('/', async (req, res) => {
  const { text, state } = req.body
  if (!text) {
    return res.status(400).json({
      error: 'comment.text is missing'
    })
  }

  const newComment = new Comment({
    date: new Date().toISOString(),
    text,
    likes: 0,
    state
  })

  // Save into the DB
  const savedComment = await newComment.save()

  res.status(201).json(savedComment)
})

module.exports = commentsRouter
