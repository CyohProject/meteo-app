import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { IoIosSend } from 'react-icons/io'
import { FaRegComments } from 'react-icons/fa'
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
          <ul className='mainliComments'>
            <li className='mainliTime'>{timeFrom}</li>
            <li>{comment}</li>
          </ul>
        </li>
      )
    })

    if (commentsList.length < 1) {
      return <p id='mainno-comments'>There are no comments at your location</p>
    } else {
      return (
        <ul className='mainulComments'>{commentsList}</ul>
      )
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
