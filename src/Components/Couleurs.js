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

const Couleurs = (props) => {

  return (
    <div key={props.data.id} className="col-sm-3 card center" id={props.data.id}>
        <div className="card-body text-center">
            <h5 className="card-title">{props.data.option}</h5>
            <h6>{props.data.prix}</h6>
            {/* <img src={props.data.images.img1} alt="toto"></img> */}
            <Button choice={props} category={'couleur'}/>
        </div>
    </div>
  )
}

export default Couleurs;
