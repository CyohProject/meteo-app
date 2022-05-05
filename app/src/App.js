import { useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './styles/App.css'
import { currCoords } from './reducers/locationReducer.js'
import logo from './assets/logo.png'
import Menu from './components/Menu'
import MainPage from './components/MainPage'
import Maps from './components/Maps'
import Alerts from './components/Alerts'
import AboutUs from './components/AboutUs'

/**
 * TODO:
 * Escribir ternario para MainPage o Init si
 * se han obtenido los datos o no
 */

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
        <Route path='/' element={<MainPage />} />
        <Route path='/maps' element={coords ? <Maps coords={coords} /> : null} />
        <Route path='/alerts' element={<Alerts />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

