import './projectId.scss';

/* eslint-disable react/prop-types */
const ProjectId = ({ project }) => {
  console.log(project);
  return (
    <>
      <section className='owerview-header'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </section>
      <section className='project-owerview'>
        <figure style={{ width: '100%' }}>
          <img
            src={`../${project.image}`}
            alt={`a image of the ${project.title} website`}
          />
        </figure>
      </section>
    </>
  );
};

export default ProjectId;
