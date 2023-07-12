import { getDate } from '../../lib/helperFunc';
import './header.scss';

const Header = () => {
  const date = getDate();
  return (
    <div className='hero-banner'>
      <header className='hero-header'>
        <span className='hero-date'>{date}</span>
        <h1 className='hero-title'>Dimosthenis Emmanouil</h1>
        <p className='hero-description'>
          Welcome to my portfolio! Step into the world of a passionate junior
          web developer, where creativity and problem-solving collide. With a
          fresh perspective and a hunger for knowledge, I&apos;m here to bring
          captivating user experiences to life and tackle complex challenges
          head-on.
        </p>
        <a href='#project-section' className='btn'>
          View Projects
        </a>
      </header>
      <figure className='hero-figure'>
        <img
          src='desktop-image-small.jpg'
          alt='Desktop setup with accessories'
          className='hero-image'
        />
      </figure>
    </div>
  );
};

export default Header;
