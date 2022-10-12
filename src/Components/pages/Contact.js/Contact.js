import React from "react";
import Header from "../../Layout/Header";
import ContactForm from "./ContactForm";
import Footer from "../../Layout/Footer";
const Contact=()=>
{
    return(<React.Fragment>
        <Header></Header>
        <ContactForm/>
        <Footer/>
    </React.Fragment>)
}

export default Contact;