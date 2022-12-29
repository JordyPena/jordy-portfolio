import Navigation from "../../Components/Navigation/navigation";
import Footer from "../../Components/Footer/footer";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Data from '../../Data/Data';

const Projects = () => {
  return (
    <>
      <Navigation />
      {Data.map((project) => {
        return (
          <ProjectCard project={project} key={project.id} />
        )
      })}
      <Footer />
    </>
  )
}
export default Projects;