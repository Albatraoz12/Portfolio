import './sass/main.scss';
import { getDate } from './lib/getDate';

function App() {
  const date = getDate();
  return (
    <main>
      <header>
        <span>{date}</span>
        <h1>Portfolio</h1>
        <p>
          Welcome to the world of a brilliant full-stack web developer, where
          innovation meets creativity. Dive into the incredible projects and
          experience the talents of a true coding wizard.
        </p>
        <button>View Projects</button>
      </header>
    </main>
  );
}

export default App;
