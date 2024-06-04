import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Courses from './components/courses/Courses';
import Qualifications from './components/qualifications/Qualifications';
import Testimonials from './components/testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Courses />
        <Qualifications />
        <Testimonials />
      </main>
    </>
  )
}

export default App