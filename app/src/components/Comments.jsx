import { useState } from 'react'
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
  const currentTime = moment().unix()

  const sendComment = (e) => {
    e.preventDefault()
    if (singleComment === '') {
      console.warn('Not a valid value')
    } else {
      const postDate = moment().unix() // moment calendar
      console.log(postDate)
      const timeFrom = calcTime(postDate)
      console.log(timeFrom)
      setComments([...comments, singleComment])
      setSingleComments('')
    }
  }

  const calcTime = (postDate) => {
    const time = moment(currentTime).from(postDate)
    return time
  }

  const CommentList = (props) => {
    const commentList = props.data.map((comment, i) => <li className='liComments' key={i}>{comment}</li>)

    if (commentList.length < 1) {
      return <p id='no-comments'>There are no comments at your location</p>
    } else {
      return <ul className='ulComments'>{commentList}</ul>
    }
  }

  return (
    <>
      <Grid container direction='column'>
        <h1>
          <GoComment id='commentIcon' />
          Comentarios
        </h1>
        <Grid item id='commentContainer'>
          <CommentList data={comments} />
        </Grid>
        <form onSubmit={sendComment} id='commentForm'>
          <input
            type='text'
            value={singleComment}
            name='comment'
            placeholder='Escribe tu comentario'
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
