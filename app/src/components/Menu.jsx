import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { useState } from 'react'

export default function Menu () {
  const [menu, setMenu] = useState(false)

  const showMenu = () => setMenu(!menu)

  return (
    <>
      <Link to='#' id='menu-open'>
        <FaIcons.FaBars onClick={showMenu} />
      </Link>
      <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showMenu}>
          <li className='navbar-toggle'>
            <Link to='#' id='menu-close'>
              <FaIcons.FaRegWindowClose />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
