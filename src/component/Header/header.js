import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from "@material-ui/core/styles"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import {Link} from "react-router-dom";
import {connect}  from "react-redux"
const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class Header extends React.Component {
    
    render() { 
        return ( 
            <div>
                <AppBar>
                   <Toolbar>
                       {/* <IconButton edge="start" color="inherit" aria-label="Menu"> */}
                           {/* <MenuIcon/> */}
                       {/* </IconButton> */}
                       <Link to="/"> <Typography variant="subheading" style={{color: '#fff'}}>
                           E-Commerce
                       </Typography></Link>
                       <Button color="inherit" className="ml-auto">
                           Login
                       </Button>
                       <IconButton>
                         <Badge badgeContent={this.props.items && this.props.items.length ? this.props.items.length : null } color="secondary">
                           <Link to="/cart"> <ShoppingCartIcon style={{color:"#fff"}}/></Link>
                            </Badge>
                       </IconButton>
                   </Toolbar>
                </AppBar>
            </div>    
         );
    }
}
 
const mapStateToProps = state => {
  return {
    items:state.cartInfo && state.cartInfo.cartAddedItems
}
}
export default connect(mapStateToProps)(withStyles(styles)(Header));