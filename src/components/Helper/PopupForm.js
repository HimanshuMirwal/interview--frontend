import React from "react"
import { Colors } from "../Constants/Colors";
const PopupForm = (props) => {
    if(props.navbar){
        return <div style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0)",
            position: "fixed",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            flexDirection:"column",
            right: 15,
            top: "101px",
            zIndex:"+10"
        }}>
        <div style={{width:"400px",
        padding:"5px",
        backgroundColor:Colors.Light,
        boxShadow:`${Colors.Black} 0px 3px 8px`}}>
            {props.Form}
            {props.closeButton}
            </div>
        </div>
    }
    return (
        <div style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.696)",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column",
            right: 0,
            top: 0,
            zIndex:"+10"
        }}>
        <div style={{width:"300px",
        padding:"20px",
        backgroundColor:Colors.Light,
        borderRadius:"20px"}}>
            {props.Form}
            {props.closeButton}
            </div>
        </div>
    )
}
export default PopupForm;