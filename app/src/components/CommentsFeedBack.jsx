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

export default function CommentsFeedBack ({ locState }) {
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
          <ul className='mainliComments'>
            <li className='mainliTime'>{timeFrom}</li>
            <li>{comment.text}</li>
          </ul>
        </li>
      )
    })

    if (commentsList.length < 1) {
      return <p id='mainno-comments'>There are no comments at your location</p>
    } else {
      return <ul className='mainulComments'>{commentsList}</ul>
    }
  }

  return (
    <>
      <Grid container direction='column' id='mainParentContainer'>
        <Grid container id='maintopContainer'>
          <h1 className='maincomments-title'>
            <FaRegComments id='maincommentIcon' />
            Comments
          </h1>
          <Grid item id='maincommentContainer'>
            <MapComments data={comments} />
          </Grid>
        </Grid>
        <form onSubmit={sendComment} id='maincommentForm'>
          <input
            type='text'
            value={singleComment}
            name='comment'
            placeholder='Type your comment'
            id='maincommentInput'
            onChange={({ target }) => setSingleComments(target.value)}
          />
          <Link to='#' onClick={sendComment} id='mainsendButton'>
            <IoIosSend size={30} color='aqua' />
          </Link>
        </form>
      </Grid>
    </>
  )
}
