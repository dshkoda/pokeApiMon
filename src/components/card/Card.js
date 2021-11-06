import React from "react";
import './card.scss'

export const Card = (props) => {
    return(
        <div className='card'
            onClick={()=> props.click(props.arg)}
        >
            <div className='cardImg'>
                <img src={props.img} alt={props.img} />
            </div>

            <div className='cardName'>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}