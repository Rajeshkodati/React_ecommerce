import { combineReducers } from 'redux';
import productsInfo from './getProductsReducers';
import cartInfo from "./addCartReducer";
import itemDetails from "./getSingleProductReducers";

export const rootReducer = combineReducers({
    productsInfo,
    cartInfo,
    itemDetails
})