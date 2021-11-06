import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../context/MainContext";


export const List = () => {

    const {state} = useContext(MainContext)
    const descHandler = () =>{
        state.hideNavHandler()
    }

    return(
        <div>
            <h2>Pokemn List</h2>
            <ul>
                { Object.keys(state.pokemons).map((pokemon, i)=>{
                    return(
                        <li onClick={()=>descHandler()}
                        >
                            <NavLink to={`/item/${state.pokemons[pokemon].name}`}>
                                {state.pokemons[pokemon].name}
                            </NavLink>
                        </li>
                    )
                })
                }
                
            </ul>
        </div>
    )

}