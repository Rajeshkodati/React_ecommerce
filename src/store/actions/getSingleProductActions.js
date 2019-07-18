import * as ActionTypes from "./actionsTypes/actionType";

const dispatchGetSingleProduct = product =>{
    return{
        type:ActionTypes.GET_SINGLE_ITEM,
        product
    }
}
const dispatchClearSingleProduct = () => ({
    type: ActionTypes.CLEAR_SINGLE_ITEM
})

export const getSingleProduct = product => dispatch => dispatch(dispatchGetSingleProduct(product));

export  const clearSingleProduct = () => dispatch => dispatch(dispatchClearSingleProduct());