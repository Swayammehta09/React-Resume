import { React } from "react";
import { Card, Container } from "react-bootstrap";

function Experience() {
  return (
    <>
      <center>
        <h2>My Experience</h2>
        <br />
        <Container fluid>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Kingpin Bowling</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Gueust Service attendand
              </Card.Subtitle>
              <Card.Text>
                I worked mainly on the front desk aquiring great communication skills.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Container>
      </center>
    </>
  );
}

export default Experience;
