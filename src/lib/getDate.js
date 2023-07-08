export const getDate = () => {
  const d = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedDate = d.toLocaleString('en-EN', options);
  console.log(formattedDate);
  return formattedDate;
};
