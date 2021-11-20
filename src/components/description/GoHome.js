import React from "react";
import './description.scss'
import { NavLink } from "react-router-dom";

export const GoHome = ()=>{

    return(
        <div className='goHome'>
            <div className='btn'>
                <NavLink to='/'>Главная</NavLink>
            </div>
        </div>
    )
}