import React from "react";
import FAQ1 from "../images/FAQ_img1.PNG";
import Nav from "./Nav_bar";
import Img_card from "./img_card";
// import Client_card from "./client_card";
import client1 from "../images/client_1.PNG";
import client2 from "../images/client_2.PNG"
import client3 from "../images/client_3.PNG"
import client4 from "../images/client_4.PNG"
const FAQ = () => {
    return (

        <>
            <Nav />
            <div className="FAQ">
                <div className="FAQ_sub container d-md-flex">
                    <div className="w-100">
                        <img style={{ width: "100%", height: "100%" }} src={FAQ1} alt="" />
                    </div>

                    <div className="w-100 ">
                        <h3>FAQ</h3>
                        <p className="mb-5"> Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose</p>
                        <div className="w-100  d-flex mt-4  " style={{ borderBottom: "solid black 1px" }} >
                            <div className="" style={{ width: "90%" }}>Various versions have evolved</div>
                            <div className="" style={{ fontWeight: "bold", color: "orange", width: "10%" }}>+</div>
                        </div>
                        <div className="w-100  d-flex mt-4  " style={{ borderBottom: "solid black 1px" }} >
                            <div className="" style={{ width: "90%" }}>over the years, sometimes by accident</div>
                            <div className="" style={{ fontWeight: "bold", color: "orange", width: "10%" }}>+</div>
                        </div>
                        <div className="w-100  d-flex mt-4  " style={{ borderBottom: "solid black 1px" }} >
                            <div className="" style={{ width: "90%" }}>which don't look even slightly believable.</div>
                            <div className="" style={{ fontWeight: "bold", color: "orange", width: "10%" }}>+</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-center mt-3">Clients</h2>
                <div className="row w-100  clients">

                    <Img_card img={client1} />
                    <Img_card img={client2} />
                    <Img_card img={client3} />
                    <Img_card img={client4} />
                    <Img_card img={client4} />
                </div>


               


            </div>
        </>
    )
};
export default FAQ;