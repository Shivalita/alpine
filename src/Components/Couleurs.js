import React from 'react';
import Button from './Button.js';
import {Container, Card} from 'react-bootstrap';
import {images} from './images.js';

const Couleurs = (props) => {

  const DisplayImage = (option) => {
    if (option === 'Teinte spéciale Bleu Alpine') {
      const color = images.configurateur.couleur[1].src;
      return color;
    } else if (option === 'Teinte métallisée Noir Profond') {
      const color = images.configurateur.couleur[2].src;
      return color;
    } else if (option === 'Peinture opaque Blanc Glacier') {
      const color = images.configurateur.couleur[0].src;
      return color;
    }
  }

  return (

   <section id="HomeCouleurs">
      <div key={props.data.id} className="CardCouleur" id={props.data.id}>
          <Card className="card m-lg-5 d-inline-block shadow" style={{ width: "25rem", border: "none"}}>
            <Card.Img className="p-3" variant="top" src={DisplayImage(props.data.option)} />
              <h5 className="card-title">{props.data.option}</h5>
              <h6>{props.data.prix}</h6>
              <Button choice={props} category={'couleur'}/>
          </Card>
      </div>
  </section>  
  
  )
}

export default Couleurs;
