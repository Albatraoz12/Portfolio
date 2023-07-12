import './project.scss';
import { fetchProjects } from '../../lib/helperFunc';

const Projects = () => {
  const projects = fetchProjects();

  return (
    <>
      <section className='project-section' id='project-section'>
        <h2 className='project-header'>Projects</h2>
        <div className='project-container'>
          {projects.map((project, index) => (
            <div className='project-card' key={index}>
              <img
                className='card-img'
                src={project.image}
                alt={project.title}
              />
              <div className='text-container'>
                <h3 className='card-header'>{project.title}</h3>
                <p className='card-description'>{project.description}</p>
                <a href={`/project/${project.title}`} className='btn'>
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
