import { useState } from "react";
import "../css/Setting_tabs.css";
import Upload_mint from "./Upload_mint";
import Upload_NFT from "./Upload_NFT";
import Upload_list from "./Upload_list";
function Upload_tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="bg-white pt-5 ">
            <div className="container p-sm-5">
                <div className="row">
                    <div className="col-md-2">
                        <h5 className="mb-4">Sell Artwork</h5>
                        <div className="setting_holder mb-5">
                            <div className="setting_tabs">
                                <button
                                    className={
                                        toggleState === 1
                                            ? "set_tabs active-setting-tabs"
                                            : "set_tabs"
                                    }
                                    onClick={() => toggleTab(1)}
                                >
                                    {" "}
                                    Upload
                                </button>

                                <button
                                    className={
                                        toggleState === 2
                                            ? "set_tabs active-setting-tabs"
                                            : "set_tabs"
                                    }
                                    onClick={() => toggleTab(2)}
                                >
                                    {" "}
                                    Mint
                                </button>
                                <button
                                    className={
                                        toggleState === 3
                                            ? "set_tabs active-setting-tabs"
                                            : "set_tabs"
                                    }
                                    onClick={() => toggleTab(3)}
                                >
                                    {" "}
                                    List
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10">
                        <div className="content-tabs">
                            <div
                                className={
                                    toggleState === 1
                                        ? "setting-content  active-setting-content"
                                        : "setting-content"
                                }
                            >
                                <Upload_NFT />
                            </div>

                            <div
                                className={
                                    toggleState === 2
                                        ? "setting-content  active-setting-content"
                                        : "setting-content"
                                }
                            >
                                <Upload_mint />
                            </div>
                            <div
                                className={
                                    toggleState === 3
                                        ? "setting-content  active-setting-content"
                                        : "setting-content"
                                }
                            >
                                <Upload_list />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Upload_tabs;
