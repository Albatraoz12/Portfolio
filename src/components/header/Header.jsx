import './header.scss';
import { getDate } from '../../lib/getDate';

const Header = () => {
  const date = getDate();
  return (
    <>
      <header>
        <span>{date}</span>
        <h1>Dimosthenis Emmanouil</h1>
        <p>
          Welcome to my portfolio! Step into the world of a passionate junior
          web developer, where creativity and problem-solving collide. With a
          fresh perspective and a hunger for knowledge, I&apos;m here to bring
          captivating user experiences to life and tackle complex challenges
          head-on.
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
