import React from 'react';
import Button from './Button.js';
import {Container, Card, Col, Row} from 'react-bootstrap';
import {images} from './images.js';
import './App.css';


const Couleurs = (props) => {

  const DisplayImage = (option) => {
    if (option === 'Teinte spéciale Bleu Alpine') {
      const src = images.configurateur.couleur[1].src;
      return src;
    } else if (option === 'Teinte métallisée Noir Profond') {
      const src = images.configurateur.couleur[2].src;
      return src;
    } else if (option === 'Peinture opaque Blanc Glacier') {
      const src = images.configurateur.couleur[0].src;
      return src;
    }
  }

  return (
   <section id="HomeCouleurs">
      <div key={props.data.id} className="CardCouleur" style={{ width: "100% ", border: "none"}} id={props.data.id}>
        <Col >
          <Card className="Card mt-5 " style={{ width: "100% ", border: "none"}}>
            <Row className="shadow">
              <Col className="md-4 m-auto">
                <Card.Img className="p-3" variant="top" src={DisplayImage(props.data.option)} />
              </Col>
              <Col clasName=" col-md-8">
                <Card.Body className="carBody border-left">
                  <Card.Title>{props.data.option}</Card.Title>
                  <Card.Text className="cardText border-bottom pb-3">{props.data.prix} €</Card.Text>
                  <Button choice={props} category={'couleur'}/>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          </Col>
      </div>
    </section>  
  )
}

export default Couleurs;