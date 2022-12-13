import '../SideNav/sideNav.css';
import { FaHome } from 'react-icons/fa';
import { GoFileSymlinkDirectory } from 'react-icons/go';
import { IoIosPaper } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <aside className='sidenav-wrapper'>
      <ul className='ul-styles'>
        <li>
          <span className='nav-icons'>
            <FaHome/>
          </span>
          <Link to='/home'>
            <p className='nav-text'>Home</p>
          </Link>
        </li>
        <li>
          <span className='nav-icons'>
            <GoFileSymlinkDirectory/>
          </span>
          <Link to='/projects'>
            <p className='nav-text'>Projects</p>
          </Link>
        </li>
        <li>
          <span className='nav-icons'>
            <IoIosPaper/>
          </span>
          <a href='https://docs.google.com/document/d/e/2PACX-1vSfJIbR4g8kaari8q9Dcl7N_RnYLLNPHzM1wRwMeyxzxIiSpSMtFjD4nvthz8MO0V2nNtTYD-igf7ff/pub' target='_blank' rel='noreferrer noopener' content-Type='application/pdf'>
            <p className='nav-text'>Resume</p>
          </a>
        </li>
        <li>
          <span className='nav-icons'>
            <MdEmail/>
          </span>
          <Link to='/contact'>
            <p className='nav-text'>Contact</p>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
export default SideNav;