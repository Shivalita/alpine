import React from 'react';
import {catalogue} from './catalogue.js';
import Button from './Button.js';

const Couleurs = (props) => {

  return (
    <div key={props.data.id} className="col-sm-3 card center" id={props.data.id}>
        <div className="card-body text-center">
            <h5 className="card-title">{props.data.option}</h5>
            <h6>{props.data.prix}</h6>
            {/* {console.log(props)} */}

            <Button choice={props} category={'jantes'}/>
        </div>
    </div>
)
}

export default Couleurs;