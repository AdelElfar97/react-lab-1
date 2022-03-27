import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cat from './cat2.jpg';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Marina",
      position: "Frontend Developer",
      company: "Squadio",
    };
  }



  changeUsername = (name) => {
    // this.state.name = "Ahmed"  xxxxxxxx WRONG
    this.setState({
      name,
    });
  };

  render() {
    return (
      <>
      <Row>
      <Col style={{
        height: "400px",
        width: "col-lg-12",
        backgroundImage: `url(${cat})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}>


      
  
     
 
  
        
    </Col>
    <div class="vertical-center">
    <p><b> ENG/ MOUSE </b></p>
    <p><b> Fullstack developer </b></p>
    <button type="button" class="btn btn-light">Contact me</button>
  </div>

    </Row>

      </>
    );
  }
}

export default Contact;
