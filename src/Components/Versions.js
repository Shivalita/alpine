import React from "react";
import { catalogue } from "./catalogue.js";
import { Container, Row, Col,  Card } from "react-bootstrap";
import Button from "./Button";
// import Button from './Button.js';

const Versions = (props) => {
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
          <Card.Img className="p-3" variant="top" src={props.data.images.img1} />
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
