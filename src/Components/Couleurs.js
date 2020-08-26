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
import {Container, Card} from 'react-bootstrap';

const Couleurs = (props) => {

  return (
   <section id="HomeCouleurs">
      <div key={props.data.id} className="CardCouleur" id={props.data.id}>
          <Card className="card m-lg-5 d-inline-block shadow" style={{ width: "25rem", border: "none"}}>
            <Card.Img classname="p-3" variant="top" src={props.data.image} />
              <h5 className="card-title">{props.data.option}</h5>
              <h6>{props.data.prix}</h6>
              <Button choice={props} category={'couleur'}/>
          </Card>
      </div>
  </section>  
  )
}

export default Couleurs;
