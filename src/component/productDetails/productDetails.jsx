import React from "react";
import Header from "../Header/header";
import  {Grid,  Card }  from "@material-ui/core";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';

class ProductDetails extends React.Component{
    state ={
        item: {},
    }
    componentDidMount(){
      if(this.props.item && Object.keys(this.props.item).length){
          this.setState({item:this.props.item}, () => console.log(this.state.item))
      }else {
          this.props.history.push('/');
      }
    }
    render(){

    return(
        <div>
            <Header/>
            <Grid container item xs={12} style={{marginTop:70}}>
               {
                   this.state.item && Object.keys(this.state.item).length 
                   ?
                   (
                        <Card>
                        <h1>
                            {this.state.item.title}
                        </h1>
                        </Card>
                    )
                    : <div>
                        no data found
                    </div>
               }
            </Grid>
        </div>
    )
}  
}
const mapStateToProps = state => {
    return {
        item: state.itemDetails && state.itemDetails.product 
    }
}
export default connect(mapStateToProps)(withRouter(ProductDetails));