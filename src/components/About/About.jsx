import './about.scss';
import Footer from '../footer/Footer';

const About = () => {
  return (
    <>
      <section>
        <div className='about-container'>
          <h2>About me</h2>
          <div className='about-wrapper'>
            <p>
              I’m a full-stack web developer who crafts engaging user
              experiences and tackles complex challenges. Over the years, I’ve
              honed my skills through continuous learning and a true passion for
              next-gen technologies.
            </p>
            <p>
              From coding responsive websites to building robust applications,
              I’ve successfully collaborated with multiple teams to deliver
              outstanding products. My mantra is to strive for excellence, no
              matter how big or small the project.
            </p>
            <p>
              On top of my technical skills, I pride myself on my adaptability
              and quick-thinking. As a curious mind, I’m always interested in
              exploring cutting-edge tools and methodologies to address the
              ever-evolving needs of the digital space.
            </p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default About;
