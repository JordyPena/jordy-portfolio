import "../Featured/Featured.css";
import Data from "../../Data/Data";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
const Featured = () => {
  const goToLiveApp = () => {
    window.open("https://tcg.vercel.app/", "_blank");
  };

  return (
    <section className="featured-section-container">
      <h2 className="featured-h-styles">Featured</h2>
      <div className="featured-container">
        <div className="featured-content">
          <span
            className="prj-img"
            style={{ backgroundImage: `url(${Data[0].img})` }}
          ></span>
          <div>
            <h3 className="featured-content-h-styles">Pokemon TCG Guru</h3>
            <p className="featured-p-styles">
              A Platform That Helps You Discover The Value Of Your Pokemon
              Cards, And Find And Purchase New Cards With Updated Current And
              Previous Pricing.
            </p>
          </div>
          <div className="featured-btm-row">
            <div>
              <div className="featured-icon">
                <RiReactjsLine />
                React
              </div>
            </div>
            <div>
              <button className="featured-btn" onClick={() => goToLiveApp()}>
                Visit
                <MdOutlineSubdirectoryArrowLeft />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
