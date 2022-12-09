import React from "react";
const Card2 = (props) => {
    return (
        <div className="d-inline ml-4 mt-5 m-3" style={{ width: "250px", height: "auto", zIndex: "1" }}>
            <div className="card" style={{ backgroundColor: "rgb(255, 91, 31)", borderRadius: ".11rem", height: "250px",width: "250px", borderRadius: "2rem" }}>
                <div className="card-img d-flex justify-content-center align-items-center" style={{ height: "120px" }}>
                    <img className="card-img-top " style={{ width: "150px", height: "90px" }} src={props.img} alt="" />
                </div>
                <div className="title h5 text-center h-50 m-2 text-light ">
                    {props.title}
                </div>
            </div>
        </div>
    )
};

export default Card2;