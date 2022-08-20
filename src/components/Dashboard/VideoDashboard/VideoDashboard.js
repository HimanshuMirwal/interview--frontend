import React, { useEffect, useState } from "react";
import Axios from "axios"
import { useParams } from "react-router-dom";
import { Colors } from "../../Constants/Colors";
import TopNavbar from "../../Helper/TopNavbar"
const VideoDashboard = (props) => {
    const { id } = useParams();
    const [data, setData] = useState([])
    const [video, setVideo] = useState({
        Title: "",
        subTitle: "",
        URL: ""
    });
    console.log(id)
    useEffect(() => {
        Axios.get("https://interview--backend.herokuapp.com/coursesbyid" + id)
            .then(value => {
                console.log(value.data[0].lectures)
                setVideo({
                    Title: value.data[0].lectures[0].lectureTitle,
                    subTitle: value.data[0].lectures[0].videoUrls[0].name,
                    URL: value.data[0].lectures[0].videoUrls[0].videoUrl
                })
                console.log({
                    Title: value.data[0].lectures[0].lectureTitle,
                    subTitle: value.data[0].lectures[0].videoUrls[0].name,
                    URL: value.data[0].lectures[0].videoUrls[0].videoUrl
                })
                setData(value.data[0].lectures)
            }).catch(Err => console.log(Err))
    }, [])
    return <>
        <TopNavbar />
        <div style={{
            height: "100%",
            width: "100%",
            position: "fixed",
            marginTop: "120px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>

            <div style={{
                height: "100%",
                width: "35%",
                overflowX: "scroll",
                paddingBottom: "120px",
                paddingLeft: "10px",
                paddingRight: "10px"
            }}>
                {data.map((value, index) => {
                    return <div className="mb-2">
                        <p>
                            <div style={{
                                width: "100%",
                                height: "auto",
                                color: Colors.Black,
                                background: Colors.white,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                fontSize: "20px"
                            }} data-toggle="collapse" data-target={"#multiCollapseExample" + index} aria-expanded="false" aria-controls={"multiCollapseExample" + index}>
                                <p style={{ margin: "0px" }}>{(index + 1) + ". " + value.lectureTitle}</p>
                            </div>
                            <p style={{ color: Colors.Blue }}>{value.videoUrls.length + "Lectures"}</p>
                        </p>
                        <div class="row m-0">
                            <div class="col-12 mb-3">
                                <div class="collapse multi-collapse" id={"multiCollapseExample" + index}>
                                    <div class="card card-body">
                                        {
                                            value.videoUrls.map((lecture, indexList) => {
                                                return <p onClick={() => setVideo({
                                                    Title: value.lectureTitle,
                                                    subTitle: lecture.name,
                                                    URL: lecture.videoUrl
                                                })} style={{ color: Colors.Gray }} >{indexList + 1 + ". " + lecture.name}</p>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div style={{
                height: "100%",
                width: "65%",
                overflowX: "scroll",
                paddingBottom: "120px",
                paddingLeft: "10px",
                paddingRight: "10px"
            }}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "flex-start" }}>
                    <h6 style={{ color: Colors.Black }}>{video.Title}</h6>
                    <h3 style={{ color: Colors.Blue }}>{video.subTitle}</h3>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <iframe width="100%" height="500px"
                        src="https://www.youtube.com/embed/Y4qO9unerGs"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </>
}
export default VideoDashboard;