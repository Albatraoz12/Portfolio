import './projectId.scss';

/* eslint-disable react/prop-types */
const ProjectId = ({ project }) => {
  return (
    <>
      <section className='owerview-header'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a
          href={project.websiteLink}
          target='_blank'
          className='btn'
          rel='noreferrer'
        >
          Visit Site
        </a>
      </section>
      <section className='project-owerview'>
        <figure>
          <img
            className='project-image'
            src={`../${project.image}`}
            alt={`a image of the ${project.title} website`}
          />
        </figure>
        <div className='overview-container'>
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
        </div>
      </section>

      <section className='tools-section'>
        <h2>Tools</h2>
        <div className='tools-container'>
          {project.tools &&
            project.tools.map((tool, index) => (
              <span key={index} className='pill'>
                {tool}
              </span>
            ))}
        </div>
      </section>
      <section>
        <a
          href={project.websiteLink ? project.websiteLink : project.githubLink}
          target='_blank'
          rel='noreferrer'
        >
          {project.websiteLink ? 'Visit site' : 'Visit Github'}
        </a>
        <a href='/'>Go Back</a>
      </section>
    </>
  );
};

export default ProjectId;
