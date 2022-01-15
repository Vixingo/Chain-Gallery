import { Link } from "react-router-dom";
import React from "react";

import Button from "@material-ui/core/Button";

function Gallery() {
    return (
        <div className="gallery">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/Singleart" style={{ color: "unset" }}>
                            <img src="/img/work_1.png" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/Singleart" style={{ color: "unset" }}>
                            <img src="/img/work_2.png" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/Singleart" style={{ color: "unset" }}>
                            <img src="/img/work_3.png" />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/Singleart" style={{ color: "unset" }}>
                            <img src="/img/work_4.png" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/Singleart" style={{ color: "unset" }}>
                            <img src="/img/work_5.png" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/Singleart" style={{ color: "unset" }}>
                            <img src="/img/work_6.png" />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <p>
                            It picks up the words on the page and displays ads
                            that are similar to those words. Then when someone
                            either performs an action or clicks on your page you
                            will get paid.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <Button
                            variant="contained"
                            className="w-100 font-weight-light"
                            style={{
                                backgroundColor: "#4032E5",
                                color: "#ffffff",
                            }}
                        >
                            View whole gallery
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Gallery;
