import * as ActionTypes from "../actions/actionsTypes/actionType";

export default function(state={}, action){
    switch(action.type){
        case ActionTypes.GET_SINGLE_ITEM:
            return {
                ...state,
                product:action.product
            }
        case ActionTypes.CLEAR_SINGLE_ITEM:
            return {}    
        default: return state    
    }   

} 
