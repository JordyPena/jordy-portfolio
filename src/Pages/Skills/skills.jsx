import './skills.css';
import { useState } from 'react';
import SKILLS from '../../Data/skills';
import PlayerLayout from '../../Components/PlayerLayout/PlayerLayout';

const THIS_YEAR = new Date().getFullYear();
const ALL = 'all';

const yearsUsed = ({ since, until }) => Math.max(1, (until || THIS_YEAR) - since);

const ordinal = (n) => {
  const suffix = { 1: 'st', 2: 'nd', 3: 'rd' }[n % 100 > 10 && n % 100 < 14 ? 0 : n % 10] || 'th';
  return `${n}${suffix}`;
};

const ALL_SKILLS = SKILLS.categories.flatMap(({ skills }) => skills);
const KEY_STATS = SKILLS.keyStats.map((name) => ALL_SKILLS.find((skill) => skill.name === name));

const Bar = ({ level }) => (
  <span className='skills-bar' role='img' aria-label={`${level} out of 100`}>
    <span style={{ width: `${level}%` }} />
  </span>
);

const StatCard = ({ skill, rank }) => (
  <article className='skills-card'>
    <header className='skills-card-head'>
      <h3>{skill.name}</h3>
      <span className='skills-card-rank'>{ordinal(rank)}</span>
    </header>
    <p className='skills-card-value'>
      {yearsUsed(skill)}
      <span> yrs</span>
    </p>
    <Bar level={skill.level} />
    <p className='skills-card-caption'>Since {skill.since}</p>
  </article>
);

const CategoryTable = ({ category }) => (
  <section className='skills-table-section'>
    <h2 className='player-section-title'>{category.label}</h2>
    <table className='skills-table'>
      <thead>
        <tr>
          <th>Skill</th>
          <th>Rank</th>
          <th>Proficiency</th>
          <th>Years</th>
          <th>Played At</th>
        </tr>
      </thead>
      <tbody>
        {category.skills.map((skill, i) => (
          <tr key={skill.name}>
            <th scope='row'>{skill.name}</th>
            <td className='skills-rank'>{i + 1}</td>
            <td>
              <Bar level={skill.level} />
            </td>
            <td className='skills-years'>{yearsUsed(skill)}</td>
            <td className='skills-where'>{skill.playedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

// Mirrors the PGA Tour stats tab: category filter, headline stat cards, then
// a rankings table per category
const Skills = () => {
  const [filter, setFilter] = useState(ALL);
  const categories = filter === ALL ? SKILLS.categories : SKILLS.categories.filter(({ id }) => id === filter);
  const cards = filter === ALL ? KEY_STATS : categories[0].skills.slice(0, 4);

  return (
    <PlayerLayout className='skills-body'>
      <div className='skills-filters' role='tablist' aria-label='Skill categories'>
        {[{ id: ALL, label: 'All' }, ...SKILLS.categories].map(({ id, label }) => (
          <button
            key={id}
            type='button'
            role='tab'
            aria-selected={filter === id}
            className='skills-filter'
            onClick={() => setFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <section className='skills-key-stats'>
        <h2 className='player-section-title'>
          Key Stats <span className='skills-season'>Through {THIS_YEAR}</span>
        </h2>
        <div className='skills-cards'>
          {cards.map((skill, i) => (
            <StatCard key={skill.name} skill={skill} rank={i + 1} />
          ))}
        </div>
      </section>

      {categories.map((category) => (
        <CategoryTable key={category.id} category={category} />
      ))}
    </PlayerLayout>
  );
};

export default Skills;
