import {
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './Pages/LandingPage/landingPage';
import Home from './Pages/Home/home';
import Projects from './Pages/Projects/projects';
import Contact from './Pages/Contact/contact';
import ComingSoon from './Pages/ComingSoon/comingSoon';
import Player from './Pages/Player/player';
import Skills from './Pages/Skills/skills';
import { DESTINATIONS } from './Components/CaddieChat/caddieSearch';

// built pages for the caddie chat destinations; anything missing shows ComingSoon
const PAGES = {
  '/player': <Player />,
  '/skills': <Skills />,
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {DESTINATIONS.filter(({ path }) => path).map(({ path, label }) => (
          <Route key={path} path={path} element={PAGES[path] || <ComingSoon title={label} />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
