import React from "react";
import "./css/Singleart.css";
import Artwork from "./components/Artwork";
import MainNav from "./components/MainNav";
import Artdetail from "./components/Artdetail";
import Moreworkby from "./components/Moreworkby";
import Com_act from "./components/Com_act";
import Userfooter from "./components/Userfooter";

function Singleart() {
    return (
        <>
            <MainNav />
            <Artwork />
            <Artdetail />
            <Moreworkby />
            <Com_act />
            <Userfooter />
        </>
    );
}

export default Singleart;
