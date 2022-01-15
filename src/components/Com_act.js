import React from "react";
import Artactivity from "./Artactivity";
import Artcomment from "./Artcomment";
import Singlecomment from "./Singlecomment";

function Com_act() {
    return (
        <>
            <section className="com_act">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Artcomment />
                            <div
                                style={{
                                    maxHeight: "500px",
                                    overflowY: "scroll",
                                }}
                            >
                                <Singlecomment />
                                <Singlecomment />
                                <Singlecomment />
                                <Singlecomment />
                                <Singlecomment />
                                <Singlecomment />
                                <Singlecomment />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Artactivity />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Com_act;
