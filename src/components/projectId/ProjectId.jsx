import './projectId.scss';

/* eslint-disable react/prop-types */
const ProjectId = ({ project }) => {
  return (
    <>
      <section className='owerview-header'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </section>
      <section className='project-owerview'>
        <figure>
          <img
            className='project-image'
            src={`../${project.image}`}
            alt={`a image of the ${project.title} website`}
          />
        </figure>
      </section>
    </>
  );
};

export default ProjectId;
