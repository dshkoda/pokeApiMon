import React, {useContext} from 'react'
import './description.scss'
import { MainContext } from '../context/MainContext';
import {GoHome} from './GoHome'



export const DescriptionTxt = () => {

    const {state} = useContext(MainContext)

    return(
        <div className = 'descriptionTxt'>
                <div className = 'descrPageContentName'>
                    <h2>{state.name}</h2>
                </div>
                <div className = 'characteristics'>
                    <ul>
                        <li><p>height - {state.height}</p></li>
                        <li><p>weight - {state.weight}</p></li>

                    </ul>

                    <p className = 'types'>
                    type of pokemon:&nbsp; 
                    {
                        Object.keys(state.types).map((type, i)=>{

                            return(
                                <React.Fragment>
                                        <strong>{state.types[type].type.name}</strong><br/>
                                 </React.Fragment>    
                            )
                        })
                    }
                    </p>
                
                
                
                </div>

                <div className = 'abilities'>
                <p className = 'types'>
                    abilities:&nbsp; 
                    {
                        Object.keys(state.abilities).map((type, i)=>{

                            return(
                                <React.Fragment>
                                        <strong>{state.abilities[type].ability.name}</strong><br/>
                                 </React.Fragment>    
                            )
                        })
                    }
                    </p>
                
                </div>
                <GoHome/>
        </div>
    )
}