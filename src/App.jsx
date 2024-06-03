import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <SpeedInsights />
      </main>
    </>
  )
}

export default App