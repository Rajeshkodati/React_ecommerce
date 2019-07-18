import * as ActionTypes from "../actions/actionsTypes/actionType";



// const totalPrice = aray => {
//     let total = 0;
//     aray.map(item => {
//         total = total + item.price;
//     })
//     return total;
// }

// const cartItemCount = aray => aray && aray.length;


const initialState = { cartAddedItems: [] , grandTotal: 0}

const grandTotal = allProducts => {
    let _grandTotal = 0;
    allProducts.forEach(product => {
        _grandTotal = _grandTotal + product.total;
    })
    return _grandTotal;
}

export default function(state=initialState, action){
    console.log(action,"actions")

    switch(action.type){
        case ActionTypes.ADD_CART:
            return {
                ...state,
                cartAddedItems:action.products,
                grandTotal: grandTotal(action.products)
            }

        case ActionTypes.REMOVE_CART: 
            return {
                ...state,
                cartAddedItems:action.products,
                grandTotal: grandTotal(action.products)                
            }
         case ActionTypes.TOGGLE_QUANTITY:
             return{
                 ...state,
                 cartAddedItems:action.products,
                 grandTotal: grandTotal(action.products)
             }   
        default:return state 
         
    }

}