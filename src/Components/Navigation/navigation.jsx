import { CgMenuRightAlt } from 'react-icons/cg'
import { SiReact } from 'react-icons/si';
import '../Navigation/navigation.css';
const Navigation = () => {
  return (
    <nav>
      <div className='icon-container'>
        <SiReact color='black' size='4rem' />
        <CgMenuRightAlt color='black' size='4rem' />
      </div>
    </nav>
  )
}

export default Navigation;