import React from "react";

import "./css/Landingpage.css";
import Hero from "./components/Hero";
import LandingNav from "./components/LandingNav";
import About from "./components/About";
import ServiceTop from "./components/ServiceTop";
import Servicebottomcarousel from "./components/Servicebottomcarousel";
import Feature from "./components/Feature";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Clients_top from "./components/Clients_top";
import Clients_brand from "./components/Clients_brand";
import Footer from "./components/Footer";
import "./css/responsive.css";

function Landingpage() {
    return (
        <>
            <LandingNav />
            <Hero />
            <About />
            <ServiceTop />
            <Servicebottomcarousel />
            <Feature />
            <Work />
            <Gallery />
            <Testimonial />
            <Clients_top />
            <Clients_brand />
            <Footer />
        </>
    );
}

export default Landingpage;
