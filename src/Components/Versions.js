import React from "react";
import { catalogue } from "./catalogue.js";
import { Container, Row, Col,  Card } from "react-bootstrap";
import Button from "./Button";
import {images} from './images.js';

// import Button from './Button.js';

const Versions = (props) => {
  
  const DisplayImage = (option) => {
    if (option === 'Pure') {
      const color = images.configurateur.modele.selection[0].src;
      return color;
    } else if (option === 'Legende') {
      const color = images.configurateur.modele.selection[1].src;
      return color;
    }
  }

  return (
    // <div key={props.data.id} className="col-sm-3 card center" id={props.data.id}>
    //     <div className="card-body text-center">
    //         <h5 className="card-title">{props.data.option}</h5>
    //         <h6>{props.data.prix}</h6>
    //         <Button choice={props} category={'couleur'}/>
    //     </div>
    // </div>
    <section id="HomeVersion">
      <div key="props.data.id" className="CardContainer  " id={props.data.id}>
        <Card className="card m-lg-5 d-inline-block shadow" style={{ width: "25rem", border: "none"}}>
          <Card.Img className="p-3" variant="top" src={DisplayImage(props.data.option)} />
          <Card.Body>
            <Card.Title>{props.data.option}</Card.Title>
            <Card.Text>à partir de {props.data.prix} €</Card.Text>
            <Button />
          </Card.Body>
        </Card>
      </div>
    </section>
    
    
  );
};

export default Versions;
