import React from 'react';
import './App.css';
import { Nav } from './Components/Navigator/Nav';
import {Foo } from './Components/Footer/Footer';
import { Portfolio } from './Components/Main/Portfolio/Portfolio';
import { AboutMe } from './Components/Main/AboutMe/AboutMe';
import { WorkExperience } from './Components/Main/WorkExperience/WorkExperience';
import { Contact } from './Components/Main/Contact/Contact';
import { SectionIcons } from './Components/SectionIcons/SectionIcons';


function App() {
  
   return (
    <div className="App">
        <Nav />
        <Portfolio/>
        <AboutMe/>
        <WorkExperience/>
        <Contact/>
        <Foo/>
        <SectionIcons></SectionIcons>
    
      
    </div>
  );
  
}


export default App;
