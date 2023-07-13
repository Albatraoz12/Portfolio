// This will act as a database
const projects = [
  {
    title: 'Dtrain',
    image: 'DTrain-sc.png',
    description:
      'Dtran is the ultimate training databses, users can see training exercises and save exercises they like to keep',
    // description:
    //   'Solo project showcasing full-stack web development skills. Used SCRUM, gitflow, and kanban for agile workflow. I used MERN stack and the project has a role system. Users can register, manage exercises, search, and save to personalized lists. Admins have user management and dashboard user creation capabilities.',
    status: 'Online',
    websiteLink: 'https://relaxed-raindrop-21bc84.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/U09-Training-App',
  },
  {
    title: 'Book Owl',
    image: 'BookOwl-ss.png',
    status: 'Online',
    description:
      'Book owl is a book loan webiste where users can lend their books or borrow others books',
    // description:
    //   'A group project with our teacher as the Product Owner, we practiced agile working using Scrum methodology and CI/CD. Employing the MERN stack, we developed a website that enables users to lend out their books to others or borrow a book from another user.',
    websiteLink: 'https://bookowl-u08.netlify.app/',
    githubLink:
      'https://github.com/chas-academy/u08-business-idea-team1-bokmalarna',
  },
  {
    title: 'Weather App',
    image: 'WeatherApp-ss.png',
    status: 'Online',
    description:
      "This website was built with React.js and CSS to displays the current weather for a user's location",
    // description:
    //   "This website was built with React.js and CSS to displays the current weather for a user's location, provides hourly weather forecasts for the next five hours, and also shows the weather forecast for the next five days.",
    websiteLink: 'https://stirring-profiterole-13cd77.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/Weather-App',
  },
  {
    title: 'Recipie App',
    image: 'Recipie-ss.png',
    status: 'Online',
    description:
      'Recipie App is a fullstack web application built with Angular for the frontend and Laravel as the backend',
    // description:
    //   'This is my first solo full-stack project, employing Angular for the frontend and Laravel for the backend. Bootstrap was utilized for styling. Regrettably, the backend is currently unavailable due to Heroku shutdown. Please refer to my GitHub repository for the source code.',
    websiteLink: 'https://vermillion-twilight-e4aac6.netlify.app/',
    githubLink: 'https://github.com/Albatraoz12/Frontend-Angular',
  },
  {
    title: 'LMDB',
    image: 'image-not-found.png',
    status: 'Offline',
    description:
      'Lobster Mobie Data Base a website to see, rate, comment on movies, save moves and much more!',
    // description:
    //   'This was a group project where we practiced agile working with Scrum methodology, focused on UX. We utilized Laravel with a MySQL database as our tech stack. Figma was used for website design and creating the database structure. Regrettably, the backend is currently unavailable due to Heroku shutdown. Please refer to my GitHub repository for the source code',
    websiteLink: '',
    githubLink: 'https://github.com/Albatraoz12/u05-imdb-clone',
  },
];

// Function to fet all the projects
export const fetchProjects = () => {
  return projects;
};

// This function will return 1 project with title
export const getProject = (name) => {
  const project = projects.find((project) => project.title === name);
  return project ? { ...project } : null;
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
