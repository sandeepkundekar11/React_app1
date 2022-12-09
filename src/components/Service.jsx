import React from "react";
import Nav from "./Nav_bar";
import Card2 from "../components/Card2";
import img1 from "../images/service_img1.PNG";
import img2 from "../images/service_img2.PNG"
import img3 from "../images/service_img3.PNG"
const Service = () => {
    return (

        <>
            <Nav />
            <div className="Service w-100">
                <p className="text-center text-light">Services We Offer</p>
               <h2 className="text-center text-light">We Manage Lead Logistics For</h2>
               <h2 className="text-center text-light">Worlds Multinational Companies .</h2>
               <p className="container text-center text-light">Our globel logistics expertise, advanced supply chain technology And custamized logistics solution will help you analyze .develop
                and implement successfull supply chain management stratergies from end-to-end
               </p>


               <div className="service_sub row d-flex justify-content-center container m-auto ">
                 <Card2 img={img1} title="Exporting Its Easier Then you Think" />
                 <Card2 img={img2} title="Importing its Simple"/>
                 <Card2 img={img3} title="Fast and Easy Customs clearing Services" />
               </div>

               <div className="w-100 d-flex jsutify-content-center mt-3">
               <button className="btn btn-primary " style={{width:"245px",height:"3rem",margin:"auto",borderRadius:"2rem"}} >SHEDULE AN APPOINTMENT</button>
               </div>
            </div>

        </>
    )
};
export default Service;