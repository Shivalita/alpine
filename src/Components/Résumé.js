import React from 'react';
import Button from './Button.js';
import {images} from './images.js';
import {Container, Card, Col, Row} from 'react-bootstrap';


const Résumé = (props) => {

    
  
    return (
     <section id="HomeRésumé">
        <div key={props.data.id} className="CardRésumé" style={{ width: "100% ", border: "none"}} id={props.data.id}>
          <Col >
            <Card className="Card mt-5 " style={{ width: "100% ", border: "none"}}>
              <Row className="shadow">
                {/* <Col className="md-4 m-auto">
                  <Card.Img className="CardImage p-3" variant="top" src={DisplayImage(props.data.option)} />
                </Col> */}
                <Col clasName=" col-md-8">
                  <Card.Body className="carBody ">
                    <Card.Title>{props.data.option}</Card.Title>
                    <Card.Text className="cardText border-bottom pb-3">{props.data.prix} €</Card.Text>
                    {/* <Button/> */}
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            </Col>
        </div>
      </section>  
    )
  }
  
  export default Résumé;