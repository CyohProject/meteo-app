import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import '../styles/Comments.css'
import { IoIosSend } from 'react-icons/io'
import { GoComment } from 'react-icons/go'
const { Grid } = require('@mui/material')

/** TODO
 * Enlazar cada comentario con la localidad del usuario que
 * lo escribió (Cataluña, por ejemplo)
 * Usuario logeado o sin logear
 * Guardar los comentarios
 * Mostrar solamente los comentarios del estado de la localidad establecida
 * Hacer que la todo el contendor sea más responsive (en MainPage no encaja
 * bien y crea scroll por lo grande que es)
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
        <h1>
          <GoComment id='commentIcon' />
          Comments
        </h1>
        <Grid item id='commentContainer'>
          <MapComments data={comments} />
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
