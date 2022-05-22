import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { IoIosSend } from 'react-icons/io'
import { FaRegComments } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { createComment } from '../reducers/commentsReducer'
const { Grid } = require('@mui/material')

/**
 * @todo Usuario logeado o sin logear
 *
 * @constant sendComment Add comment and after that set it back to blank
 * @constant calcTime Receives the date when the comment was made and compares with the current date
 * @constant MapComments returns the list with all the comments
 * @return Container with all the comments and the input to send them
 */

export default function Comments ({ locState }) {
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments)

  const [singleComment, setSingleComments] = useState('')

  const currentTime = moment().format()

  const sendComment = (e) => {
    e.preventDefault()

    if (singleComment === '') {
      console.warn('Not a valid value')
    } else {
      dispatch(createComment(singleComment, locState))
      setSingleComments('')
    }
  }

  const calcTime = (postDate) => {
    return moment(postDate).from(currentTime)
  }

  const MapComments = ({ data }) => {
    const commentsList = data.map(comment => {
      const postDate = moment(comment.date, 'YYYYMMDD')
      const timeFrom = calcTime(postDate)

      return (
        <li key={comment.id}>
          <ul className='liComments'>
            <li className='liTime'>{timeFrom}</li>
            <li>{comment.text}</li>
          </ul>
        </li>
      )
    })

    if (commentsList.length < 1) {
      return <p id='no-comments'>There are no comments at your location</p>
    } else {
      return <ul className='ulComments'>{commentsList}</ul>
    }
  }

  return (
    <>
      <Grid container direction='column'>
        <Grid container id='topContainer'>
          <h1 className='comments-title'>
            <FaRegComments id='commentIcon' />
            Comments
          </h1>
          <Grid item id='commentContainer'>
            <MapComments data={comments} />
          </Grid>
        </Grid>
        <form onSubmit={sendComment} id='commentForm'>
          <input
            type='text'
            value={singleComment}
            name='comment'
            placeholder='Type your comment'
            id='commentInput'
            onChange={({ target }) => setSingleComments(target.value)}
          />
          <Link to='#' onClick={sendComment} id='sendButton'>
            <IoIosSend size={30} color='aqua' />
          </Link>
        </form>
      </Grid>
    </>
  )
}
