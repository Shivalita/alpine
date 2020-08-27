import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import { useSelector} from 'react-redux';
import CarouselUpdate from './CarouselUpdate.js';

const Button = (props) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const storeChoice = (props) => {
        const chosen = {
            'category' : props.category,
            'id' : props.choice.data.id,
            'option' : props.choice.data.option,
            'prix' : props.choice.data.prix,
        }

        const chooseOption = () => dispatch({type: "CHOOSE_OPTION", payload: chosen});
        return chooseOption();
    }

    const callCarouselUpdate = () => {
        // console.log('TATA')
        {console.log(state)}
        return <CarouselUpdate />
    }

    useEffect(() => {    
        callCarouselUpdate();
    });
    
    return (
        <div>
            <button type="button" onClick={() => storeChoice(props)} className="btn btn-primary ">
                Choisir cette version 
            </button>
        </div>
   
    )
}

export default Button;