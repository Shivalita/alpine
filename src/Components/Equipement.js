import React from "react";
import Button from "./Button.js";
import { images } from "./images.js";
import { Container, Card, Col, Row } from "react-bootstrap";

const Equipement = (props) => {

    const DisplayImage = (option) => {
        if (option === 'conduite') {
          const src = images.configurateur.equipements.selection[0].src;
          return src;
        } else if (option === 'confort') {
          const src = images.configurateur.equipements.selection[1].src;
          return src;
        } else if (option === 'design') {
          const src = images.configurateur.equipements.selection[2].src;
          return src;
        } else if (option === 'media-nav') {
          const src = images.configurateur.equipements.selection[3].src;
          return src;
        } else if (option === 'perso-ext') {
          const src = images.configurateur.equipements.selection[4].src;
          return src;
        } else if (option === 'perso-int') {
            const src = images.configurateur.equipements.selection[5].src;
            return src;
        } else if (option === 'securite') {
            const src = images.configurateur.equipements.selection[6].src;
            return src;
        }    
    }
  
  
  
    return (
    <section id="HomeEquipement">
      <div
        key={props.data.id}
        className="CardEquipement"
        style={{ width: "100% ", border: "none" }}
        id={props.data.id}
      >
        <Col>
          <Card
            className="Card mt-5 "
            style={{ width: "100% ", border: "none" }}
          >
            <Row>
              <Col className="md-4 m-auto">
                <Card.Img
                  className="p-3"
                  variant="top"
                  src={DisplayImage(props.data.option)}
                />
              </Col>
              <Col clasName="col-md-8">
                <Card.Body className="shadow-sm">
                  <Card.Title>{props.data.option}</Card.Title>
                  <Card.Text>{props.data.prix} €</Card.Text>
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

export default Equipement;
