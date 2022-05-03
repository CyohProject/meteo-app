import { useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { currCoords } from './reducers/locationReducer.js'
import Maps from './components/Maps'
import InitComp from './components/InitComp'

const App = () => {
  const dispatch = useDispatch()

  const coords = useSelector((state) => state.location.currCoords)

  useEffect(() => {
    dispatch(currCoords())
  }, [dispatch])

  return (
    <BrowserRouter>
      <header>
        <Link to='/' className='App-link'> Home </Link>
        <Link to='/maps' className='App-link'> Maps </Link>
      </header>
      <Routes>
        {/* <Route path='/' element={<MainPage />} /> */}
        <Route path='/maps' element={coords ? <Maps coords={coords} /> : null} />
      </Routes>
      <InitComp />
    </BrowserRouter>
  )
}

export default App
