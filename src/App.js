import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import About from './Body/About';
import Projects from './Body/Projects';
import Contact from './Body/Contact';
import Donate from './Body/Donate';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  return (
    <>
        <Nav />
        <Hero />
        <Routes>
          <Route path="" element={<About dispatch={dispatch} />} />
          <Route path="projects" element={<Projects dispatch={dispatch} />} />
          <Route path="contact" element={<Contact dispatch={dispatch} />} />
          <Route path="donation" element={<Donate dispatch={dispatch} />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
        <Footer />
    </>
  );
}

export default App;
