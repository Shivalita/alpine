// import React from 'react';
// import {catalogue} from './catalogue.js';
// // import { useSelector} from 'react-redux';
// import Display from './Display.js';

// const Couleurs = () => {
//   // const stateCouleurs = useSelector((state) => state.couleur);
//   const colors = catalogue.couleurs;

//   const displayCouleurs = () => {
//     return Object.keys(colors).map(key => (
//       <Display key={colors[key].id} couleur={colors[key]} />
//     ));
//   }

//     return (
//       <div>
//         {/* {console.log(colors)} */}
//         {/* {console.log(displayCouleurs())} */}

//         {displayCouleurs()}
//       </div>
//     )
// }

// export default Couleurs;

import React from 'react';
import Button from './Button.js';
import {Container, Card, Col, Row} from 'react-bootstrap';
import {images} from './images.js';
import './App.css';


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

  // const DisplayCouleurVoiture = (option) => {
  //   if (option === 'Teinte spéciale Bleu Alpine') {
  //     const color = images.configurateur.modele.pure[1].src;
  //     return color;
  //   } else if (option === 'Teinte métallisée Noir Profond') {
  //     const color = images.configurateur.modele.pure[2].src;
  //     return color;
  //   } else if (option === 'Peinture opaque Blanc Glacier') {
  //     const color = images.configurateur.modele.pure[0].src;
  //     return color;
  //   }
  // }

  

  return (
   <section id="HomeCouleurs">
      {/* <div>
        <Card className="card m-lg-5 d-inline-block shadow" style={{ width: "10rem", border: "none"}}>
          <Card.Img className="p-3" variant="top" src={DisplayCouleurVoiture(props.data.option)} />

        </Card>
      </div> */}
      <div key={props.data.id} className="CardCouleur" id={props.data.id}>
        <Col>
          <Card className="Card mb-3 shadow " style={{ width: "100% ", border: "none"}}>
            <Row>
              <Col className="md-4">
                <Card.Img className="p-3" variant="top" src={DisplayImage(props.data.option)} />
              </Col>
              <Col clasName="col-md-8">
                <Card.Body>
                  <Card.Title>{props.data.option}</Card.Title>
                  <Card.Text>{props.data.prix} €</Card.Text>
                  <Button/>
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
