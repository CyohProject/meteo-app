import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { currCoords } from './reducers/locationReducer.js'
import Maps from './components/Maps'

const App = () => {
  const dispatch = useDispatch()

  const coords = useSelector((state) => state.location.currCoords)

  useEffect(() => {
    dispatch(currCoords())
  }, [dispatch])

  return (
    coords
      ? <Maps coords={coords} />
      : null
  )
}

export default App
