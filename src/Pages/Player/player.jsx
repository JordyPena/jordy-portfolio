import './player.css';
import PLAYER from '../../Data/player';
import PlayerLayout from '../../Components/PlayerLayout/PlayerLayout';
import { CONNECT_LINKS } from '../../Components/CaddieChat/caddieSearch';

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
  <PlayerLayout className='player-body'>
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
  </PlayerLayout>
);

export default Player;
