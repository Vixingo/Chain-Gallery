import { useState } from "react";
import "../css/Tabs.css";
import LoadMoreBTN from "./LoadMoreBTN";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="bg-white">
            <div className="container">
                <div className="bloc_holder">
                    <div className="bloc-tabs">
                        <button className={ toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}> Creations
                        </button>
                        <button
                            className={ toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}> Collection
                        </button>
                    </div>
                    <div className="bloc-text">
                        <p>
                            Showing <b>8</b> of <b>135 artworks</b>
                        </p>
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
                        <div className="row">
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
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
                        <div className="row">
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src="/img/nothing.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <LoadMoreBTN/>
            </div>
        </section>
    );
}

export default Tabs;
