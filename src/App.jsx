import About from './components/About/About';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import './sass/main.scss';

function App() {
  return (
    <>
      <main>
        <Header />
        <Projects />
        <About />
      </main>
    </>
  );
}

export default App;
