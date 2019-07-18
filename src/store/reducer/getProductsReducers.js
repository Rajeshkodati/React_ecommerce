import * as ActionTypes from './../actions/actionsTypes/actionType';


export default function(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GET_PRODUCTS:
            return {
                ...state,
                productsInfo: action.productsInfo
            }
        case ActionTypes.CLEAR_PRODUCTS:
            return {}
        default: return state
    }
}
