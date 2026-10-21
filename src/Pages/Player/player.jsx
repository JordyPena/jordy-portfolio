import './player.css';
import { Link, NavLink } from 'react-router-dom';
import PLAYER from '../../Data/player';
import { CONNECT_LINKS, DESTINATIONS } from '../../Components/CaddieChat/caddieSearch';

// the same sections the caddie can take you to, shown as PGA Tour-style tabs
const TABS = DESTINATIONS.filter(({ path }) => path);

const InfoCard = ({ title, rows }) => (
  <section className='player-card'>
    <h3 className='player-card-title'>{title}</h3>
    <dl className='player-fields'>
      {rows.map(({ label, value }) => (
        <div key={label} className='player-field'>
          <dt>{label}</dt>
          <dd>
            {Array.isArray(value) ? (
              <ul className='player-tags'>
                {value.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              value
            )}
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

const Player = () => (
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

    <main className='player-container player-body'>
      <div className='player-main'>
        <section className='player-section'>
          <h2 className='player-section-title'>Bio</h2>
          {PLAYER.bio.map((paragraph) => (
            <p key={paragraph} className='player-bio'>
              {paragraph}
            </p>
          ))}
        </section>
      </div>

      <aside className='player-sidebar'>
        <InfoCard title='Player Profile' rows={PLAYER.profile} />
        <InfoCard title='Personal' rows={PLAYER.personal} />
        <section className='player-card'>
          <h3 className='player-card-title'>Follow</h3>
          <div className='player-card-links'>
            {CONNECT_LINKS.map(({ label, href }) => (
              <a key={label} href={href} target='_blank' rel='noreferrer'>
                {label}
                <span aria-hidden='true'>↗</span>
              </a>
            ))}
          </div>
        </section>
      </aside>
    </main>
  </div>
);

export default Player;
