const { Schema, model } = require('mongoose')

/** It's creating a new schema for the comments.
 * This schema doesn't apply to the DB, it's only for this backend
 */
const commentSchema = new Schema({
  date: Date,
  text: String,
  likes: Number,
  state: String
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }
})

// Configuring how the Schema needs to parse to JSON
// In this case we add an id without '_' and delete by default features
commentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// model's name => Connect to the collection 'name+s' in the db (or create it).
// The model's name initial letter must always be capitalized
const Comment = model('Comment', commentSchema)

module.exports = Comment
