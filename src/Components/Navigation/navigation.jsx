import { CgMenuRightAlt } from 'react-icons/cg'
import { RiAliensFill } from 'react-icons/ri';
import '../Navigation/navigation.css';
const Navigation = () => {
  return (
    <nav>
      <div className='icon-container'>
        <RiAliensFill color='black' size='4rem' />
        <CgMenuRightAlt color='black' size='4rem' />
      </div>
    </nav>
  )
}

export default Navigation;