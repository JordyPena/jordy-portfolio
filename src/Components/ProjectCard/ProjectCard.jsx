import "./ProjectCard.css";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";

const ProjectCard = ({ project }) => {
  const { title, description, framework, url, img } = project;

  const goToLiveApp = () => {
    window.open(`${url}`, "_blank");
  };

  return (
    <section className="project-card-container">
      <h2 className="project-card-h-styles">{title}</h2>
      <div className="project-container">
        <div className="project-content">
          <span className="project-img" style={{ backgroundImage: `url(${img})`}}></span>
          <div>
            <h3 className="project-card-content-h-styles">Pokemon TCG Guru</h3>
            <p className="project-card-p-styles">{description}</p>
          </div>
          <div className="project-card-btm-row">
            <div>
              <div className="project-card-icon">
                <RiReactjsLine />
                {framework}
              </div>
            </div>
            <div>
              <button
                className="project-card-visit-btn"
                onClick={() => goToLiveApp()}
              >
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

export default ProjectCard;
