import React from "react";
import { Colors } from "../Constants/Colors";

const LogoIcon = () => {
    return (
       <a href="http://localhost:3000/" style={{textDecoration:"none"}}> <div style={{
           display:"flex",
           justifyContent:"center",
           alignItems:"center",
           flexDirection:"row",
        }}>
        <div style={{
            height: "40px",
            width: "40px",
            backgroundColor: Colors.Blue,
            color: Colors.Light,
            borderRadius: "10px",
            textAlign:"center",
        }}>
            <span style={{
                fontSize: "25px",
                textAlign: "center",
                fontWeight: "bolder",
                fontFamily: "-webkit-body"
            }}>;</span>
        </div><label style={{marginLeft:"5px",
         color:Colors.Black,
         fontSize: "25px",
                textAlign: "center",
                fontWeight: "bolder",
                alignItems:"center" }}>Interview Task</label></div></a>
    )
}
export default LogoIcon;