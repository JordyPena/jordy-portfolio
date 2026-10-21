import "./home.css";
import CaddieChat from "../../Components/CaddieChat/CaddieChat";
import PuttingGreen from "../../Components/PuttingGreen/PuttingGreen";

const Home = () => (
  <main className="home">
    <div className="home-scene">
      <PuttingGreen className="home-green" />
      <header className="home-intro">
        <h1 className="home-name">Jordy Peña</h1>
        <p className="home-role">
          Front end-Developer
          <span className="home-role-divider" aria-hidden="true">
            •
          </span>
          AI Engineer
          <span className="home-role-divider" aria-hidden="true">
            •
          </span>
          Golfer
        </p>
      </header>
      <CaddieChat className="home-caddie-chat" />
    </div>
  </main>
);

export default Home;
