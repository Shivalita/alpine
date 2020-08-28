import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './couleurs.css';

const Button = (props) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const setSelection = (event) => {
        const cards = document.querySelectorAll('.cardBody');
        cards.forEach(card => {
            if (card == event.target.parentElement.parentElement) {
                card.classList.add('selection');
            } else {
                card.classList.remove('selection');
                
            }
        });
    }

    const storeChoice = (props, event) => {
        const chosen = {
            'category' : props.category,
            'id' : props.choice.data.id,
            'option' : props.choice.data.option,
            'prix' : props.choice.data.prix,
        }

        setSelection(event);

        const chooseOption = () => dispatch({type: "CHOOSE_OPTION", payload: chosen});
        return chooseOption();
    }
    
    return (
        <div>
            <button type="button" onClick={(event) => storeChoice(props, event)} className="btn btn-primary ">
                Choisir cette version 
            </button>
        </div>
   
    )
}

export default Button;