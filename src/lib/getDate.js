// This will act as a database
const projects = [
  {
    title: 'Weather App',
    image: 'DTrain-sc.png',
    description: 'A website to display the wather',
    status: 'Online',
    websiteLink: 'https://stirring-profiterole-13cd77.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/Weather-App',
  },
  {
    title: 'Weather App',
    image: 'BookOwl-ss.png',
    status: 'Online',
    description: 'A website to display the wather',
    websiteLink: 'https://stirring-profiterole-13cd77.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/Weather-App',
  },
  {
    title: 'Weather App',
    image: 'WeatherApp-ss.png',
    status: 'Online',
    description: 'A website to display the wather',
    websiteLink: 'https://stirring-profiterole-13cd77.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/Weather-App',
  },
  {
    title: 'Weather App',
    image: 'Recipie-ss.png',
    status: 'Online',
    description: 'A website to display the wather',
    websiteLink: 'https://stirring-profiterole-13cd77.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/Weather-App',
  },
  {
    title: 'Weather App',
    image: 'WeatherApp-ss.png',
    status: 'Online',
    description: 'A website to display the wather',
    websiteLink: 'https://stirring-profiterole-13cd77.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/Weather-App',
  },
  {
    title: 'Weather App',
    image: 'WeatherApp-ss.png',
    status: 'Online',
    description: 'A website to display the wather',
    websiteLink: 'https://stirring-profiterole-13cd77.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/Weather-App',
  },
];

export const fetchProjects = () => {
  return projects;
};

//Gets the current weekday, month, date and year
export const getDate = () => {
  const d = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedDate = d.toLocaleString('en-EN', options);

  return formattedDate;
};
