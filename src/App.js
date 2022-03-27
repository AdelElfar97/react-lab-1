import "./App.css";
import About from './About';
import Skills from './Skills';


import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function App() {
  return (
    <Container style={{backgroundColor:"lightblue"}}> 
    <Contact></Contact>

    <About></About>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Footer></Footer>

   
  </Container>
  );
}


export default App;
