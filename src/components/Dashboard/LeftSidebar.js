import React from "react";
import { Colors } from "../Constants/Colors";
import { Title } from "../Constants/SideBarListItem";
const LeftSidebar = (props)=>{
    return (<div style={{
        height: "100%",
        width: "30%",
        backgroundColor: `${Colors.white}`,
        display: "flex",
        flexDirection: "column",
    }}>
        <ListElement Name={Title.Courses} activeLink={props.activeLink} ChanageActiveLink={props.ChanageActiveLink} topic={Title.Courses} iconName="fa fa-book"/>
        <ListElement Name={Title.Discussion} activeLink={props.activeLink} ChanageActiveLink={props.ChanageActiveLink} topic={Title.Discussion} iconName="fa fa-user"/>
    </div>
)
}
const ListElement = (props) => {
    return <div
        onClick={()=>props.ChanageActiveLink(props.topic)}
        style={{
        borderRadius: "10px",
        height: "40px",
        width: "200px",
        margin: "10px auto",
        background: (props.topic===props.activeLink)?`${Colors.Blue}`:`${Colors.white}`,
        color: (props.topic===props.activeLink)?`${Colors.Light}`:`${Colors.Black}`,
        boxShadow:(props.topic===props.activeLink)?`${Colors.Blue} 0px 3px 8px`:`none`,
    }}><i className={props.iconName} style={{ fontSize: "20px", margin: "auto 10px" }}></i>
        <label style={{ fontSize: "20px", fontWeight: "400px" }}>{props.Name}</label>
    </div>
}
export default LeftSidebar