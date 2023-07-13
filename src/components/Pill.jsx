const Pill = ({ obj }) => {
  return obj.map((skill, index) => {
    return (
      <span key={index} className='pill'>
        {skill}
      </span>
    );
  });
};

export default Pill;
