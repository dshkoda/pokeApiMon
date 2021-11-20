import React, {useContext} from 'react'
import './description.scss'
import { MainContext } from '../context/MainContext';
import { DescriptionTxt } from './DescriptionTxt';


export const DescrPageContent = () =>{
    const {state} = useContext(MainContext)

    return(
        <div className = 'descrPageContent'>
            <div className = 'descrPageContentImg'>
                <img src = {state.images[state.name]} alt = {state.name}/>
            </div>

            <DescriptionTxt/>

        </div>
    )
}