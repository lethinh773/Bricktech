
import React from "react";
import Herost from "./page_home/Herost";
import Writing from "./page_home/Writing";
import ServiceSt from "./page_home/ServiceSt";
import Awards from "./page_home/Awards";
import Testimonials from "./page_home/Testimonials";
import Pricing from "./page_home/Pricing";
import Fap from "./page_home/Fap";
import Services from "./Services";
const Home = () => {
    return (
        <>
            <Herost/>
            <Writing/>
            <ServiceSt/>
            <Services />
            <Awards/>
            <Testimonials/>
            <Pricing/>
            <Fap/> 
        </>
    );
};

export default Home;
