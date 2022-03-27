import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

import Row from "react-bootstrap/Row";

class Skills extends React.Component {
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
              backgroundColor: "brown",
              height: "500px",
              width: "col-lg-12",
            }}
          >
            <div>
              <div class="flex">
                <div
                  style={{ margin: "auto", marginTop: "50px", color: "white" }}
                >
                  <h1
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    SKILLS
                  </h1>
                </div>
                <div
                  style={{
                    margin: "30px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "white" }}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{backgroundColor:"gray"}} >
          <Col></Col>
          <Col>
            <ul>my focus
            <hr></hr>
              <li>playing with cats</li>
              <li>playing with mice </li>
              <li>playing games </li>

            </ul>
          </Col>
          <Col>
          <hr></hr>
          <hr></hr>
          <ProgressBar now="50" label={`HTML`}  /><br></br>
          <ProgressBar now="90" label={`Javascript`}  /><br></br>
          <ProgressBar now="70" label={`nodejs`}  /><br></br>
          <ProgressBar now="5" label={`CSS`}  /><br></br>
          </Col>
        </Row>
      </>
    );
  }
}

export default Skills;
