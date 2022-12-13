import {
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './Pages/LandingPage/landingPage';
import Home from './Pages/Home/home';
import Projects from './Pages/Projects/projects';
import Contact from './Pages/Contact/contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
