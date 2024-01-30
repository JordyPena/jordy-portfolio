import "../Featured/Featured.css";
import Data from "../../Data/Data";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
const Featured = () => {
  const goToLiveApp = () => {
    window.open(Data[0].url, "_blank");
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
            <h3 className="featured-content-h-styles">{Data[0].title}</h3>
            <p className="featured-p-styles">
              {Data[0].description}
            </p>
          </div>
          <div className="featured-btm-row">
            <div>
              <div className="featured-icon">
                <SiNextdotjs />
                {Data[0].framework}
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
