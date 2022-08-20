import React, { useState } from "react";
import { Colors } from "../Constants/Colors";
import Axios from "axios";
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Jyvffr3aCp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
const DisplayUser = (props) => {
    const {email} = JSON.parse(localStorage.getItem("CURRENT_USER"));
    const [description, setDescription] = useState("enter query.....")
    const [post, setPost] = useState([]);
    const [showForm, setShowForm] = useState(false);
    useState(() => {
        Axios.get("https://interview--backend.herokuapp.com/descussion")
            .then(data => {
                console.log(data.data)
                setPost(data.data)
            })
            .catch(Err => alert(Err))
    }, [])
    return (
        (Object.keys(post).length===0)?<h4 style={{color:Colors.Blue}}>Loading...</h4>:
        <div style={{
            height: "100%",
            width: "100%",
            backgroundColor: `${Colors.white}`,
            display: "flex",
            flexDirection: "column",
            paddingBottom:"120px",
            overflowY:"scroll"
        }}>
         <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        }}>
       {!showForm && <div style={{
                    height: "50px",
                    width: "120px",
                    background: Colors.Blue,
                    color: Colors.white,
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2px auto"
                }}
                onClick={()=>setShowForm(!showForm)}
                >
                    {showForm?"Close":"Post"}
                </div>}
                { showForm && <div style={{
                height: "180px",
                width: "300px",
                background: Colors.white,
                padding: "15px",
                borderRadius: "10px",
                margin: "10px auto"
            }}>
                <div class="form-group">
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} class="form-control" style={{ background: Colors.white }} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between",alignItems: "center"}}>
                <div style={{
                    height: "50px",
                    width: "120px",
                    background: Colors.Blue,
                    color: Colors.white,
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto"
                }}
                    onClick={() => {
                        Axios.post("https://interview--backend.herokuapp.com/post-descussion", { email, description })
                            .then(data =>{
                                 alert("Send")
                                 Axios.get("https://interview--backend.herokuapp.com/descussion")
            .then(data => {
                console.log(data.data)
                setPost(data.data)
            })
            .catch(Err => alert(Err))    
                            })
                            .catch(Err => alert(Err))
                        setDescription("")
                    }}
                >
                    Post
                </div>
                <div style={{
                    height: "50px",
                    width: "120px",
                    background: Colors.Blue,
                    color: Colors.white,
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2px auto"
                }}
                onClick={()=>setShowForm(!showForm)}
                >
                    {showForm?"Close":"Post"}
                </div>
                </div>
            </div>}
        </div>
            
            <div style={{
                height: "100%",
                width: "100%",
                backgroundColor: Colors.white,
                display: "flex",
                flexDirection: "column",
                overflow:"scroll"
            }}>
                {post.map(data => {
                    return <div style={{
                        width: "500px",
                        margin: "10px auto",
                        borderRadius: "10px",
                        padding: "10px",
                        boxShadow: `${Colors.Light} 0px 10px 18px`
                    }}>
                        <label style={{ 
                            color: Colors.Blue,
                            fontSize:"20px",
                            fontWeight:"bold" }}>
                            {data.email}</label>
                        <p style={{ color: Colors.Gray }}>{data.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
export default DisplayUser;