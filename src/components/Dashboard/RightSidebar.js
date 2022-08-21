import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Colors } from "../Constants/Colors";
import { Title } from "../Constants/SideBarListItem";
import DisplayUser from "./DisplayUser";
const RightSidebar = (props) => {
    return (<div style={{
        height: "100%",
        width: "70%",
        backgroundColor: `${Colors.Light}`,
        display: "flex",
        flexDirection: "row"
    }}>
        {props.activeLink !== Title.Courses ? <DisplayUser /> :
            <><ListElement message="All users" color={Colors.Blue} /></>
        }
    </div>)
}
const ListElement = (props) => {
    const [DataArray, setDataArray] = useState([])
    const [ChoosenCourse, setChosenCourse] = useState(null);
    const [listOfCourses, setListOfCourses] = useState([]);
    useEffect(() => {
        Axios.get("https://interview--backend.herokuapp.com/courses/")
            .then(data => {
                setDataArray(data.data)
                const res = data.data.map(value=> {
                    return {
                        Title:value.titleCourse,
                        image:value.titleImage
                    }})
                setListOfCourses(res)
            })
    }, [])
    return (
    (Object.keys(DataArray).length===0)?<h4 style={{color:Colors.Blue}}>Loading....</h4>
    :<div style={{
        height:"auto",
        width:"100%",
        overflow:"scroll",
        marginBottom:"100px"
    }}>
        <div style={{
            height: "150px",
            width: "100%",
            overflowX: "scroll",
            display: "flex",
            flexDirection: "row",
            alignItems:"center"
        }}>
        {
            DataArray.map(course=>{
                return <div key={course.titleCourse} style={{
            height: "100px",
            width: "auto",
            background: Colors.Blue,
            color: Colors.white,
            borderRadius: "10px",
            fontSize: "25px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin:"10px",
            padding:"10px"
        }} onClick={()=>{
            setChosenCourse(course)
            }}>
            {course.titleCourse}
        </div>
            })
        }
        </div>
        {(ChoosenCourse!==null) && <div style={{
            height: "150px",
            width: "100%",
            overflowX: "scroll",
            display: "flex",
            flexDirection: "row",
            alignItems:"center",
            justifyContent:"flex-start",
            padding:"10px"
        }}>
        <img src={ChoosenCourse.image} className="img-fluid"  style={{borderRadius:"10px", marginRight:"20px"}} height= "150px" width= "150px" alt={ChoosenCourse.image}/>
        <h3 style={{color:Colors.Blue}}>{ChoosenCourse.titleCourse}</h3>
        </div>}
        <div style={{
            height: "auto",
            width: "100%",
            overflowX: "scroll",
            display: "flex",
            flexDirection: "column",
            padding:"10px"
        }}>
        {(ChoosenCourse !== null) && <List data={[ChoosenCourse]}/>}
        </div>
    </div>
    )
}

const List = (props)=>{
    const id=props.data[0]._id
    const data = props.data[0].lectures
    return (<>
    {
        data.map((value,index)=>{
            return <div className="mb-2">
            <p>
            <div style={{
                width:"100%",
                height:"25px", 
                color:Colors.Black, 
                background:Colors.Light,
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                fontSize:"25px"}} data-toggle="collapse" data-target={"#multiCollapseExample"+index} aria-expanded="false" aria-controls={"multiCollapseExample"+index}>
            <p>{(index+1)+". "+value.lectureTitle}</p>
            </div>
            <p style={{color:Colors.Blue}}>{value.videoUrls.length +"Lectures"}</p>
            </p>
            <div class="row">
        <div class="col mb-3">
        <div class="collapse multi-collapse" id={"multiCollapseExample"+index}>
      <div class="card card-body">
            {
                value.videoUrls.map((lecture, indexList)=>{
                    return <p  onClick={()=>window.location.href=`https://interview--frontend.herokuapp.com/lecture/${id}/${value.lectureTitle}/${lecture.name}/${btoa(lecture.videoUrl)}`} style={{color:Colors.Gray}} >{indexList+1+". "+lecture.name}</p>
                })
            }
      </div>
    </div>
  </div>
</div>
            </div>
        })
    }
        
</>
    )
}
export default RightSidebar