import React, { useReducer, useState } from "react";
import { Colors } from "../Constants/Colors";
import LogoIcon from "../LogoIcon/LogoIcon";
import PopupForm from "./PopupForm";

const TopNavbar = () => {
    const [display, setDisplay] = useState(false);
    const UserData = JSON.parse(localStorage.getItem("CURRENT_USER"))
    return (
        <>
            <div style={{ display: display ? "block" : "none" }}>
                <PopupForm Form={<Form name={UserData.name} email={UserData.email} />} navbar={true} />
            </div>
            <div style={{
                height: "100px",
                width: "100%",
                position: "fixed",
                boxShadow: "0 0 5px 0 black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2%",
            }}
            >
                <LogoIcon />

                <div style={{
                    height: "50px",
                    width: "200px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "35px",
                    border: `2px solid ${Colors.Blue}`

                }}
                    onClick={() => setDisplay(!display)}>
                    <div style={{
                            height:"30px",
                            width:"30px",
                            borderRadius: "15px",
                            fontSize:"19px",
                            fontWeight:"bold",
                            textAlign:"center",
                            background:Colors.Blue,
                            color:Colors.white,
                            border:`2px solid ${Colors.white}`
                        }}>
                        {UserData.name[0].toUpperCase()}
                        </div>
                    {!display ? <label style={{ color: Colors.Black, fontSize: "15px", fontWeight: "bold" }}>
                        {UserData.name.substring(0, 15)}</label> : <i className="fa fa-times" style={{ color: Colors.Blue, fontSize: "20px", fontWeight: "400" }} ></i>}
                </div>
            </div>
        </>
    )
}

const Form = (props) => {
    const [Name, setName] = useState({ name: props.name, Clicked: false })
    const [Email, setEmail] = useState({ email: props.email, Clicked: false })
    function CheckName(data) {
        if (data.key === "Enter") {
            if (/^[a-zA-Z ]+$/.test(Name.name)) {
                let LocalData = JSON.parse(localStorage.getItem("User")) ? JSON.parse(localStorage.getItem("User")) : []
                let current_user = JSON.parse(localStorage.getItem("current_user"));    
                let User = {
                        id: current_user.id,
                        name: Name.name,
                        password: current_user.password,
                        email: current_user.email,
                        role: current_user.role,
                        status: current_user.status
                    }
                    console.log(User)
                    let NewUsers = LocalData.map(data => {
                        if (data.id === User.id) {
                            return User
                        }
                        return data
                    })
                    console.log(NewUsers)
                    localStorage.setItem("User", (JSON.stringify(NewUsers)))
                    localStorage.setItem("current_user",(JSON.stringify(User)))
                    alert("Detail Updated");
                    window.location.href="https://interview--frontend.herokuapp.com/"
            }else {
                alert("please enter correct name.")
            }
        }
    }
        function CheckEmail(data) {
            if (data.key === "Enter") {
                const Check = (Email.email).match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                if (Check) {
                    if (data.key === "Enter") {
                        if (/^[a-zA-Z ]+$/.test(Name.name)) {
                            let LocalData = JSON.parse(localStorage.getItem("User")) ? JSON.parse(localStorage.getItem("User")) : []
                            let current_user = JSON.parse(localStorage.getItem("current_user"));    
                            let User = {
                                    id: current_user.id,
                                    name: current_user.name,
                                    password: current_user.password,
                                    email: Email.email,
                                    role: current_user.role,
                                    status: current_user.status
                                }
                                console.log(User)
                                let NewUsers = LocalData.map(data => {
                                    if (data.id === User.id) {
                                        return User
                                    }
                                    return data
                                })
                                console.log(NewUsers)
                                localStorage.setItem("User", (JSON.stringify(NewUsers)))
                                localStorage.setItem("current_user",(JSON.stringify(User)))
                                alert("Detail Updated");
                                window.location.href="https://interview--frontend.herokuapp.com/"
                        }
                    }
                } else {
                    alert("Please enter correct email.")
                }
            }
        }
        return <div style={{ width: "100%" }}>
            <div style={{ width: "100%", height: "auto" }}>
                <div style={{ height: "150px", width: "100%" }}>
                    <div style={{
                        backgroundColor: "#3330e4",
                        backgroundImage: "url(https://www.transparenttextures.com/patterns/gplay.png)",
                        height: "100px",
                        width: "100%"
                    }}>
                        <div style={{
                            height: "auto",
                            width: "auto",
                            /* position: absolute; */
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            zIndex: "+10",
                            marginTop: "0px",
                        }}>
                        <div style={{
                            height:"100px",
                            width:"100px",
                            marginTop: "50px",
                            borderRadius: "50px",
                            fontSize:"60px",
                            fontWeight:"bold",
                            textAlign:"center",
                            background:Colors.white,
                            color:Colors.Blue
                        }}>
                        {props.name[0].toUpperCase()}
                        </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    height: "auto",
                    width: "auto", padding: "10px"
                }}>
                    <h6 style={{ color: Colors.Blue }}>Profile</h6>
                    <label style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "gray"
                    }}>User Name</label>

                    <div style={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", fontSize: "20px",
                    }}>{Name.Clicked ? <input type="text" className="form-control" value={Name.name}
                        onChange={(e) => {
                            setName({ ...Name, name: e.target.value })
                        }}
                        onKeyDown={(e) => CheckName(e)}
                    /> : <h6>{props.name}</h6>}
                        {/* <i className={Name.Clicked ? "fa fa-times" : "fa fa-pencil"}
                            onClick={() => setName({ ...Name, Clicked: !Name.Clicked })}></i> */}
                    </div>
                    <hr />
                    <label style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "gray"
                    }}>Email</label>
                    <div style={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", fontSize: "20px",
                    }}>{Email.Clicked ? <input type="email" className="form-control" value={Email.email}
                        onChange={(e) => {
                            setEmail({ ...Email, email: e.target.value })
                        }}
                        onKeyDown={(e) => CheckEmail(e)}
                    /> : <h6>{props.email}</h6>}
                        {/* <i className={Email.Clicked ? "fa fa-times" : "fa fa-pencil"} onClick={() => setEmail({ ...Email, Clicked: !Email.Clicked })}></i> */}
                    </div>
                    <hr />
                    <div
                        style={{
                            display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", fontSize: "20px",
                            fontWeight: "500"
                        }}>
                        <i className="fa fa-sign-out mr-2"></i>
                        <label onClick={() => {
                            localStorage.removeItem("CURRENT_USER");
                            localStorage.removeItem("CURRENT_USER");
                            localStorage.removeItem("CURRENT_USER");
                            window.location.href = "https://interview--frontend.herokuapp.com/login"
                        }}>Logout</label>
                    </div>

                </div>
            </div>
        </div>
    }

    export default TopNavbar;