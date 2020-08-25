import React from 'react';
import {catalogue} from './catalogue.js';
import Button from './Button.js';

const Versions = (props) => {

  return (
    <div key={props.data.id} className="col-sm-3 card center" id={props.data.id}>
        <div className="card-body text-center">
            <h5 className="card-title">{props.data.option}</h5>
            <h6>{props.data.prix}</h6>
            <Button choice={props} category={'couleur'}/>
        </div>
    </div>
)
}

export default Versions;