import { Route, Routes } from 'react-router-dom';
import './sass/main.scss';
import Home from './pages/Home';
import Project from './pages/Project';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:title' element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
