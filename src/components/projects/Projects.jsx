import './project.scss';
import Footer from '../footer/Footer';
import { fetchProjects } from '../../lib/getDate';

const Projects = () => {
  const projects = fetchProjects();

  return (
    <>
      <section className='project-section'>
        <h2 className='project-header'>Projects</h2>
        <div className='project-container'>
          {projects.map((project, index) => (
            <div className='project-card' key={index}>
              <img
                className='card-img'
                src={project.image}
                alt={project.title}
              />
              <h3 className='card-header'>{project.title}</h3>
              <p className='card-description'>{project.description}</p>
              <div className='project-links'>
                <a href={project.githubLink}>Code</a>
                <a href={project.websiteLink}>Live</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
