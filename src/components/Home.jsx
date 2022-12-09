import React from "react";
import Nav from "./Nav_bar";
import parcel_boy from "../images/home_logo.PNG";
import Card1 from "./card1";
import img1 from "../images/earth.PNG";
import img2 from "../images/shop.PNG";
import img3 from "../images/home.PNG";
import img4 from "../images/card.PNG";
import img5 from "../images/delevary_bus.PNG";
import img6 from "../images/truck.PNG";
import img7 from "../images/img_24.PNG";

const Home = () => {
    
    return (
        <>
            <Nav />
            <div className=" Home w-100">
                <div className="sub_home d-flex">
                    <div className="sub_home1">
                        <div className="h1 text-primary">Safe & Reliable</div>
                        <div className="h1 text-primary">Cargo Solution ! </div>
                        <p className="text-center">Our globle logistics solution, advanced supply <br/> chain technology & customized logistics solutions </p>
                        <span className=" btns mt-3"> 
                            <button className="btn btn-primary mt-1">send uk to uk</button>
                            <button className="btn btn-primary ml-1 mt-2">send to international</button>
                        </span>
                    </div>

                    <div className="sub_home2">
                        <img className="home_img" src={parcel_boy} alt="" />
                    </div>
                </div>


                <div className="home_sec-1 mt-5 h-100 text-center">
                    <h2 className="text-danger">Your Package , Your Rules</h2>
                    <p>Our Network offersthe perfect apportunity for SMB (samll and medium size business) to import and export their goods <br/>at a greate prize as we offer as we offer various rangeof know carrier to delever your parsal around the world. </p>

                    <div className="row d-flex justify-content-center container m-auto" >
                     <Card1 img={img1} title="The Power Of Our Global Network"/>
                     <Card1 img={img2} title="Online Shoper" />
                     <Card1 img={img3} title="Warehouse Storage"/>
                     <Card1 img={img4} title="Easy Payment Methods"/>
                     <Card1 img={img5} title="Fast & Efficient Delivary"/>
                     <Card1 img={img6} title="Security cargo"/>
                     <Card1 img={img7} title="24/7 Hours Support"/>
                    </div>
                </div>

            </div>
        </>

    )
};
export default Home;