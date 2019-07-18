import React from "react";
import { connect } from 'react-redux';
import {Grid, Paper, Button,ButtonBase, Typography} from "@material-ui/core";
import Header from "../Header/header";
import {withStyles} from "@material-ui/core/styles";
import {removeCart, toggleQuantity, addToCartFromLocal} from "../../store/actions/cartActions";
import TotalComponent from './Total/total';

const styles = {
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    }
}
class Cart extends React.Component {  
    
    componentDidMount() {

      if(this.props.items.length === 0 ) {
        let allProductsFromLocal =  JSON.parse(localStorage.getItem("allProductsFromLocal"));
        console.log(allProductsFromLocal, "allProductsFromLocal");
        this.props.addToCartFromLocal(allProductsFromLocal);

      }
    }
    handleRemoveItem = (item) => {
       this.props.removeCart(item)
    }
    handleQuantityInc = (id, num) => {
      this.props.toggleQuantity(id,num)
    }
    handleQuantityDec = (id, num) => {
      this.props.toggleQuantity(id,num)
    }
    
    render() { 
        const {classes} = this.props;
        return(
            <div  style={{marginTop:80}}>
                <Header/>
                <div className={classes.root}>
                   <Grid container>
                    <Grid  item xs={9}>
                        {
                            this.props.items && this.props.items.length ?
                            (
                              this.props.items.map(item => {
                                  return(
                                  <div key={item.id} className="container-fluid" style={{padding:20, width:"100%", marginLeft:-80}}>
                                    
                                  <Paper className={classes.paper} style={{width:"50% !important"}}>
                                    <div style={{borderBottom:"1px solid #e2e2e2", padding:20}}>
                                      <Typography variant="h6">My Cart</Typography>
                                      </div> 
                                      <Grid container item xs={12} spacing={16} >
                                      
                                        <Grid item>
                                          <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={item.img} />
                                          </ButtonBase>
                                          <div style={{margin:10}}>
                                          <button
                                            onClick={() => this.handleQuantityInc(item.id, -1)}
                                            style={{borderRadius:"50%",
                                              backgroundColor:"#linear-gradient(#fff,#f9f9f9)",
                                              width:28,
                                              height:28,
                                              display:"inline-block",
                                              border:"1px solid #c2c2c2",
                                              lineHeight:'1px'
                                              }}>
                                            -
                                            </button>  
                                            <div 
                                            style={{display:"inline-block",
                                            padding:"3px 4px",
                                            width:40,
                                            height:28,
                                            borderRadius:2,
                                            backgroundColor:'#fff',
                                            border:"1px solid #c2c2c2",
                                            margin:2}}>
                                              <span>{item.quantity}</span>   
                                            </div>
                                            <button onClick={() => this.handleQuantityDec(item.id, 1)}
                                            style={{borderRadius:"50%",
                                            backgroundColor:"#linear-gradient(#fff,#f9f9f9)",
                                            width:28,
                                            height:28,
                                            display:"inline-block",
                                            border:"1px solid #c2c2c2",
                                            lineHeight:'1px'
                                            }}> 
                                            +
                                            </button>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                          <Grid item xs container direction="column" spacing={16}>
                                            <Grid item xs>
                                              <Typography gutterBottom variant="subtitle1">
                                                {item.title}
                                              </Typography>
                                              <Typography gutterBottom>{item.desc}</Typography>
                                              <Typography gutterBottom>Quantity</Typography>
                                              <Typography variant="subtitle1">price:{item.price}</Typography>
                                            </Grid>
                                            <Grid item>
                                              <Typography variant="subtitle2">Total:{item.total}</Typography>
                                            </Grid>
                                            <Grid item>
                                              <Button onClick={() => this.handleRemoveItem(item)}>Remove</Button>
                                            </Grid>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </Paper>
                                  </div>
                                  )
                              }) 
                            ):null
                        }      
              
                    </Grid>
                    <Grid item xs={3}>
                      <TotalComponent quantity = {5} totalAmount = {this.props.total} style={{marginTop:10}}/>     
                      
                    </Grid>
                </Grid>
                </div>  
            </div>
        )
       
    }
}

const mapStateToProps = state => {
  return {
      items:state.cartInfo && state.cartInfo.cartAddedItems || [],
      total:state.cartInfo && state.cartInfo.grandTotal
  }
}
export default connect(mapStateToProps,{removeCart, toggleQuantity, addToCartFromLocal})(withStyles(styles)(Cart));
