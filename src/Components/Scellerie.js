import React from "react";
import Button from "./Button.js";
import { images } from "./images.js";
import { Container, Card, Col, Row } from "react-bootstrap";

const Scellerie = (props) => {
  const DisplayImage = (option) => {
    if (option === "Sièges baquets en cuir noir et Dinamica") {
      const src = images.configurateur.scellerie.selection[0].src;
      return src;
    } else if (option === "Sièges Confort en cuir noir perforé") {
      const src = images.configurateur.scellerie.selection[1].src;
      return src;
    } else if (option === "Sièges Confort en cuir noir") {
      const src = images.configurateur.scellerie.selection[2].src;
      return src;
    } else if (option === "Sièges Confort en cuir brun") {
      const src = images.configurateur.scellerie.selection[3].src;
      return src;
    }
  };

  return (
    // <div key={props.data.id} className="col-sm-3 card center" id={props.data.id}>
    //     <div className="card-body text-center">
    //     <img src={DisplayImage(props.data.option)} />
    //         <h5 className="card-title">{props.data.option}</h5>
    //         <h6>{props.data.prix}</h6>
    //         <Button choice={props} category={'scellerie'}/>
    //     </div>
    // </div>
    <section id="HomeScellerie">
      <div
        key={props.data.id}
        className="CardScellerie"
        style={{ width: "100% ", border: "none" }}
        id={props.data.id}
      >
        <Col>
          <Card
            className="Card mt-5 "
            style={{ width: "100% ", border: "none" }}
          >
            <Row className="shadow">
              <Col className="md-4 m-auto">
                <Card.Img
                  className="p-3"
                  variant="top"
                  src={DisplayImage(props.data.option)}
                />
              </Col>
              <Col clasName="col-md-8">
                <Card.Body className="carBody border-left">
                  <Card.Title>{props.data.option}</Card.Title>
                  <Card.Text className="cardText border-bottom pb-3">{props.data.prix} €</Card.Text>
                  <Button />
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    </section>
  );
};

export default Scellerie;
