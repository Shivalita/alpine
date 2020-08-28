import React from 'react';
import Button from './Button.js';
import {images} from './images.js';
import {Container, Card, Col, Row} from 'react-bootstrap';

const Jantes = (props) => {

  const version = props.version;

    const DisplayImage = (option) => {
        if (option === 'Standard') {
          const src = images.configurateur.jantes.selection[0].src;
          return src;
        } else if (option === 'Serac') {
          const src = images.configurateur.jantes.selection[1].src;
          return src;
        } else if (option === 'Legende') {
          const src = images.configurateur.jantes.selection[2].src;
          return src;
        }
    }

    return (

        // <div key={props.data.id} className="col-sm-3 card center" id={props.data.id}>
        //     <div className="card-body text-center">
        //     <img src={DisplayImage(props.data.option)} />
        //         <h5 className="card-title">{props.data.option}</h5>
        //         <h6>{props.data.prix}</h6>
        //         <Button choice={props} category={'jantes'}/>
        //     </div>
        // </div>
        <section id="HomeJantes">
        {/* <div>
          <Card className="card m-lg-5 d-inline-block shadow" style={{ width: "10rem", border: "none"}}>
            <Card.Img className="p-3" variant="top" src={DisplayCouleurVoiture(props.data.option)} />
  
          </Card>
        </div> */}
         
        <div key={props.data.id} className="CardJantes" style={{ width: "100% ", border: "none"}} id={props.data.id}>
          <Col >
            <Card className="Card mt-5 " style={{ width: "100% ", border: "none"}}>
              <Row className="shadow">
                <Col className="md-4 m-auto">
                  <Card.Img className="p-3" variant="top" src={DisplayImage(props.data.option)} />
                </Col>
                <Col clasName="col-md-8">
                  <Card.Body className="carBody border-left">
                    <Card.Title>{props.data.option}</Card.Title>
                    <Card.Text className="cardText border-bottom pb-3">{props.data.prix} €</Card.Text>
                    <Button choice={props} category={'jantes'}/>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            </Col>
        </div>
      </section>  
    )
}

export default Jantes;