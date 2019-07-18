import React from 'react';
import Home from "./component/Home/home";
import ProductDetails  from "./component/productDetails/productDetails"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cart from "./component/Cart/cart";
import RegisterForm from "./component/userDetailsForm/register"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home} />        
          <Route exact path='/itemInfo' component={ProductDetails} />  
          <Route exact path='/cart' component={Cart} /> 
          <Route exact path ="/register" component={RegisterForm}/>      
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
