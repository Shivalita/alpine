import React from 'react';
import Button from './Button.js';
import {images} from './images.js';

const Scellerie = (props) => {

    const DisplayImage = (option) => {
        if (option === 'Sièges baquets en cuir noir et Dinamica') {
            const src = images.configurateur.scellerie.selection[0].src;
            return src;
        } else if (option === 'Sièges Confort en cuir noir perforé') {
            const src = images.configurateur.scellerie.selection[1].src;
            return src;
        } else if (option === 'Sièges Confort en cuir noir') {
            const src = images.configurateur.scellerie.selection[2].src;
            return src;
        } else if (option === 'Sièges Confort en cuir brun') {
            const src = images.configurateur.scellerie.selection[3].src;
            return src;
        }
    }

    return (

        <div key={props.data.id} className="col-sm-3 card center" id={props.data.id}>
            <div className="card-body text-center">
            <img src={DisplayImage(props.data.option)} />
                <h5 className="card-title">{props.data.option}</h5>
                <h6>{props.data.prix}</h6>
                <Button choice={props} category={'scellerie'}/>
            </div>
        </div>

    )
}

export default Scellerie;