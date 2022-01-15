import React from "react";

function Singlecomment() {
    return (
        <>
            <div className="single_comment">
                <div className="art_profile pb-3 ">
                    <div className="art_pro_img">
                        <img src="/img/profile_demo.png" alt="" />
                    </div>
                    <div className="art_pro_name">
                        <h6>@artistname</h6>
                    </div>
                    <span
                        style={{
                            marginLeft: "10px",
                            fontSize: "0.7rem",
                            color: "#707070",
                        }}
                    >
                        42 minutes ago
                    </span>
                </div>

                <p
                    style={{
                        width: "90%",
                    }}
                >
                    Leo, tellus phasellus ut adipiscing. Nisl nulla sagittis
                    iaculis purus fermentum ornare magnis dictumst volutpat.
                    Amet sit aliquet vulputate sed feugiat adipiscing at eget.
                    Vulputate.
                </p>
                <a
                    href="#"
                    style={{
                        color: "#4032e5",
                        fontSize: "0.8rem",
                    }}
                >
                    Reply
                </a>
            </div>
        </>
    );
}

export default Singlecomment;
