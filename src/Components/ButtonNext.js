import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Container, Card, Carousel, Button } from "react-bootstrap";
import { images } from "./images.js";
import './ButtonNext';

const ButtonNext = (props) => {

    const dispatch = useDispatch();

    const selectStep = (currentStep) => {
        switch (currentStep) {
            case 'version':
              return 'couleur';
      
            case 'couleur':
              return 'jantes';
          
            case 'jantes':
              return 'scellerie';
          
            case 'scellerie':
              return 'resume';

            case 'resume':
              return 'commande';
              
            default:
              return 'jantes';
        }
    }

    const nextStep = selectStep(props.currentStep);

    const changeButtonName = (nextStep) => {
      if (nextStep != 'commande') {
        return 'Suivant';
      } else {
        return 'Commander'
      }
    }

    const changeStep = (nextStep) => {
        const dispatchStep = () => dispatch({type: "CHANGE_STEP", payload: nextStep});
        return dispatchStep();
    }

    return(
        <div className="buttonNext ml-auto mt-5 mr-5 mb-3">
            <Button onClick={() => changeStep(nextStep)}>{changeButtonName(nextStep)}</Button>
        </div>
    )
}


export default ButtonNext; 