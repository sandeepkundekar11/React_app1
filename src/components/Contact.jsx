import React from "react";
import Nav from "./Nav_bar";
const Contact = () => {
    return (
        <>
            <Nav />
            <div className="Contact pt-5 m-auto">
                <div className="container-fluid contact-p1" style={{ "height": "45vh" }}>
                    <h1 className="text-center pt-4 text-white"> Contact Us</h1>
                    <p className="text-center text-white container">  Questions bug and reports ,feedback, feature request -  We're  here for it allows
                        Already use Stack ? Sign up so we can tailor your support experience if that's not possible  we'd still like to
                        here from you</p>
                </div>
                <div className="form form-1">
                    <div >
                        <label className="d-block "> Your Email Address </label>
                        <input className="input-1" type="email" />
                    </div>
                    <div className="mt1" >
                        <label className="d-block  "> Subject </label>
                        <input className="input-1" type="text" />
                    </div>

                    <div className="mt-1">
                        <label  > How can i help ?</label>
                        <textarea name="" id="" cols="10" rows="5"></textarea>
                    </div>

                    <button className="btn btn-primary mt-1">SEND</button>
                </div>
                <div>

                </div>

            </div>
        </>
    )
};

export default Contact;