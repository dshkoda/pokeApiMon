import { FETCH_IMG } from "../actionTypes";

export function getImages(){
    return async(dispatch)=>{
        await fetch('https://pokemon-371d3.firebaseio.com/pokemons.json')
        .then((response)=> response.json()
        .then((response)=>{
            dispatch(fetchImages(response))
        }))
    }
}

export function fetchImages(images){
    return{
        type: FETCH_IMG,
        payload: images
    }
}