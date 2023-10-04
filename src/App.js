import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <>
        <Nav />
        <Hero />
        <Routes>
          <Route path="" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
        <Footer />
    </>
  );
}

export default App;
