// Content for the Player page, laid out like a PGA Tour player bio.
// Edit the copy here; the page just renders it.

const PLAYER = {
  name: "Jordy Peña",
  initials: "JP",
  // drop a headshot in public/images and set e.g. '/images/jordy.jpg' to replace the monogram
  photo: null,
  roles: ["Front-End Developer", "AI Engineer", "Golfer"],
  country: "United States",
  location: "Tyler, TX",

  stats: [
    { label: "Turned Pro", value: "2021" },
    { label: "Experience", value: "5+ Years" },
    { label: "Tour Stops", value: "3" },
    { label: "Residence", value: "Tyler, TX" },
    { label: "Academy", value: "Thinkful" },
  ],

  bio: [
    "I'm a software engineer based in Tyler, Texas, with 5+ years building production web applications in React, Angular and Vue with TypeScript. I work across the full life of a feature: shaping the scope, estimating the effort, designing how it fits into the existing system, and seeing it through to production, while weighing technical debt against business deadlines.",
    "I care about how a codebase holds up over time. I favor clear boundaries, shared patterns and components that are easy to reason about, and I'd rather make a system simpler than add another layer on top of it. On a new project, I look for the decisions that will be expensive to undo, get those right first, and then move fast on everything else.",
    "I've led work through large migrations, new product lines and AI-powered features, and I do my best work where product, design and engineering meet: turning loose ideas into a plan a team can actually ship, raising risks early, and keeping momentum when requirements shift.",
    "Strong teams are built, not hired. I invest in the people around me through thoughtful code review, pairing and mentorship, help set the standards a team holds itself to, and take part in hiring to bring in engineers who raise the bar.",
    "Off the clock, you'll usually find me with my family or on the golf course.",
  ],

  profile: [
    { label: "Position", value: "Front-End Software Engineer" },
    { label: "Plays", value: "React, Vue, Angular, TypeScript" },
    { label: "Plays From", value: "Tyler, TX (DFW area)" },
    { label: "Available For", value: "Remote, hybrid or on-site" },
  ],

  personal: [
    {
      label: "Hobbies",
      value: ["Golf", "Gym", "Family time", "Movies", "Gaming", "Sports"],
    },
  ],
};

export default PLAYER;
