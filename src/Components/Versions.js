import React from "react";
import { catalogue } from "./catalogue.js";
import { Container, Row, Col,  Card } from "react-bootstrap";
import Button from "./Button";
import {images} from './images.js';
import './Versions.css';

const Versions = (props) => {
  
  const DisplayImage = (option) => {
    if (option === 'Pure') {
      const src = images.configurateur.modele.selection[0].src;
      return src;
    } else if (option === 'Legende') {
      const src = images.configurateur.modele.selection[1].src;
      return src;
    }
  }

  return (

    <section id="HomeVersion">
      <div key="props.data.id" className="CardContainer  " id={props.data.id}>
        <Card className="card m-lg-5 d-inline-block shadow" style={{ width: "25rem", border: "none"}}>
          <Card.Img className="p-3" variant="top" src={DisplayImage(props.data.option)} />
          <Card.Body>
            <Card.Title>{props.data.option}</Card.Title>
            <Card.Text  className="cardText border-bottom pb-3">à partir de {props.data.prix} €</Card.Text>
            <Button  choice={props} category={'version'}/>
          </Card.Body>
        </Card>
      </div>
    </section>
    
  );
};

export default Versions;
