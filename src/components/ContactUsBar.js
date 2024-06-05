import React from "react"
import MyButton from "./MyButton";

const ContactUsBar = () => {
    return (
        <div>            
            <section id="contact-us-bar" className="contact-us-bar-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <h1>Ready to elevate your manufacturing?</h1>
                            <h3>Contact us today to schedule a consultation</h3>                    
                        </div>
                        <div className="col py-3 center">
                            <MyButton link={"/contact"} text={"CONTACT US"}></MyButton>                                               
                        </div>
                         
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUsBar;