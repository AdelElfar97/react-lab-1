import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Portfolio extends React.Component {
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
          <Col
            style={{
              backgroundColor: "wheat",
              height: "700px",
              width: "col-lg-12",
            }}
          >
          <br></br>

            <Row style={{margin:"50px"}}>
              <Col>
                <div
                  style={{
                    backgroundColor: "grey",
                    width: "200px",
                    height: "200px",
                    textAlign:"center",
                   
                  
                  }}
                  className="square"
                >
                  <p style={{top:"50%", position: "relative",}} >league of legends</p>
                </div>
              </Col>
              <Col>
              <div
                style={{
                  backgroundColor: "grey",
                  width: "200px",
                  height: "200px",
                  textAlign:"center",
                 
                
                }}
                className="square"
              >
                <p style={{top:"50%", position: "relative",}} >lost ark</p>
              </div>
            </Col>

              <Col>
              <div
                style={{
                  backgroundColor: "grey",
                  width: "200px",
                  height: "200px",
                  textAlign:"center",
                 
                
                }}
                className="square"
              >
                <p style={{top:"50%", position: "relative",}} >fifa 21</p>
              </div>
            </Col>

            <Col>
            <div
              style={{
                backgroundColor: "grey",
                width: "200px",
                height: "200px",
                textAlign:"center",
               
              
              }}
              className="square"
            >
              <p style={{top:"50%", position: "relative",}} >بسبس</p>
            </div>
          </Col>

            </Row>

            <br></br>
            <Row style={{margin:"50px"}}>
            <Col>
              <div
                style={{
                  backgroundColor: "grey",
                  width: "200px",
                  height: "200px",
                  textAlign:"center",
                 
                
                }}
                className="square"
              >
                <p style={{top:"50%", position: "relative",}} >sekero</p>
              </div>
            </Col>
            <Col>
            <div
              style={{
                backgroundColor: "grey",
                width: "200px",
                height: "200px",
                textAlign:"center",
               
              
              }}
              className="square"
            >
              <p style={{top:"50%", position: "relative",}} >god of war</p>
            </div>
          </Col>

            <Col>
            <div
              style={{
                backgroundColor: "grey",
                width: "200px",
                height: "200px",
                textAlign:"center",
               
              
              }}
              className="square"
            >
              <p style={{top:"50%", position: "relative",}} >meow</p>
            </div>
          </Col>

          <Col>
          <div
            style={{
              backgroundColor: "grey",
              width: "200px",
              height: "200px",
              textAlign:"center",
             
            
            }}
            className="square"
          >
            <p style={{top:"50%", position: "relative",}} >قطقوط</p>
          </div>
        </Col>

          </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Portfolio;
