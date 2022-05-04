
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currPosName } from '../reducers/locationReducer'

export default function InitialPage ({ coords }) {
  // WARNING --> If we use useState, we'll be able only to use its information in the return statement. I think that with re-renders the state goes again to its initial state and we can use it for, for example: sending it to dispatch actions and then to store and use it in other components.
  const dispatch = useDispatch()
  const currLocName = useSelector((state) => state.location.currPosName)
  console.log(currLocName)
  // Once the component is mounted, this will be executed
  useEffect(() => {
    dispatch(currPosName(coords))
  }, [dispatch, coords])

  // console.log(location)
  return (
    <div className='currentPosition-container' />
  )
}
