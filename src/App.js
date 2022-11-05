import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import LandingPage from './Pages/LandingPage/landingPage';
import Home from './Pages/Home/home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
