import './home.css';
import Caddie from '../../Components/Caddie/Caddie';
import PuttingGreen from '../../Components/PuttingGreen/PuttingGreen';

const Home = () => (
  <main className='home'>
    <div className='home-scene'>
      <PuttingGreen className='home-green' />
      <header className='home-intro'>
        <h1 className='home-name'>Jordy Peña</h1>
        <p className='home-role'>
          React Developer
          <span className='home-role-divider' aria-hidden='true'>•</span>
          AI Engineer
        </p>
      </header>
      <Caddie className='home-caddie' />
    </div>
  </main>
);

export default Home;
