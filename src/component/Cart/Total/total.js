import React from "react";
import {connect} from "react-redux"
import Grid from "@material-ui/core/Grid";
import { Paper, Button } from '@material-ui/core';
import {Link} from "react-router-dom";
class TotalComponent extends React.Component {
    
    render() { 
        console.log(this.props.quantity, this.props.totalAmount);
        return ( 
            
                  <div style={{width:300, marginTop:20}}>
                              <Paper style={{width:400, marginLeft:-100,}}>    
                                <Grid item xs={12} style={{margin:10, padding:10}}>  
                                  <div style={{display:"flex", width:"100%", flexDirection:"column", padding:10}}>
                                        <div><span>Product Details</span></div>
                                        <div style={{display:"flex",width:"100%", justifyContent:"space-between", borderBottom:"1px solid #c2c2c2", padding:10}}>
                                            <span>Price({this.props.quantity})</span>
                                            <span>{this.props.totalAmount}</span>
                                        </div>
                                        <div style={{display:"flex",width:"100%", justifyContent:"space-between", borderBottom:"1px solid #c2c2c2", padding:10}}>
                                            <span>Delivery</span>
                                            <span>Free</span>
                                        </div>
                                        <div style={{display:"flex",width:"100%", justifyContent:"space-between", borderBottom:"1px solid #c2c2c2", padding:10}}>
                                         <span>Total Payable</span>
                                         <span>{this.props.total}</span>
                                        </div>
                                    </div>
                                <Link to="/register"><Button>Place Order</Button></Link>
                                </Grid>  
                                </Paper>
                  
               </div>
        );
    }
}
 
const mapStateToProps = state => {
    return{
        items:state.cartInfo && state.cartInfo.cartAddedItems,
        total:state.cartInfo && state.cartInfo.grandTotal
    }
}
export default connect(mapStateToProps)(TotalComponent);