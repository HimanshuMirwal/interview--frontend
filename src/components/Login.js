import React, { useState } from "react";
import { Colors } from "./Constants/Colors";
import Axios from "axios";

import LoginSignup from "./Helper/Login_Signup";
const Login = () => {
    const [userEmail, setEmail]=useState("");
    const [userPassword, setPassword]=useState("");
    function CheckEmail(email) {
        setEmail(email)
    }

    function CheckPassword(password) { 
        setPassword(password)
    }
    function Continue() {
            Axios.post("https://interview--backend.herokuapp.com/signin-user",{email:userEmail,password:userPassword})
            .then(data=>{
                console.log(data)
                if(data.data.code!==200){
                    alert(data.data.message)
                }else{
                    alert(data.data.message+" "+data.data.name.toUpperCase())
                    localStorage.setItem("CURRENT_USER",JSON.stringify({email:userEmail, name:data.data.name}))
                    window.location.href="https://interview--frontend.herokuapp.com/"
                }
            }).catch(Err=>alert(Err))
    }
    return (
        <LoginSignup 
            HeadingName="Login"
            Message="Sign in to your account."
            Tags={<><div className="form-group">
                            <label >Email address</label>
                            <input 
                            onChange={(e)=>CheckEmail(e.target.value)}
                            value={userEmail}
                            type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input 
                            value={userPassword}
                            onChange={(e)=>CheckPassword(e.target.value)}
                            type="password" className="form-control"  placeholder="Password" />
                        </div>
                        <button type="button" 
                        onClick={()=>Continue()}
                        className="btn btn-block" style={{backgroundColor:Colors.Blue,
                        color:Colors.Light}}>Sign In</button>
                        <div className="form-group d-flex justify-content-between align-items-center flex-row ">
                            {/* <a href="/forgot" style={{color:Colors.Blue, textDecoration:"none", marginTop:"10px"}}>Forgot Password</a> */}
                            <a href="/signup" style={{color:Colors.Blue, textDecoration:"none", marginTop:"10px"}}>Signup Here</a>
                        </div>
                        </>
                        }
        />
    )
}
export default Login