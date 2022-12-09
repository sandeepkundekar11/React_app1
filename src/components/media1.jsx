import React from "react";
import img1 from "../images/about_img3.PNG";
const Media =(props)=>
{
    return(
        <>
        <div className="d-inline ml-4 " style={{width:"260px",height:"190px",marginTop:"4rem"}}>
            <div className="media  d-flex justify-content-center align-items-center bg-light" style={{height:"185px",width:"100%",borderRadius:"1.5rem"}}>
                <img className=" h-50 " src={props.img} alt="" style={{width:"40%"}}/>
                <div className="media-body m-0" style={{width:"60%"}}>
                    <div className="title h6 ml-3">{props.title}</div>
                    <div className="text ml-3" style={{fontSize:"12px"}}>{props.text}</div>
                </div>
            </div>
        </div>
        </>
    )
};
export default Media;