import { FETCH_ITEM, LOAD_ITEM } from "../actionTypes"

const initialState = {
    name: '',
    height: '',
    weight: '',
    abilities: '',
    types: '',
    itemLoading: false
}

export function item(state = initialState, action){
    switch(action.type){
        case FETCH_ITEM:
            return{
                ...state,
                name: action.payload.name,
                height: action.payload.height,
                weight: action.payload.weight,
                abilities: action.payload.abilities,
                types: action.payload.types
            }

        case LOAD_ITEM:
            return{
                ...state,
                itemLoading: true
            }

        default:
            return state
    }
}