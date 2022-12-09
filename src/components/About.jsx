import React from "react";
import Nav from "./Nav_bar";
import img1 from "../images/about_img1.PNG";
import img2 from "../images/about_img2.PNG";
import img3 from "../images/about_img3.PNG";
import img4 from "../images/about_img4.PNG";
import Media from "./media1";
import Card3 from "./card3";
const About = () => {
   return (

      <>
         <Nav />
         <div className="About w-100">
            <h5 className="container borderd">About Us</h5>
            <div className="w-100 d-md-flex container  pt-5" >
               <div className="">
                  <h4>24H Logistics</h4>
                  <h5> is an international logistics</h5>
                  <h5>company that has a goal reach.</h5>
                  <p>We specialized in domestic,commercial international courier and
                     air cargo Our partnarship with Air Menzies international allows us to have a expensive delivary network which cover
                     the uk and over220 companies.
                  </p>
                  <br />
                  <p>with 24H we can choose from the well known logistics companies
                     and get the best rate for the national or international delivaries.
                  </p>
               </div>
               <div className="w-100">
                  <img className="" style={{ width: "100%", height: "40vh" }} src={img1} alt=""/>
               </div>
            </div>

            <div className="w-100 mt-1 row d-flex justify-content-center align-items-center h-50">
               <Media img={img2} title="Our Mission" text="Ultilising latest communication,
               tracking processing software ,and decade of experiance." />
               <Media img={img3} title="Our Vision" text="The best possible service in the sphare of optimized route of cargo and transpotation webword" />
            </div>



            <div className="about_sec2 mt-5">
               <h6 className="text-center">Testmonials</h6>
               <h2 className="text-center">See why the World's best companies</h2>
               <h2 className="text-primary text-center"> USe 24H Logiestics</h2>
            </div>

            <div className="container row m-auto d-flex justify-content-center mb-5 ">
               <div className="d-inline ">
                  <img className="w-100" src={img4} alt="" />
               </div>
               <div className="d-inline d-md-flex">
                  <div className=" w-100">
                     <Card3 />
                     <Card3 />
                  </div>
                  <div className=" ml-md-4 w-100 mt-5">
                     <Card3 />
                     <Card3 />
                  </div>
               </div>
            </div>


         </div>
      </>
   )
};
export default About;