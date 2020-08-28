import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import "./Display.css";


const Button = (props) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const setSelection = () => {
        const cards = document.querySelectorAll('.cardBody');
        cards.forEach(card => {
            if (card == event.target.parentElement.parentElement) {
                card.classList.add('toto');
            } else {
                card.classList.remove('toto');
                
            }
        });

        // console.log(event.target.parentElement.parentElement)
        // event.target.parentElement.parentElement.classList.add('toto');
    }

    const storeChoice = (props) => {
        const chosen = {
            'category' : props.category,
            'id' : props.choice.data.id,
            'option' : props.choice.data.option,
            'prix' : props.choice.data.prix,
        }

        setSelection();

        const chooseOption = () => dispatch({type: "CHOOSE_OPTION", payload: chosen});
        return chooseOption();
    }
    
    return (
        <div>
            <button type="button" onClick={() => storeChoice(props)} className="btn btn-primary ">
                Choisir cette version 
            </button>
        </div>
   
    )
}

export default Button;