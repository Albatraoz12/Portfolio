import "./header.scss";

const Header = () => {
  return (
    <div className="hero-banner">
      <header className="hero-header">
        <h1 className="hero-title">Dimosthenis Emmanouil</h1>
        <p className="hero-description">
          Welcome to my portfolio! Step into the world of a passionate junior
          web developer, where creativity and problem-solving collide. With a
          fresh perspective and a hunger for knowledge, I&apos;m here to bring
          captivating user experiences to life and tackle complex challenges
          head-on.
        </p>
        <div className="hero-buttons">
          <a href="#project-section" className="btn">
            View Projects
          </a>
          <a
            href="Dimosthenis Emmanouil CV EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            My resume
          </a>
        </div>
      </header>
      <figure className="hero-figure">
        <img
          src="Pofilbild.jpg"
          alt="A picture of the author/developer of this website"
          className="hero-image"
        />
      </figure>
    </div>
  );
};

export default Header;
