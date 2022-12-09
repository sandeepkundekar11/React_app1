import React from "react";
const Card1 = (props) => {
    return (
        <div className="d-inline ml-4 mt-5 m-3" style={{ width: "190px", height:"auto",zIndex:"1"}}>
            <div className="card" style={{ backgroundColor: " rgb(225, 243, 250)",borderRadius:"2rem" }}>
                <div className="card-img d-flex justify-content-center align-items-center" style={{ height: "120px" }}>
                    <img className="card-img-top " style={{ width: "110px", height: "90px" }} src={props.img} alt="" />
                </div>
                <div className="title h5 text-center h-50 m-2 ">
                    {props.title}
                </div>
            </div>
        </div>
    )
};

export default Card1;