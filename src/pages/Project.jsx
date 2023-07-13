import { useParams } from 'react-router-dom';
import { getProject } from '../lib/helperFunc';
import ProjectId from '../components/projectId/ProjectId';

const Project = () => {
  const { title } = useParams();
  const project = getProject(title);

  return (
    <>
      <ProjectId project={project} />
    </>
  );
};

export default Project;
