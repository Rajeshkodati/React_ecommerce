import * as ActionTypes from './actionsTypes/actionType';


const dispatchGetProducts = products => {
    return {
        type: ActionTypes.GET_PRODUCTS,
        productsInfo: products
    }
}

const dispatchClearProducts = () => {
    return {
        type: ActionTypes.CLEAR_PRODUCTS
    }
}

export const clearProductInfo = () => dispatch => dispatch(dispatchClearProducts());



export const getProducts = products => dispatch => dispatch(dispatchGetProducts(products));

