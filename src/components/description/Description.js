import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import './description.scss';
import { DescrPageContent } from "./DescrPageContent";
import {Loader} from '../loader/Loader';

export const Description = ()=>{
    const {state} = useContext(MainContext)

    return(
        <div className='descrPage'>
            {state.itemLoading ? <DescrPageContent/> : <Loader/>}
        </div>
    )
}