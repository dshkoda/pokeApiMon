import { FETCH_POKEMONS, LOAD } from "../actionTypes"

const initialState = {
    pokemons: '',
    loading: false
}

export function main(state = initialState, action) {
    switch(action.type){
        case FETCH_POKEMONS:
            return{
                ...state,
                pokemons: action.payload
            }

        case LOAD:
            return{
                ...state,
                loading: true
            }
        
        default:
            return state
    }

        
}