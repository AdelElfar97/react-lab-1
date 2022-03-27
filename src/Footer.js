import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Footer extends React.Component {
  constructor() {
    console.log("CONSTRUCTOR");
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
        backgroundColor: 'lightblue',
        height: "100px",
        width: "col-lg-12",
      }}>
      <div bgColor='light' className='text-center text-lg-start text-muted'>




      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://www.facebook.com/adel.far.75/'>
          elfar inc
        </a>
      </div>
    </div>
    </Col>

    </Row>

      </>
    );
  }
}

export default Footer;
