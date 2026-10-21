// Content for the Skills page, laid out like PGA Tour player stats.
//
// Each skill: since/until are the years used (years shown = until or this year,
// minus since), level is 0-100 for the proficiency bar, playedAt is where it was
// used. Order within a category sets its rank.

const SKILLS = {
  // headline cards on the "All" tab, in rank order
  keyStats: ['React', 'TypeScript', 'Vue', 'Node.js', 'Angular', 'PostgreSQL', 'Next.js', 'Cypress'],

  categories: [
    {
      id: 'frontend',
      label: 'Front End',
      skills: [
        { name: 'React', since: 2020, level: 95, playedAt: 'Dialexa, Thinkful, personal projects' },
        { name: 'Vue', since: 2024, level: 90, playedAt: 'Threeflow (Vue 2 and Vue 3)' },
        { name: 'HTML5 & CSS3', since: 2020, level: 92, playedAt: 'Every stop' },
        { name: 'Angular', since: 2021, until: 2024, level: 82, playedAt: 'Dialexa (Deloitte)' },
        { name: 'Next.js', since: 2022, level: 80, playedAt: 'Personal projects' },
        { name: 'Angular Material', since: 2022, until: 2024, level: 75, playedAt: 'Dialexa (Deloitte)' },
        { name: 'React Native', since: 2022, until: 2024, level: 65, playedAt: 'Dialexa' },
        { name: 'Bootstrap', since: 2020, level: 70, playedAt: 'Thinkful, personal projects' },
      ],
    },
    {
      id: 'backend',
      label: 'Back End & Data',
      skills: [
        { name: 'RESTful APIs', since: 2020, level: 85, playedAt: 'Every stop' },
        { name: 'Node.js', since: 2020, level: 78, playedAt: 'Thinkful, personal projects' },
        { name: 'Express', since: 2020, level: 75, playedAt: 'Thinkful, personal projects' },
        { name: 'PostgreSQL', since: 2020, level: 72, playedAt: 'Thinkful, personal projects' },
        { name: '.NET', since: 2022, until: 2024, level: 55, playedAt: 'Dialexa' },
      ],
    },
    {
      id: 'languages',
      label: 'Languages',
      skills: [
        { name: 'JavaScript', since: 2020, level: 95, playedAt: 'Every stop' },
        { name: 'TypeScript', since: 2021, level: 90, playedAt: 'Dialexa, Threeflow' },
        { name: 'SQL', since: 2020, level: 72, playedAt: 'T-Mobile, Thinkful' },
      ],
    },
    {
      id: 'ai',
      label: 'AI',
      skills: [
        { name: 'Claude', since: 2024, level: 85, playedAt: 'Daily engineering workflow' },
        { name: 'AI document extraction', since: 2025, level: 80, playedAt: 'Threeflow' },
        { name: 'AI-assisted workflows', since: 2024, level: 78, playedAt: 'Threeflow, personal projects' },
      ],
    },
    {
      id: 'tools',
      label: 'Testing & Tools',
      skills: [
        { name: 'Git & GitHub', since: 2020, level: 92, playedAt: 'Every stop' },
        { name: 'Cypress', since: 2024, level: 82, playedAt: 'Threeflow' },
        { name: 'Vitest', since: 2024, level: 80, playedAt: 'Threeflow' },
        { name: 'Jira & Azure DevOps', since: 2021, level: 80, playedAt: 'Dialexa, Threeflow' },
        { name: 'Postman', since: 2021, level: 78, playedAt: 'Every stop' },
        { name: 'LaunchDarkly', since: 2024, level: 70, playedAt: 'Threeflow' },
      ],
    },
    {
      id: 'practices',
      label: 'Practices',
      skills: [
        { name: 'Component architecture', since: 2021, level: 92, playedAt: 'Every stop' },
        { name: 'Code review', since: 2021, level: 90, playedAt: 'Every stop' },
        { name: 'Scoping & estimation', since: 2021, level: 88, playedAt: 'Dialexa, Threeflow' },
        { name: 'Accessibility (WCAG)', since: 2022, level: 80, playedAt: 'Dialexa (Deloitte)' },
        { name: 'Localization (l10n)', since: 2022, level: 72, playedAt: 'Dialexa (Deloitte)' },
      ],
    },
  ],
};

export default SKILLS;
