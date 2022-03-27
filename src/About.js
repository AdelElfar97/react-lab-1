import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class About extends React.Component {
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
              backgroundColor: "white",
              height: "300px",
              width: "col-lg-6",
            }}
          >
            <div>
              <div class="d-flex">
                <div
                  style={{
                    marginRight: "20px",
                    margin: "auto",
                    marginTop: "100px",
                  }}
                >
                  <p>
                    <b>about me</b>
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            style={{
              backgroundColor: "white",
              height: "400px",
              width: "col-lg-6",
            }}
          >
            <div>
              <div class="d-flex">
                <div>
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
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
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                  </p>
                </div>
              </div>
              <button style={{ margin: "auto" }}>download resume</button>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default About;
