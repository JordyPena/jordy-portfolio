import './home.css';
import Caddie from '../../Components/Caddie/Caddie';
import PuttingGreen from '../../Components/PuttingGreen/PuttingGreen';

const Home = () => (
  <main className='home'>
    <div className='home-scene'>
      <PuttingGreen className='home-green' />
      <Caddie className='home-caddie' />
    </div>
  </main>
);

export default Home;
