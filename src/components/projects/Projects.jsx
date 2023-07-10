import './project.scss';
import { fetchProjects } from '../../lib/getDate';

const Projects = () => {
  const projects = fetchProjects();

  return (
    <section className='project-section'>
      <div className='project-container'>
        {projects.map((project, index) => (
          <div className='project-card' key={index}>
            <img className='card-img' src={project.image} alt={project.title} />
            <h3 className='card-header'>{project.title}</h3>
            <p className='card-description'>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
