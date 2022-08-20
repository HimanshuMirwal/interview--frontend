import React, { useState } from "react";
import { Title } from "../Constants/SideBarListItem";
import TopNavbar from "../Helper/TopNavbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const DashBoard = () => {
    const [activeLink, setActiveLink] = useState(Title.Discussion);
    function ChanageActiveLink(Name){
        setActiveLink(Name)
    }
    return (
        <>
            <TopNavbar />
            {/* Parent Div Below Navbar */}
            <div style={{
                height: "100%",
                width: "100%",
                position: "fixed",
                marginTop: "102px",
                display: "flex",
                flexDirection: "row",
            }}>
            {/* Left child div inside parent div */}
            <LeftSidebar activeLink={activeLink} ChanageActiveLink={ChanageActiveLink}/>
            
            {/* Right child div inside parent div */}
            <RightSidebar activeLink={activeLink}/>    
            </div>
        </>
    )
}

export default DashBoard;