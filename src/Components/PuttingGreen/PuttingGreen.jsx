// Putting green seen from a low angle: oval green with mowing stripes, a fringe,
// and the cup with a flagstick. Drawn on a 960x640 grid; light comes from the top left.
const HOLE = { x: 700, y: 336 };
const FLAG_TOP = 66;

const PuttingGreen = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 960 640"
    role="img"
    aria-label="Putting green with a flag marked 13"
  >
    <defs>
      <radialGradient id="green-surface" cx="42%" cy="40%" r="65%">
        <stop offset="0%" stopColor="#56a75c" />
        <stop offset="60%" stopColor="#3f9149" />
        <stop offset="100%" stopColor="#2f7a3c" />
      </radialGradient>
      <pattern id="green-stripes" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
        <rect width="40" height="80" fill="#ffffff" opacity="0.045" />
      </pattern>
      <clipPath id="green-clip">
        <ellipse cx="480" cy="390" rx="450" ry="225" />
      </clipPath>
      <linearGradient id="green-stick" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#c9ccc6" />
      </linearGradient>
      <linearGradient id="green-flag" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#f7dc4f" />
        <stop offset="45%" stopColor="#f4d23c" />
        <stop offset="70%" stopColor="#dcb92a" />
        <stop offset="100%" stopColor="#f2cf3a" />
      </linearGradient>
    </defs>

    {/* fringe, then the putting surface with mowing stripes */}
    <ellipse cx="480" cy="392" rx="472" ry="240" fill="#2a6b35" />
    <ellipse cx="480" cy="390" rx="450" ry="225" fill="url(#green-surface)" />
    <rect width="960" height="640" fill="url(#green-stripes)" clipPath="url(#green-clip)" />

    {/* shadows cast by the flagstick and flag */}
    <path
      d={`M${HOLE.x} ${HOLE.y + 2} L${HOLE.x + 150} ${HOLE.y + 70}`}
      stroke="rgba(0, 0, 0, 0.16)"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d={`M${HOLE.x + 132} ${HOLE.y + 62} L${HOLE.x + 190} ${HOLE.y + 84} L${HOLE.x + 186} ${HOLE.y + 102} L${HOLE.x + 128} ${HOLE.y + 80} Z`}
      fill="rgba(0, 0, 0, 0.12)"
    />

    {/* cup: dark hole with the white liner showing on the far wall */}
    <ellipse cx={HOLE.x} cy={HOLE.y} rx="28" ry="10" fill="#2a6b35" opacity="0.6" />
    <ellipse cx={HOLE.x} cy={HOLE.y} rx="25" ry="8.5" fill="#f2f2ec" />
    <ellipse cx={HOLE.x} cy={HOLE.y + 2.2} rx="24" ry="7" fill="#0c120d" />

    {/* flagstick */}
    <rect x={HOLE.x - 3} y={FLAG_TOP} width="6" height={HOLE.y - FLAG_TOP + 2} rx="3" fill="url(#green-stick)" />
    <circle cx={HOLE.x} cy={FLAG_TOP} r="4.5" fill="#ffffff" />

    {/* flag */}
    <path
      d={`M${HOLE.x + 3} ${FLAG_TOP + 6} Q${HOLE.x + 40} ${FLAG_TOP - 4} ${HOLE.x + 72} ${FLAG_TOP + 8} Q${HOLE.x + 100} ${FLAG_TOP + 18} ${HOLE.x + 114} ${FLAG_TOP + 12} L${HOLE.x + 114} ${FLAG_TOP + 70} Q${HOLE.x + 100} ${FLAG_TOP + 76} ${HOLE.x + 72} ${FLAG_TOP + 66} Q${HOLE.x + 40} ${FLAG_TOP + 54} ${HOLE.x + 3} ${FLAG_TOP + 64} Z`}
      fill="url(#green-flag)"
    />
    <text
      x={HOLE.x + 58}
      y={FLAG_TOP + 50}
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="34"
      fill="#0b6b45"
    >
      13
    </text>
  </svg>
);

export default PuttingGreen;
