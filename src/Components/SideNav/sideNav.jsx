import '../SideNav/sideNav.css';
import { FaHome } from 'react-icons/fa';
import { GoFileSymlinkDirectory } from 'react-icons/go';
import { IoIosPaper } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SideNav = () => {
  const [isHomePathActive, setIsHomePathActive] = useState(false);
  const [isProjectsPathActive, setIsProjectsPathActive] = useState(false);
  const [isContactPathActive, setIsContactPathActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath= location.pathname
    switch (currentPath) {
      case '/home': 
      setIsHomePathActive(true);
      setIsProjectsPathActive(false);
      setIsContactPathActive(false);
      break;
      case '/projects':
        setIsProjectsPathActive(true);
        setIsHomePathActive(false);
        setIsContactPathActive(false);
      break;
      case '/contact':
        setIsContactPathActive(true);
        setIsHomePathActive(false);
        setIsProjectsPathActive(false);
      break;
      default:
    }

  }, [location])

  return (
    <aside className='sidenav-wrapper'>
      <ul className='ul-styles'>
        <li className={isHomePathActive ? 'active' : 'not-active'}>
          <span className='nav-icons'>
            <FaHome/>
          </span>
          <Link to='/home' className={isHomePathActive ? 'active' : 'not-active'}>
            <p className='nav-text'>Home</p>
          </Link>
        </li>
        <li className={isProjectsPathActive ? 'active' : 'not-active'}>
          <span className='nav-icons'>
            <GoFileSymlinkDirectory/>
          </span>
          <Link to='/projects' className={isProjectsPathActive ? 'active' : 'not-active'}>
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
        <li className={isContactPathActive ? 'active' : 'not-active'}>
          <span className='nav-icons'>
            <MdEmail/>
          </span>
          <Link to='/contact' className={isContactPathActive ? 'active' : 'not-active'}>
            <p className='nav-text'>Contact</p>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
export default SideNav;