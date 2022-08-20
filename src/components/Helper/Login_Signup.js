import React from "react";
import { Colors } from "../Constants/Colors";
import LogoIcon from "../LogoIcon/LogoIcon";
import  "../Css/Login-Signup.css";

const Login_Signup = (props) =>{
    return (
        <div className="parent-login">
            <div className="left-side-login">Image</div>
            <div className="right-side-login" style={{backgroundColor:Colors.Light}}>
                <div className="form-div-login">
                    <form>
                        <div className="form-group">
                            <label><LogoIcon/></label>
                        </div>
                        <div className="form-group">
                            <label ><h4 style={{color:Colors.Blue}}>{props.HeadingName}</h4></label>
                            <small className="form-text text-muted">{props.Message}</small>
                        </div>
                        {props.Tags}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login_Signup;