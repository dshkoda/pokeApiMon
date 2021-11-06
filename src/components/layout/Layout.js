import React from "react";
import './layout.scss';
import { Nav } from '../nav/Nav';
import { Mask } from '../mask/Mask';
import { Home } from '../home/Home'

export const Layout = () =>{

    return(
        <div className="layout">
            <Nav/>
            <Mask/>

            <div className="container">
                <Home/>
            </div>
        </div>
    )
}