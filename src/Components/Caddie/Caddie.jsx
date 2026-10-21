// Gnome caddie in a Masters-style white jumpsuit and green cap, drawn in a
// glossy emoji style. Drawn on a 220x280 grid; size it with CSS width on the className.

// Irons in the bag, back to front: shaft x, where the shaft tops out, and whether
// the toe points right. Staggered heights fan them out like a real set.
const IRONS = [
  { x: 60, top: 44, flip: true },
  { x: 50, top: 50, flip: false },
  { x: 70, top: 52, flip: true },
  { x: 42, top: 58, flip: false },
  { x: 78, top: 60, flip: true },
];
const Caddie = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 220 280"
    role="img"
    aria-label="Gnome caddie in a white jumpsuit and green cap"
  >
    <defs>
      <radialGradient id="caddie-skin" cx="40%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#ffe2cc" />
        <stop offset="60%" stopColor="#f7c4a2" />
        <stop offset="100%" stopColor="#e39d78" />
      </radialGradient>
      <radialGradient id="caddie-nose" cx="38%" cy="32%" r="70%">
        <stop offset="0%" stopColor="#ffc2ad" />
        <stop offset="55%" stopColor="#f2957d" />
        <stop offset="100%" stopColor="#d4725c" />
      </radialGradient>
      <radialGradient id="caddie-blush" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff8f86" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#ff8f86" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="caddie-suit" x1="0" y1="0" x2="1" y2="0.3">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="70%" stopColor="#eef0ec" />
        <stop offset="100%" stopColor="#cfd4cd" />
      </linearGradient>
      <linearGradient id="caddie-beard" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="75%" stopColor="#f3f2ee" />
        <stop offset="100%" stopColor="#dcdad3" />
      </linearGradient>
      <radialGradient id="caddie-cap" cx="35%" cy="25%" r="80%">
        <stop offset="0%" stopColor="#2aa06c" />
        <stop offset="55%" stopColor="#0f7148" />
        <stop offset="100%" stopColor="#084d31" />
      </radialGradient>
      <linearGradient id="caddie-brim" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0d6640" />
        <stop offset="100%" stopColor="#063d27" />
      </linearGradient>
      <linearGradient id="caddie-leather" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#c48a52" />
        <stop offset="55%" stopColor="#9a6233" />
        <stop offset="100%" stopColor="#6b3f1d" />
      </linearGradient>
      <linearGradient id="caddie-steel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f4f6f8" />
        <stop offset="100%" stopColor="#9aa1a8" />
      </linearGradient>
      {/* userSpaceOnUse so the shadow isn't clipped on thick strokes (arms) */}
      <filter
        id="caddie-shadow"
        filterUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="220"
        height="280"
      >
        <feDropShadow
          dx="0"
          dy="2.5"
          stdDeviation="2.5"
          floodColor="#000"
          floodOpacity="0.18"
        />
      </filter>
    </defs>

    {/* ground shadow */}
    <ellipse cx="110" cy="266" rx="70" ry="9" fill="rgba(0, 0, 0, 0.3)" />

    {/* brown leather golf bag slung behind the gnome's right shoulder */}
    <g transform="rotate(-20 60 120)" filter="url(#caddie-shadow)">
      {/* iron heads sit upside down in the bag: hosel at the bottom, sole on top.
          The head is drawn around a hosel at x=47, y=56 and moved/mirrored onto each shaft. */}
      {IRONS.map(({ x, top, flip }) => (
        <g key={x}>
          <rect
            x={x - 1.5}
            y={top}
            width="3"
            height={112 - top}
            rx="1.5"
            fill="url(#caddie-steel)"
          />
          <g
            transform={
              flip
                ? `translate(${x + 47} ${top - 56}) scale(-1 1)`
                : `translate(${x - 47} ${top - 56})`
            }
          >
            <path
              d="M48 59 L49 48 Q49 45.5 46.5 45.5 L35 45 Q29.5 45 29.5 51 Q29.5 57 35 57.5 L45 54.5 L45 59 Z"
              fill="url(#caddie-steel)"
              stroke="#7d848b"
              strokeWidth="0.6"
            />
            <path
              d="M34 49 L45 48.5 M33.5 52 L45 51.5"
              stroke="#8a9097"
              strokeWidth="0.6"
            />
          </g>
        </g>
      ))}

      <rect
        x="38"
        y="108"
        width="44"
        height="132"
        rx="14"
        fill="url(#caddie-leather)"
      />
      <rect x="44" y="148" width="32" height="42" rx="8" fill="#8a552a" />
      <rect
        x="47"
        y="151"
        width="26"
        height="36"
        rx="6"
        fill="none"
        stroke="#e2c08f"
        strokeWidth="1.2"
        strokeDasharray="3 2.5"
      />
      <rect x="38" y="224" width="44" height="16" rx="8" fill="#5a3518" />
      <rect x="34" y="102" width="52" height="16" rx="8" fill="#6b3f1d" />
      <path
        d="M38 110 L82 110"
        stroke="#e2c08f"
        strokeWidth="1.2"
        strokeDasharray="3 2.5"
      />
    </g>

    {/* legs and shoes */}
    <rect
      x="78"
      y="196"
      width="28"
      height="58"
      rx="11"
      fill="url(#caddie-suit)"
    />
    <rect
      x="114"
      y="196"
      width="28"
      height="58"
      rx="11"
      fill="url(#caddie-suit)"
    />
    <g filter="url(#caddie-shadow)">
      <ellipse cx="89" cy="257" rx="21" ry="11" fill="url(#caddie-suit)" />
      <ellipse cx="89" cy="261" rx="16" ry="7" fill="url(#caddie-cap)" />
      <ellipse cx="131" cy="257" rx="21" ry="11" fill="url(#caddie-suit)" />
      <ellipse cx="131" cy="261" rx="16" ry="7" fill="url(#caddie-cap)" />
    </g>

    {/* jumpsuit torso */}
    <path
      d="M70 152 Q70 136 90 134 L130 134 Q150 136 150 152 L154 206 Q154 214 146 214 L74 214 Q66 214 66 206 Z"
      fill="url(#caddie-suit)"
      filter="url(#caddie-shadow)"
    />
    <path d="M70 206 L150 206" stroke="#d7dbd4" strokeWidth="2" />
    <path d="M110 196 L110 214" stroke="#c3c8c0" strokeWidth="2" />
    <rect x="107" y="198" width="6" height="8" rx="2" fill="#b9beb6" />
    <text
      x="141"
      y="190"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="15"
      fill="#0b6b45"
    >
      13
    </text>

    {/* bag strap over the shoulder */}
    <path
      d="M80 136 Q88 175 80 212"
      stroke="#7a4a24"
      strokeWidth="9"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M78 140 Q85 175 78 208"
      stroke="#c48a52"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />

    {/* arm hanging at the side */}
    <path
      d="M150 152 Q166 178 161 200"
      stroke="url(#caddie-suit)"
      strokeWidth="20"
      fill="none"
      strokeLinecap="round"
      filter="url(#caddie-shadow)"
    />
    <circle
      cx="161"
      cy="205"
      r="10.5"
      fill="url(#caddie-skin)"
      filter="url(#caddie-shadow)"
    />

    {/* head */}
    <circle
      cx="110"
      cy="112"
      r="35"
      fill="url(#caddie-skin)"
      filter="url(#caddie-shadow)"
    />
    <ellipse cx="87" cy="128" rx="10" ry="7" fill="url(#caddie-blush)" />
    <ellipse cx="133" cy="128" rx="10" ry="7" fill="url(#caddie-blush)" />

    {/* eyes and bushy brows */}
    <ellipse cx="97" cy="121" rx="4.2" ry="5.2" fill="#3b2416" />
    <ellipse cx="123" cy="121" rx="4.2" ry="5.2" fill="#3b2416" />
    <circle cx="98.4" cy="119" r="1.6" fill="#fff" />
    <circle cx="124.4" cy="119" r="1.6" fill="#fff" />
    <path
      d="M89 113 Q96 106 104 112"
      stroke="#fbfaf6"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M116 112 Q124 106 131 113"
      stroke="#fbfaf6"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />

    {/* beard */}
    <path
      d="M74 118 Q70 160 90 188 Q100 200 110 204 Q120 200 130 188 Q150 160 146 118 Q140 140 126 143 Q110 150 94 143 Q80 140 74 118 Z"
      fill="url(#caddie-beard)"
      filter="url(#caddie-shadow)"
    />
    <g stroke="#dedcd5" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <path d="M92 156 Q95 172 102 186" />
      <path d="M110 158 L110 194" />
      <path d="M128 156 Q125 172 118 186" />
      <path d="M84 146 Q84 160 90 172" />
      <path d="M136 146 Q136 160 130 172" />
    </g>

    {/* mustache and nose */}
    <path
      d="M110 139 Q98 132 87 139 Q80 144 74 139 Q76 154 92 152 Q103 150 110 144 Q117 150 128 152 Q144 154 146 139 Q140 144 133 139 Q122 132 110 139 Z"
      fill="url(#caddie-beard)"
      filter="url(#caddie-shadow)"
    />
    <circle
      cx="110"
      cy="131"
      r="10.5"
      fill="url(#caddie-nose)"
      filter="url(#caddie-shadow)"
    />
    <ellipse cx="106.5" cy="127" rx="3.5" ry="2.5" fill="#fff" opacity="0.55" />

    {/* fist gripping the strap, in front of the beard */}
    <path
      d="M70 152 Q54 180 64 194 Q74 200 84 180"
      stroke="url(#caddie-suit)"
      strokeWidth="20"
      fill="none"
      strokeLinecap="round"
      filter="url(#caddie-shadow)"
    />
    <circle
      cx="85"
      cy="176"
      r="11"
      fill="url(#caddie-skin)"
      filter="url(#caddie-shadow)"
    />
    <path
      d="M78 172 Q85 169 92 172"
      stroke="#d9906d"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />

    {/* green caddie cap */}
    <g filter="url(#caddie-shadow)">
      <path
        d="M72 102 Q70 64 110 62 Q150 64 148 102 Z"
        fill="url(#caddie-cap)"
      />
      <path
        d="M64 101 Q110 86 156 101 Q160 112 144 113 Q110 103 76 113 Q60 112 64 101 Z"
        fill="url(#caddie-brim)"
      />
    </g>
    <circle cx="110" cy="63" r="4.5" fill="#0f7148" />
    <ellipse
      cx="94"
      cy="76"
      rx="12"
      ry="7"
      fill="#fff"
      opacity="0.18"
      transform="rotate(-25 94 72)"
    />
  </svg>
);

export default Caddie;
