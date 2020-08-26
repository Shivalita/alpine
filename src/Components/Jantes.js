import React from 'react';
import Button from './Button.js';
import {images} from './images.js';

const Jantes = (props) => {

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

        <div key={props.data.id} className="col-sm-3 card center" id={props.data.id}>
            <div className="card-body text-center">
            <img src={DisplayImage(props.data.option)} />
                <h5 className="card-title">{props.data.option}</h5>
                <h6>{props.data.prix}</h6>
                <Button choice={props} category={'jantes'}/>
            </div>
        </div>

    )
}

export default Jantes;