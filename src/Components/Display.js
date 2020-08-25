// import React from 'react';
// import Button from './Button.js';
// import { useSelector} from 'react-redux';

// const Display = (props) => {
//     const test = useSelector((state) => state.couleur);

//     return (
//         <div key={props.couleur.id} className="col-sm-3 card center" id={props.couleur.id}>
//             {/* {console.log(data)} */}
//             <div className="card-body text-center">
//                 <h5 className="card-title">{props.couleur.option}</h5>
//                 <h6>{props.couleur.prix}</h6>
//                 <Button data={props}/>
//             </div>
//         </div>
//     )
// }

// export default Display;

import React from 'react';
import {catalogue} from './catalogue.js';
import Couleurs from './Couleurs.js';
import Jantes from './Jantes.js';
import Versions from './Versions.js';

// import { useSelector} from 'react-redux';

const Display = () => {
    // const test = useSelector((state) => state.couleur);

    const displayVersions = () => {
        return Object.keys(catalogue.versions).map(key => (
          <Versions key={catalogue.versions[key].id} data={catalogue.versions[key]}/>
        ));
    }

    const displayCouleurs = () => {
        return Object.keys(catalogue.couleurs).map(key => (
          <Couleurs key={catalogue.couleurs[key].id} data={catalogue.couleurs[key]}/>
        ));
    }

    const displayJantes = () => {
        return Object.keys(catalogue.jantes).map(key => (
          <Jantes key={catalogue.jantes[key].id} data={catalogue.jantes[key]}/>
        ));
    }

    return (
          <div>
            {displayVersions()}
            {displayCouleurs()}
            {displayJantes()}
          </div>
    )

    // return (
    //     <div key={props.couleur.id} className="col-sm-3 card center" id={props.couleur.id}>
    //         {/* {console.log(data)} */}
    //         <div className="card-body text-center">
    //             <h5 className="card-title">{props.couleur.option}</h5>
    //             <h6>{props.couleur.prix}</h6>
    //             <Button data={props}/>
    //         </div>
    //     </div>
    // )
}

export default Display;