import "./landingPage.css";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NAME = "Jordy Peña";
//how many pieces the ball breaks into.
const SHARD_COUNT = 28;
//(3900ms): when the page goes to /home. It has to match the CSS: the fade-out starts at 3.3s and lasts 0.5s, which ends at 3.8s, and the extra 100ms is a buffer.
const INTRO_DURATION = 3900;
//a shorter wait for visitors whose system asks for less animation.
const REDUCED_MOTION_DURATION = 1400;

// Shards fly out in a rough ring from the ball; jitter keeps it from looking too uniform
const SHARDS = Array.from({ length: SHARD_COUNT }, (_, i) => ({
  // the shards are spaced evenly around a circle (360/28, about 12.9° apart). Each gets ±8° of random jitter so the burst doesn't look like a perfect starburst.
  angle: (360 / SHARD_COUNT) * i + (Math.random() * 16 - 8),
  //how far the shard flies, between 140 and 360px.
  distance: 140 + Math.random() * 220,
  size: 4 + Math.random() * 8,
  //how far the shard rotates while flying, between -270° and +270°.
  spin: Math.random() * 540 - 270,
  turf: i % 4 === 0,
}));

const LandingPage = () => {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate("/home", { replace: true });
  }, [navigate]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = setTimeout(
      goHome,
      reduceMotion ? REDUCED_MOTION_DURATION : INTRO_DURATION,
    );

    const skip = (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") goHome();
    };
    window.addEventListener("keydown", skip);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", skip);
    };
  }, [goHome]);

  const mid = (NAME.length - 1) / 2;

  return (
    <main className="landing" onClick={goHome}>
      <div className="landing-stage">
        <div className="ball-shadow" />
        <div className="ball-drop">
          <div className="ball" />
        </div>

        <div className="shockwave" />
        <div className="shards" aria-hidden="true">
          {SHARDS.map((shard, i) => (
            <span
              key={i}
              className={`shard ${shard.turf ? "shard-turf" : ""}`}
              style={{
                "--angle": `${shard.angle}deg`,
                "--distance": `${shard.distance}px`,
                "--size": `${shard.size}px`,
                "--spin": `${shard.spin}deg`,
              }}
            />
          ))}
        </div>

        <h1 className="landing-name" aria-label={NAME}>
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="landing-letter"
              aria-hidden="true"
              style={{
                "--from-x": `${(mid - i) * 0.55}em`,
                "--delay": `${Math.abs(i - mid) * 35}ms`,
              }}
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h1>
      </div>

      <p className="landing-skip">Click or press Enter to skip</p>
    </main>
  );
};

export default LandingPage;
