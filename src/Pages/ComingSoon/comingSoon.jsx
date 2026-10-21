import './comingSoon.css';
import { Link } from 'react-router-dom';

// Placeholder for sections the caddie can send people to before they're built
const ComingSoon = ({ title }) => (
  <main className='coming-soon fairway-bg'>
    <p className='coming-soon-kicker'>Ground under repair</p>
    <h1 className='coming-soon-title'>{title}</h1>
    <p className='coming-soon-text'>This hole is still being mowed. Check back soon.</p>
    <Link className='coming-soon-link' to='/home'>
      ← Back to the green
    </Link>
  </main>
);

export default ComingSoon;
