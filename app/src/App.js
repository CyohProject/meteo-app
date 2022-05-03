import { useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { currCoords } from './reducers/locationReducer.js'
import logo from './assets/logo.png'
import Menu from './components/Menu'
import MainPage from './components/MainPage'
import Maps from './components/Maps'

const App = () => {
  const dispatch = useDispatch()

  const coords = useSelector((state) => state.location.currCoords)

  useEffect(() => {
    dispatch(currCoords())
  }, [dispatch])

  return (
    <BrowserRouter>
      <header>
        <Link id='logo' to='/main'><img src={logo} alt='logo' /></Link>
        <Menu />
      </header>
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/maps' element={coords ? <Maps coords={coords} /> : null} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
