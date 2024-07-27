import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Donate from './Donate';
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
