import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
      <Home/>
      <About/>
      <Skill/>
      <Services/>
      <Qualifications/>
      <Contact/>
      </main>
    </>

  )
}
export default App;