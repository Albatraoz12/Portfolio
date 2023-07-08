import './header.scss';
import { getDate } from '../../lib/getDate';

const Header = () => {
  const date = getDate();
  return (
    <>
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
      <figure>
        <img
          src='desktop-image-small.jpg'
          alt='Desktop setup with accessories'
        />
      </figure>
    </>
  );
};

export default Header;
