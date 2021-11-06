import { FETCH_POKEMONS, LOAD } from "../actionTypes";

export function getApi(){
    return async (dispatch) => {
        await fetch('https://pokeapi.co/api/v2/pokemon/')
        .then((response)=> response.json()
        .then((response)=>{
            dispatch(fetchPokemons(response.results))
            if(response){
                dispatch(load())
            }
        }))
        
    }
}

export function fetchPokemons(pokemons){
    return{
        type: FETCH_POKEMONS,
        payload: pokemons
    }
}

export function load(){
    return{
        type: LOAD
    }
}