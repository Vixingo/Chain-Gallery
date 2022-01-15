import React from "react";
import Mini_profile_lite from "./Mini_profile_lite";
import { Link } from 'react-router-dom';

function Primary_work_card() {
    return (
        <>
            <div
                className="card"
                style={{
                    border: "none",
                    webkitBoxShadow: " 0 0 4px 0 #c4c4c4",
                    mozBoxShadow: " 0 0 4px 0 #c4c4c4",
                    boxShadow: " 0 0 4px 0 #c4c4c4"
                }}
            >
              <Link to="/Singleart" style={{color: "unset", textDecoration: 'none' }}> 
                <img
                    src="/img/nothing_2.png"
                    className="card-img-top"
                    alt="..."
                />
                </Link>  
                <div className="card-body">
                    <h4 className="card-title">artwork name</h4>
                    <Mini_profile_lite />
                </div>
                <div
                    className="card-footer"
                    style={{
                        backgroundColor: "#4032e5",
                        color: "#fff",
                    }}
                >
                    <div
                        className="row"
                        style={{
                            padding: "0",
                        }}
                    >
                        <div className="col-xl-5">
                            <p
                                className="fw-light"
                                style={{
                                    fontSize: "0.7rem",
                                    margin: 0,
                                }}
                            >
                                Current high bid
                            </p>
                            <h6>2.00 ETH</h6>
                        </div>
                        <div className="col-xl-7">
                            <p
                                className="fw-light"
                                style={{
                                    fontSize: "0.7rem",
                                    margin: 0,
                                }}
                            >
                                Auction ends in
                            </p>
                            <h6>21h 06m 50s</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Primary_work_card;
