import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import '../styles/Comments.css'
import { IoIosSend } from 'react-icons/io'
import { FaRegComments } from 'react-icons/fa'
import { useSelector } from 'react-redux'
const { Grid } = require('@mui/material')

/**
 * @todo Enlazar cada comentario con la localidad del usuario que lo escribió (Cataluña, por ejemplo)
 * @todo Usuario logeado o sin logear
 * @todo Guardar los comentarios
 * @todo Mostrar solamente los comentarios del estado de la localidad establecida
 *
 * @constant sendComment Add comment and after that set it back to blank
 * @constant calcTime Receives the date when the comment was made and compares with the current date
 * @constant MapComments returns the list with all the comments
 * @return Container with all the comments and the input to send them
 */

export default function Comments () {
  const [singleComment, setSingleComments] = useState('')
  const [comments, setComments] = useState([])
  const currentTime = moment().format()
  const loc = useSelector(state => (state.location.loc))

  console.log(loc)

  const sendComment = (e) => {
    e.preventDefault()
    if (singleComment === '') {
      console.warn('Not a valid value')
    } else {
      setComments([...comments, singleComment])
      setSingleComments('')
    }
  }

  const calcTime = (postDate) => {
    const time = moment(postDate).from(currentTime)
    return time
  }

  const MapComments = (props) => {
    const postDate = moment('20220516', 'YYYYMMDD') // fecha de ejemplo
    const timeFrom = calcTime(postDate)
    const commentsList = props.data.map((comment, i) => {
      return (
        <li key={i}>
          <ul className='liComments'>
            <li className='liTime'>{timeFrom}</li>
            <li>{comment}</li>
          </ul>
        </li>
      )
    })

    if (commentsList.length < 1) {
      return <p id='no-comments'>There are no comments at your location</p>
    } else {
      return (
        <ul className='ulComments'>{commentsList}</ul>
      )
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
