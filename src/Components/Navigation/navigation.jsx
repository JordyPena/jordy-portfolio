import SideNav from '../SideNav/sideNav';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { RiAliensFill } from 'react-icons/ri';
import '../Navigation/navigation.css';
import { useState } from 'react';

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuSelected = () => {
    setOpenMenu(!openMenu)    
  }
  return (
    <nav>
      <div className='icon-container'>
        <RiAliensFill color='black' size='4rem' />
        {openMenu ?
          <button className='menu-btn' onClick={() => menuSelected()}>
            <CgClose color='black' size='4rem' />
          </button>
           :
          <button className='menu-btn' onClick={() => menuSelected()}>
            <CgMenuRightAlt color='black' size='4rem' />
          </button>
        }
      </div>
      {openMenu && <SideNav/>}
    </nav>
  )
}

export default Navigation;