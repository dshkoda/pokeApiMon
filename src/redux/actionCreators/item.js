import { FETCH_ITEM, LOAD_ITEM } from "../actionTypes";

export function getItem(url){
    return async (dispatch)=>{
         await fetch(url)
         .then((response)=> response.json()
         .then((response)=>{
             dispatch(fetchItem(response))
             if(response){
                 dispatch(loadItem())
             }
         }))   
    }

}


export function fetchItem(item){
    return{
        type: FETCH_ITEM,
        payload: item
    }
}

export function loadItem(){
    return{
        type: LOAD_ITEM
    }
}