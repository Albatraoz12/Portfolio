import { useParams } from 'react-router-dom';

const Project = () => {
  // eslint-disable-next-line no-unused-vars
  const { title } = useParams();
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Project;
