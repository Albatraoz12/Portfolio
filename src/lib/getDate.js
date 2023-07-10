// This will act as a database
const projects = [
  {
    title: 'Dtrain',
    image: 'DTrain-sc.png',
    description:
      "This project represents a solo endeavor where I employed my comprehensive skills in full-stack web development. Following an agile workflow, I utilized SCRUM methodology along with gitflow, adopting a kanban board to organize and separate my sprints. With a strong emphasis on continuous integration and deployment (CI/CD), I successfully implemented the MERN stack to achieve the project's main objective: an Exercise Database with a role-based system. Users have the ability to create an account, perform CRUD operations on exercise lists, search for specific exercises, and save them to personalized lists. Additionally, the admin role encompasses all user functionalities and includes the ability to create new users directly from the dashboard.",
    status: 'Online',
    websiteLink: 'https://relaxed-raindrop-21bc84.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/U09-Training-App',
  },
  {
    title: 'Book Owl',
    image: 'BookOwl-ss.png',
    status: 'Online',
    description:
      'A group project where had our teacher as a Product owner and we practise agil working (Scrum) and we used the MERN as our stack. The website lets users send their books that they wanted to loan to other people.',
    websiteLink: 'https://bookowl-u08.netlify.app/',
    githubLink:
      'https://github.com/chas-academy/u08-business-idea-team1-bokmalarna',
  },
  {
    title: 'Weather App',
    image: 'WeatherApp-ss.png',
    status: 'Online',
    description:
      'A webbsite created with React.js to display what weather a user location has and 5 days forward',
    websiteLink: 'https://stirring-profiterole-13cd77.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/Weather-App',
  },
  {
    title: 'Recipie App',
    image: 'Recipie-ss.png',
    status: 'Online',
    description:
      'My first solo fullstack project where I used Angular as my frontend and Laravael as my backend. For styling i used Bootstrap. Unfortunately due to Heroku shut down so is my backend anavailible. Please see github for the code :)',
    websiteLink: 'https://vermillion-twilight-e4aac6.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/Frontend-Angular',
  },
  {
    title: 'LMDB',
    image: 'image-not-found.png',
    status: 'Offline',
    description:
      'Groub project where we practise agil working (Scrum), UX and used Laravel with MySQL databse as our stack. We used Figma to design our website and build our database structure. Unfortunately due to Heroku shut down so is my backend anavailible. Please see github for the code :)',
    websiteLink: '',
    githubLink: 'https://github.com/Albatraoz12/u05-imdb-clone',
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
