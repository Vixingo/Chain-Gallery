import React from 'react'
import { useState } from "react";




function FilterTab() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="bg-white">
            <div className="container">
                <div className="bloc_holder ">
                    <div className="bloc-tabs">
                        <button
                            className={
                                toggleState === 1
                                    ? "art_tab tabs active-tabs"
                                    : "art_tab tabs "
                            }
                            onClick={() => toggleTab(1)}
                        >
                           All
                        </button>
                        <button
                            className={
                                toggleState === 2
                                    ? "art_tab tabs active-tabs"
                                    : "art_tab tabs"
                            }
                            onClick={() => toggleTab(2)}
                        >
                           Digital NFT
                        </button>
                        <button
                            className={
                                toggleState === 3
                                    ? "art_tab tabs active-tabs"
                                    : "art_tab tabs"
                            }
                            onClick={() => toggleTab(3)}
                        >
                            Duality
                        </button>
                    </div>
                </div>

                {/* <div className="content-tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "content  active-content"
                                : "content"
                        }
                    >
                        * content here if need *
                       
                        
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "content  active-content"
                                : "content"
                        }
                    >
                       *  content here if need *
                    </div>
                    <div
                        className={
                            toggleState === 3
                                ? "content  active-content"
                                : "content"
                        }
                    >
                       *  content here if need *
                    </div>
                </div> */}
            </div>
        </section>
    );
}


export default FilterTab
