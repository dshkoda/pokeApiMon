import { FETCH_IMG } from "../actionTypes"

const initialState = {
    images: ''
}

export const images = (state = initialState, action ) => {
    switch(action.type){
        case FETCH_IMG:
        return{
            ...state,
            images: action.payload
        }

        default:
            return state
    }

}