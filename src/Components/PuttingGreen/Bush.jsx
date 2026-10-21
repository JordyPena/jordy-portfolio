// Azalea and plain shrubs for the putting green scene. Leaves and blooms are
// scattered over a dome with a seeded random, so each bush looks natural but
// renders identically on every load.

// Park-Miller PRNG: same seed, same bush
const seededRandom = (seed) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

// Gradients shared by every bush; render once inside the parent <svg>
export const BushDefs = () => (
  <>
    <radialGradient id="bush-mound" cx="40%" cy="30%" r="75%">
      <stop offset="0%" stopColor="#2f6a39" />
      <stop offset="60%" stopColor="#1f4a29" />
      <stop offset="100%" stopColor="#14341d" />
    </radialGradient>
    <linearGradient id="bush-leaf-azalea" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#4a8a50" />
      <stop offset="100%" stopColor="#1d4727" />
    </linearGradient>
    <linearGradient id="bush-leaf-shrub" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#6aa856" />
      <stop offset="100%" stopColor="#2d6532" />
    </linearGradient>
    {/* lighter throat at the petal base, deep magenta at the tip */}
    <radialGradient id="bush-petal" cx="50%" cy="100%" r="100%">
      <stop offset="0%" stopColor="#ffb8d9" />
      <stop offset="35%" stopColor="#f2559d" />
      <stop offset="100%" stopColor="#c8176c" />
    </radialGradient>
  </>
);

const PETAL_ANGLES = [0, 72, 144, 216, 288];
const STAMEN_ANGLES = [-40, -15, 10, 35];

const Bloom = ({ x, y, angle, size }) => (
  <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${size})`}>
    {PETAL_ANGLES.map((a) => (
      <ellipse key={a} cx="0" cy="-8" rx="6.5" ry="9" transform={`rotate(${a})`} fill="url(#bush-petal)" />
    ))}
    {STAMEN_ANGLES.map((a) => (
      <g key={a} transform={`rotate(${a})`}>
        <path d="M0 0 Q2 -8 0 -14" stroke="#b0145c" strokeWidth="0.8" fill="none" />
        <circle cx="0" cy="-14" r="1" fill="#8a0f48" />
      </g>
    ))}
    <circle r="2.4" fill="#f8e58c" opacity="0.9" />
  </g>
);

// x, y: center of the bush's base. flowers > 0 makes it an azalea.
const Bush = ({ x, y, w, h, seed, flowers = 0 }) => {
  const rand = seededRandom(seed);
  const leafFill = flowers ? 'url(#bush-leaf-azalea)' : 'url(#bush-leaf-shrub)';

  // random spot on the dome, plus the outward direction from its base
  const spot = (rMin, rMax, tMin = 0, tMax = Math.PI) => {
    const t = tMin + rand() * (tMax - tMin);
    const r = rMin + rand() * (rMax - rMin);
    return { px: x + Math.cos(t) * r * (w / 2), py: y - Math.sin(t) * r * h, outward: (-t * 180) / Math.PI };
  };

  // overlapping lumps give the mound a cloud-like outline instead of a perfect dome
  const lumps = Array.from({ length: 6 }, (_, k) => {
    const t = Math.PI * (0.08 + 0.168 * k);
    return {
      cx: x + Math.cos(t) * 0.6 * (w / 2),
      cy: y - Math.sin(t) * 0.55 * h,
      rx: w * (0.24 + rand() * 0.06),
      ry: h * (0.42 + rand() * 0.1),
    };
  });

  const leaves = Array.from({ length: Math.round((w * h) / 420) }, () => {
    const { px, py, outward } = spot(0.25, 0.98);
    return { px, py, angle: outward + rand() * 120 - 60, size: 0.6 + rand() * 0.45 };
  });

  const blooms = Array.from({ length: flowers }, () => {
    const { px, py } = spot(0.1, 0.85, 0.12 * Math.PI, 0.88 * Math.PI);
    return { x: px, y: py, angle: rand() * 72, size: 0.8 + rand() * 0.45 };
  });

  return (
    <g>
      <ellipse cx={x} cy={y + 4} rx={w * 0.55} ry={h * 0.12} fill="rgba(0, 0, 0, 0.25)" />
      <clipPath id={`bush-base-${seed}`}>
        <rect x={x - w} y={y - h * 2} width={w * 2} height={h * 2} />
      </clipPath>
      <g clipPath={`url(#bush-base-${seed})`} fill="url(#bush-mound)">
        <ellipse cx={x} cy={y} rx={w / 2} ry={h * 0.7} />
        {lumps.map((lump, i) => (
          <ellipse key={i} {...lump} />
        ))}
      </g>
      {leaves.map(({ px, py, angle, size }, i) => (
        <g key={i} transform={`translate(${px} ${py}) rotate(${angle}) scale(${size})`}>
          <path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z" fill={leafFill} />
          <path d="M2 0 L23 0" stroke="rgba(0, 0, 0, 0.18)" strokeWidth="0.8" />
        </g>
      ))}
      {blooms.map((bloom, i) => (
        <Bloom key={i} {...bloom} />
      ))}
    </g>
  );
};

export default Bush;
