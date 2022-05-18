import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import '../styles/CommentsMain.css'
import { IoIosSend } from 'react-icons/io'
import { FaRegComments } from 'react-icons/fa'
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
