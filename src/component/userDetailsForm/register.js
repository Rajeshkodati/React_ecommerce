import React from "react";
import Header from"../Header/header";
import InputField from "./dynamicInput";

class Form extends React.Component{
    state={
        userName:"",
        passWord:"",
        firstName:"",
        lastName:'',
        email:"",
        confirmPassword:"",
        userNameError:"",
        passWordError:"",
        firstNameError:"",
        lastNameError:'',
        emailError:'',
        confirmPassError:'',
        isLogin:true
    }

    handleValidations = (name) => (e) => {
         this.setState({[name]:e.target.value}, () => console.log(this.state))
    }
   
    handleLoginValidate = () => {
        let userNameError = "";
        let passWordError = "";
        if(!this.state.userName){
            userNameError = "Enter UserName"
        }
        if(!this.state.passWord ){
            passWordError = "Enter Password"
        }
        if(userNameError || passWordError){
          this.setState({userNameError, passWordError});
          return false;
        }
      return true;
    }
    handelRegisterValidate = () => {
        let passWordError = "";
        let firstNameError = "";
        let lastNameError ="";
        let emailError="";
        let confirmPassError ="";
        
        if(!this.state.passWord ){
            passWordError = "Enter Password"
        }
        if(!this.state.confirmPassword || this.state.passWord !== this.state.confirmPassword){
            confirmPassError = "Miss Match Password"
        }
        if(!this.state.firstName){
            firstNameError = "Enter firstName"
        }
        if(!this.state.lastName){
            lastNameError = "Enter LastName"
        }
        if(!this.state.email){
            emailError = "Enter Email"
        }
        if(firstNameError || lastNameError || emailError || confirmPassError || passWordError ){
            this.setState({firstNameError, lastNameError, emailError, emailError, passWordError ,confirmPassError });
            return false;
          }
        return true;
        
    } 

    handleLogin = (e) => {
        console.log("some")
        e.preventDefault();
        const isValid = this.handleLoginValidate();
        if(isValid){
            console.log(this.state);
            this.setState({userName:this.state.userName});
        }
    }
    handleSubmit = (e) => {
        console.log("some")
        e.preventDefault();
        const isValid = this.handelRegisterValidate();
        if(isValid){
            console.log(this.state);
            this.setState({userName:this.state.userName});
        }
    }
    handleNewRegister = (e) =>  {
        console.log(this.state.isLogin,"register")
       this.setState({isLogin:false}, () => console.log(this.state.isLogin))
         
    }
    render(){
        return(
                <>
                    <Header/>   
                    {
                        this.state.isLogin ? 
                        (
                            <>   
                                <div className="container" style={{border:"1px solid #c2c2c2", width:"30%", marginTop:100, padding:10}}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <InputField 
                                                type="text"
                                                name="UserName"
                                                onChange={this.handleValidations('userName')}
                                                value={this.state.userName}
                                                placeholder="UserName"
                                                error={this.state.userNameError} />
                                                <InputField 
                                                type="password"
                                                name="Password"
                                                onChange={this.handleValidations('passWord')}
                                                value={this.state.passWord}
                                                placeholder="PassWord"
                                                error={this.state.passWordError} />
                                            </div>
                                            <div style={{margin:"auto",}}>
                                                <button
                                                className="btn btn-primary"
                                                onClick={this.handleLogin}
                                                >Login</button>
                                                <button
                                                style={{marginLeft:10}}
                                                className="btn btn-primary"
                                                onClick={this.handleNewRegister}
                                                >Register</button>
                                            </div>
                                        </div>
                                    </div>    
                                </div>         
                            </>
                        ) :
                         (
                            <div className="container" style={{border:"1px solid #c2c2c2", width:"30%", marginTop:100, padding:10}}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                        <InputField 
                                            type="text"
                                            name="Name"
                                            onChange={this.handleValidations('firstName')}
                                            value={this.state.firstName}
                                            placeholder="FirstName"
                                            error={this.state.firstNameError} 
                                        />
                                        <InputField 
                                            type="text"
                                            name="Name"
                                            onChange={this.handleValidations('lastName')}
                                            value={this.state.lastName}
                                            placeholder="LastName"
                                            error={this.state.lastNameError} 
                                        />
                                        <InputField 
                                            type="password"
                                            name="Password"
                                            onChange={this.handleValidations('passWord')}
                                            value={this.state.passWord}
                                            placeholder="Password"
                                            error={this.state.passWordError} 
                                        />
                                        <InputField 
                                            type="password"
                                            name="ConfirmPassword"
                                            onChange={this.handleValidations('confirmPassword')}
                                            value={this.state.confirmPassword}
                                            placeholder="Confirm Password"
                                            error={this.state.confirmPassError} 
                                        />
                                        <InputField 
                                            type="email"
                                            name="email"
                                            onChange={this.handleValidations('email')}
                                            value={this.state.email}
                                            placeholder="Email"
                                            error={this.state.emailError} 
                                        />

                                        </div>
                                                
                                        <div style={{margin:10}}>
                                            <button
                                                className="btn btn-primary"
                                                onClick={this.handleSubmit}
                                            >
                                                Submit
                                            </button>
                                        </div>     
                                    </div>
                                </div>    
                        </div>  
                        )
                    }
                    
                </>    
        );
    }
}
export default Form;


{/* <div style={{margin:10}}>
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
  

  </div> */}