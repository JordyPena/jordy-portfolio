import './PlayerLayout.css';
import { Link, NavLink } from 'react-router-dom';
import PLAYER from '../../Data/player';
import { CONNECT_LINKS, DESTINATIONS } from '../CaddieChat/caddieSearch';

// the same sections the caddie can take you to, shown as PGA Tour-style tabs
const TABS = DESTINATIONS.filter(({ path }) => path);

// Hero (photo, name, follow links, stats strip, tabs) shared by every player
// page; each tab renders its own body as children.
const PlayerLayout = ({ className, children }) => (
  <div className='player'>
    <header className='player-hero fairway-bg'>
      <div className='player-container'>
        <Link className='player-back' to='/home'>
          ← Back to the green
        </Link>

        <div className='player-identity'>
          <div className='player-avatar'>
            {PLAYER.photo ? <img src={PLAYER.photo} alt={PLAYER.name} /> : <span>{PLAYER.initials}</span>}
          </div>
          <div>
            <p className='player-country'>
              <span className='player-flag' aria-hidden='true' />
              {PLAYER.country}
            </p>
            <h1 className='player-name'>{PLAYER.name}</h1>
            <p className='player-roles'>{PLAYER.roles.join(' · ')}</p>
            <div className='player-follow'>
              {CONNECT_LINKS.map(({ label, href }) => (
                <a key={label} href={href} target='_blank' rel='noreferrer'>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <dl className='player-stats'>
          {PLAYER.stats.map(({ label, value }) => (
            <div key={label} className='player-stat'>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <nav className='player-tabs' aria-label='Player sections'>
          {TABS.map(({ path, label }) => (
            <NavLink key={path} to={path} className='player-tab'>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>

    <main className={`player-container ${className}`}>{children}</main>
  </div>
);

export default PlayerLayout;
