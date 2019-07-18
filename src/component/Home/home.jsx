import React from "react";
import Header from "../Header/header";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
import {Products} from "../../productsData/productData";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import { getProducts, clearProductInfo ,addToCart, getSingleProduct} from './../../store/actions'
import "./sidenav.css";

const style = {
    root: {
        flexGrow: 1,
      },
      paper: {
        height: 140,
        width: 100,
      },
      card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      }
}
const gender = []

class Home extends React.Component{
    state = {
        products: [],
        isChecked :true

    }
    filteredGender = () =>{

    }
    componentDidMount() {     
        if(this.props.productDetails && this.props.productDetails.length) {
            this.setState({
                products: this.props.productDetails
            },console.log(this.state.products))
        }else {
            setTimeout(() => {
                this.props.getProducts([...Products]);
            }, 800);
        }
        
    }

    componentDidUpdate(prevProps) {
        if(prevProps.productDetails !== this.props.productDetails) {
            if(this.props.productDetails) {
                this.setState({
                    products: this.props.productDetails
                },() => console.log(this.state.products))
            }
        }
    }
    handleChange = (name, e) => {        
        const uniqGender = [...new Set(gender)];
        console.log(uniqGender, 'uniqgender');
        this.setState({[name] : !this.state[name]}, () => {
            let filteredProducts = []
            uniqGender.map(gender => {
                if(this.state[gender]){
                    this.props.productDetails.map( item => {
                        if(item.gender === gender){
                           filteredProducts.push(item);
                        }
                    })
                }
            })
        
        filteredProducts = filteredProducts
         && filteredProducts.length
         && filteredProducts || this.props.productDetails
         this.setState({products: filteredProducts});
             
        })
    }
    handleAddToCart = (item) => {
        console.log(this.props.addToCart);
         this.props.addToCart(item)
         localStorage.setItem("productItem", JSON.stringify(item));
        //  localStorage.producItem = item;
         
    }
    state = {};
    render(){
        {
          Products.map(item => {
             gender.push(item.gender);
         })
        }
        const uniqName = [...new Set(gender)];
        const {classes} = this.props
        return(
            <div>
                <Header/>
                 <Grid container  item xs={12} className={classes.root} 
                 style={{position:"absolute", top:60}}>
                    <Grid  item xs={3}>
                      <div className="sideNav">
                          <ul>
                          {
                            uniqName && uniqName.length && uniqName.map(name => {
                                return (
                                    <li key={name}>
                                        <Checkbox
                                            defaultChecked={this.state.checked}
                                            onChange = {() => this.handleChange(name)}
                                            // onChange={() => this.setState({
                                            //     [name]: !this.state[name]
                                            // }, () => console.log(this.state))}
                                            value={name}
                                            checked={this.state.isChecked}
                                        />
                                {name}</li>
                                )
                            } 
                              
                            )
                            
                          }
                          </ul>
                      </div> 
                    </Grid>
                    <Grid item xs={9}  style={{marginLeft:-100}}>
                        <Grid container>
                        {
                          this.state.products && this.state.products.length ?
                            this.state.products.map(item => {
                              return(
                              <Grid item xs={4} key={item.id} style={{padding:10}}>
                                 <Card className={classes.card}>
                                    <CardActionArea>
                                        <img src={item.img} style={{width:100, height:100}}/>
                                    <CardContent>
                                        <Typography>
                                            {item.title}
                                        </Typography>
                                        <Typography>
                                            {item.desc}
                                        </Typography>
                                        <Typography>
                                            Price ${item.price}
                                        </Typography>
                                    </CardContent>     
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary"
                                           onClick={() => this.handleAddToCart(item)}
                                        >
                                           Add To Card
                                        </Button>
                                        <Button 
                                            size="small" 
                                            color="primary"
                                            onClick={() => {
                                                this.props.getSingleProduct(item)
                                                setTimeout(() => {
                                                    this.props.history.push('itemInfo')
                                                }, 300)
                                            }}    
                                        >Full Details</Button>
                                    </CardActions>
                                </Card>
                              </Grid>    
                                
                              )
                          })
                          : <div>Loading...</div>
                      }  
                        </Grid>
                    </Grid>
                 </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productDetails: state.productsInfo && state.productsInfo.productsInfo
})

export default connect(mapStateToProps, { getProducts, clearProductInfo,addToCart,getSingleProduct })(withStyles(style)(withRouter(Home)));