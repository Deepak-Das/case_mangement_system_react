import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

const CardView = () => {
  return (
    <>
      <Card border="secondary" style={{ width: "18rem" }} className="m-3">
        <Card.Body>
          <Row>
            <Col>
              <Card.Img
                variant="top"
                src="./images/lawyerFace1.jpg"
                className="rounded"
              />
            </Col>
            <Col>
              <p>
                Bio : <br />
                Experence : <br />
                Services : <br />
                Experties : <br />
                Rating : 4.5/5
              </p>
            </Col>
          </Row>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="info">Detail</Button>{" "}
          <Button variant="success">heri at 999/-</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardView;
