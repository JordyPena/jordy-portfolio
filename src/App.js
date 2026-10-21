import {
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './Pages/LandingPage/landingPage';
import Home from './Pages/Home/home';
import Projects from './Pages/Projects/projects';
import Contact from './Pages/Contact/contact';
import ComingSoon from './Pages/ComingSoon/comingSoon';
import { DESTINATIONS } from './Components/CaddieChat/caddieSearch';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* caddie chat destinations; swap ComingSoon for the real page as each is built */}
        {DESTINATIONS.filter(({ path }) => path).map(({ path, label }) => (
          <Route key={path} path={path} element={<ComingSoon title={label} />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
