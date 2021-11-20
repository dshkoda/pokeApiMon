import React, {useContext} from "react";
import './layout.scss';
import { Nav } from '../nav/Nav';
import { Mask } from '../mask/Mask';
import { Home } from '../home/Home';
import { Loader } from '../loader/Loader'
import { MainContext } from "../context/MainContext";
import { Route, Redirect } from 'react-router-dom'
import { Description } from "../description/Description";

export const Layout = () =>{
    const {state} = useContext(MainContext)

    return(
        <div className="layout">
            {
                state.loading ? <React.Fragment>
                    <Nav/>
                    <Mask/>

                    <div className="container">

                            <Route path='/' exact component={Home} />
                            <Route path='/item/:name' component={Description} />

                            <Redirect to='/' />

                    </div>
                </React.Fragment> : 
                <Loader />
            }
        </div>
    )
}