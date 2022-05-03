import * as MdIcons from 'react-icons/md'
import { WiDaySleetStorm } from 'react-icons/wi'
import { FiAlertTriangle } from 'react-icons/fi'
import { FaRegComments } from 'react-icons/fa'
import { VscNotebook } from 'react-icons/vsc'

export const MenuData = [
  {
    title: 'Access',
    path: '/login',
    icon: <MdIcons.MdLogin />,
    cName: 'nav-text'
  },
  {
    title: 'Location',
    path: '/location',
    icon: <MdIcons.MdOutlineLocationOn />,
    cName: 'nav-text'
  },
  {
    title: 'Maps',
    path: '/maps',
    icon: <WiDaySleetStorm />,
    cName: 'nav-text'
  },
  {
    title: 'Alerts',
    path: '/alerts',
    icon: <FiAlertTriangle />,
    cName: 'nav-text'
  },
  {
    title: 'Comments',
    path: '/comments',
    icon: <FaRegComments />,
    cName: 'nav-text'
  },
  {
    title: 'AboutUs',
    path: '/aboutus',
    icon: <VscNotebook />,
    cName: 'nav-text'
  }
]
