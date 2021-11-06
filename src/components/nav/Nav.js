import React, { useContext } from "react";
import './nav.scss';
import { NavLink } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import { List } from "../list/List";

export const Nav = () => {

    const {state} = useContext(MainContext)

    return(
        <div className='navWrapper'
            style={{width: !state.isOpen ? '1rem': '25%',
            height: !state.isOpen ? '1rem': '1000px'
        }}
        >
            <div className='nav'
                style={{width: !state.isOpen ? '0px': '100%'}}
            >
                <div className='navHead'>
                    <i className = 'fa fa-times'
                        onClick={state.hideNavHandler}
                        style={{display: state.isOpen ? 'block': 'none'}}
                    />
                </div>

                <div className='navBar'
                    style={{display: state.isOpen ? 'block': 'none'}}
                >
                    <ul>
                        <li><NavLink to='/'>Главная</NavLink></li>
                    </ul>

                    <List/>
                    
                </div>
            </div>
            <div className='navArrow'
                style={{display: !state.isOpen ? 'block': 'none'}}
            >
                <i className = 'fa fa-arrow-right'
                      style = {{display: !state.isOpen ? 'block': 'none'}}
                      onClick = {state.showNavHandler}
                />
            </div>
        </div>
    )
}