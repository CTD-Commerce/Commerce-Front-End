import React from "react";
import "./style.scss";
import Header from "../../Header"
import TeamCards from "../../TeamCards"
import Footer from "../../Footer"
import { Helmet } from 'react-helmet-async';

const AboutUs= () => {
    return (
        <>
        <Header/>
        <TeamCards/>
        <Footer/> 
        </>
    )
}

export default AboutUs