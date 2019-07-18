import * as ActionTypes from "./actionsTypes/actionType";

const dispatchAddCart = (product) => {
    return{
        type:ActionTypes.ADD_CART,
        products:product
    }

} 
const dispatchRemoveCart = (product) => {
    return{
        type:ActionTypes.REMOVE_CART,
        products:product,
        
    }
}

const dispatchToggleQuantity = product => ({
    type: ActionTypes.TOGGLE_QUANTITY,
    products: product
})

export const addToCartFromLocal = data => dispatch => {
    dispatch(dispatchAddCart(data));
}

 export const addToCart = (product) => (dispatch, getStore) => {
        const store = getStore();
        console.log(store, "store");
        const cartInfo = store.cartInfo;
        const {cartAddedItems =[]} = cartInfo;
        const {id} = product;
        console.log(id)
        // const {total = []} = cartInfo;
        //     total = cartAddedItems && cartAddedItems.length && cartAddedItems.map(item => {
        //     const total = total + item.price;
        //     console.log(total);
        // });
        
        const exist_item = cartAddedItems && cartAddedItems.length && cartAddedItems.find(item => item.id === id);
        if(!exist_item){          
            const _allProductItems = [...cartAddedItems, {...product, quantity:1, total: product.price}]
            localStorage.setItem('allProductsFromLocal', JSON.stringify(_allProductItems))
            dispatch(dispatchAddCart(_allProductItems))                      
        }else{
            alert("item already there")
        }   
 };
 export const removeCart = (product) => (dispatch, getStore) => {
     const store = getStore();
     const cartInfo = store.cartInfo;
     const {cartAddedItems =[]} = cartInfo;
     console.log(cartAddedItems, "cartAdde")
     const {id} = product;
     console.log(id,"id");
     console.log(cartAddedItems,"cartAde")
     console.log(cartAddedItems.id !== id)
      const remove_item = cartAddedItems.filter(item => item.id !== id);
    //  console.log(remove_items, "remove_items");
     console.log(remove_item,"remove");
     localStorage.setItem('allProductsFromLocal', JSON.stringify(remove_item))
     dispatch(dispatchRemoveCart(remove_item));
 }

export const toggleQuantity = (id, number) => (dispatch, getStore) =>{
    const store = getStore();
    const cartInfo = store.cartInfo;
    const {cartAddedItems =[]} = cartInfo;
    let {total = 0} = cartInfo;
    console.log(total);
   const filteredData  = cartAddedItems.map(item => {
       if(item.id === id) {           
           const quantity = item.quantity + number    
           total = quantity * item.price;
                 
           return{
               ...item,
               quantity: quantity < 1 ? 1 : quantity,
               total
           }
       }else{
           return item
    }
   })
   localStorage.setItem('allProductsFromLocal', JSON.stringify(filteredData))
    dispatch(dispatchToggleQuantity(filteredData))
}
