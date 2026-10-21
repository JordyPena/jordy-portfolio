// Keyword matching for the caddie chat. No real AI: each destination has a list
// of keywords, and the query goes to whichever destination matches best.

export const CONNECT_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jordypenadev/" },
  { label: "GitHub", href: "https://github.com/JordyPena" },
];

export const DESTINATIONS = [
  {
    id: "player",
    label: "Player",
    path: "/player",
    reply: "Good read. Walking you over to the Player card.",
    keywords: [
      "player",
      "about",
      "who",
      "yourself",
      "bio",
      "background",
      "jordy",
      "intro",
      "story",
    ],
  },
  {
    id: "highlights",
    label: "Highlights",
    path: "/highlights",
    reply: "Pulling the Highlights out of the bag.",
    keywords: [
      "highlight",
      "project",
      "portfolio",
      "work",
      "built",
      "build",
      "app",
      "showcase",
      "side",
    ],
  },
  {
    id: "skills",
    label: "Skills",
    path: "/skills",
    reply: "Here's what's in the bag. Heading to Skills.",
    keywords: [
      "skill",
      "stack",
      "tech",
      "frontend",
      "front end",
      "front-end",
      "backend",
      "back end",
      "back-end",
      "react",
      "javascript",
      "typescript",
      "node",
      "language",
      "tool",
    ],
  },
  {
    id: "tour",
    label: "Tour Progress",
    path: "/tour-progress",
    reply: "Let's check the leaderboard. Heading to Tour Progress.",
    keywords: [
      "tour",
      "career",
      "experience",
      "job",
      "resume",
      "history",
      "progress",
      "worked",
      "company",
      "companies",
      "role",
    ],
  },
  {
    id: "connect",
    label: "Connect",
    reply: "Let's tee it up. Here's where to find Jordy:",
    links: CONNECT_LINKS,
    keywords: [
      "connect",
      "contact",
      "linkedin",
      "github",
      "email",
      "reach",
      "hire",
      "social",
      "talk",
      "message",
    ],
  },
];

// "Player, Highlights, Skills, Tour Progress or Connect", kept in sync with the labels
const labels = DESTINATIONS.map(({ label }) => label);
const OPTIONS = `${labels.slice(0, -1).join(", ")} or ${labels[labels.length - 1]}`;

const MISSES = [
  `Oops, shanked it right. Try ${OPTIONS}.`,
  `That one's in the water. Want to take a drop and try ${OPTIONS}?`,
  `Fore! Way out of bounds. I can find ${OPTIONS}.`,
  `Lipped out. So close. Try ${OPTIONS}.`,
  `Topped it, barely made it off the tee. Try ${OPTIONS}.`,
  `Cover! Cover! we are in the bunker. Try ${OPTIONS}.`,
];

// Keywords match at the start of a word ("project" matches "projects"). Longer
// keywords score higher, so "worked" (tour) beats "work" (highlights).
export const findDestination = (query) => {
  const text = query.toLowerCase();
  let best = null;
  let bestScore = 0;

  DESTINATIONS.forEach((destination) => {
    const score = destination.keywords.reduce(
      (total, keyword) =>
        new RegExp(`\\b${keyword}`).test(text) ? total + keyword.length : total,
      0,
    );
    if (score > bestScore) {
      best = destination;
      bestScore = score;
    }
  });

  return best;
};

export const randomMiss = () =>
  MISSES[Math.floor(Math.random() * MISSES.length)];
