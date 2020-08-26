import React from 'react';
import {useDispatch} from 'react-redux';

const Button = (props) => {

    const dispatch = useDispatch();

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
    
    return (
        <button type="button" onClick={() => storeChoice(props)} className="btn btn-primary shadow-lg ">
            Choisir cette version 
        </button>
    )
}

export default Button;