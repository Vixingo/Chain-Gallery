import React from "react";

function Singleactivity() {
    return (
        <>
            <div className=" single_activity d-flex ">
                <div className="art_profile pb-3 ">
                    <div className="art_pro_img">
                        <img src="/img/profile_demo.png" alt="" />
                    </div>
                    <div className="art_pro_name">
                        <span
                            style={{
                                marginLeft: "15px",
                                marginRight: "-10px",
                            }}
                        >
                            Listed By
                        </span>
                        <h6 className="d-inline"> @artistname</h6>
                        <div
                            style={{
                                marginLeft: "15px",
                                marginTop: "5px",
                                fontSize: "0.7rem",
                                color: "#707070",
                            }}
                        >
                            <p> 42 minutes ago</p>
                        </div>
                    </div>
                </div>
                <div className="act_pricing text-right">
                    <h2 className="fw-light">0.000 ETH</h2>
                    <p>$0,000.00</p>
                </div>
            </div>
        </>
    );
}

export default Singleactivity;
