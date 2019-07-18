import React from "react"

const inputField  = (props) => {
    return (
            <div>
                <label className="exampleInputEmail">{props.name}</label>
                <input 
                    type={props.type}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    value={props.value}/>
            
                <div style={{color:"red", fontSize:13, marginLeft:10}}>{props.error}</div>
            </div>
    )
}

export default inputField