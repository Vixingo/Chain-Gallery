import { useState } from "react";
import "../css/Tabs.css";
import LoadMoreBTN from "./LoadMoreBTN";
import Offers_box from "./Offers_box";

function In_Out() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="bg-white">
            <div className="container">
                <div className="bloc_holder justify-content-center">
                    <div className="bloc-tabs">
                        <button
                            className={
                                toggleState === 1 ? "tabs active-tabs" : "tabs"
                            }
                            onClick={() => toggleTab(1)}
                        >
                          
                        <h4 className="fw-light">Incoming</h4>
                        </button>
                        <button
                            className={
                                toggleState === 2 ? "tabs active-tabs" : "tabs"
                            }
                            onClick={() => toggleTab(2)}
                        >
                        <h4 className="fw-light"> Outgoing</h4>
                       
                        </button>
                    </div>
                    
                </div>

                <div className="content-tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "content  active-content"
                                : "content"
                        }
                    >
                        <div className="row mt-4">
                            <div className="col-md-6 ">
                                <Offers_box/>
                            </div>
                            <div className="col-md-6 ">
                            <Offers_box/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6 ">
                                <Offers_box/>
                            </div>
                            <div className="col-md-6 ">
                            <Offers_box/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6 ">
                                <Offers_box/>
                            </div>
                            <div className="col-md-6 ">
                            <Offers_box/>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "content  active-content"
                                : "content"
                        }
                    >
                        <div className="row mt-4">
                            <div className="col-md-6 ">
                                <Offers_box/>
                            </div>
                            <div className="col-md-6 ">
                            <Offers_box/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6 ">
                                <Offers_box/>
                            </div>
                            <div className="col-md-6 ">
                            <Offers_box/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6 ">
                                <Offers_box/>
                            </div>
                            <div className="col-md-6 ">
                            <Offers_box/>
                            </div>
                        </div>
                    </div>
                </div>

                <LoadMoreBTN/>
            </div>
        </section>
    );
}

export default In_Out;
