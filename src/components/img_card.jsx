import React from "react";
const Img_card = (props) => {
    return (
        <div className="d-inline mt-4" style={{ width: "190px",height:"90px" }}>
            <div className="card "style={{borderRadius:"1rem"}}>
                <img src={props.img}alt="" className="card-img-top " style={{height:"90px",width: "190px",borderRadius:"9rem"}} />
            </div>
        </div>
    )
};
export default Img_card;