import { useState } from "react";

function Artdetailtab() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="bg-white">
            <div className="container">
                <div className="bloc_holder">
                    <div className="bloc-tabs">
                        <button
                            className={
                                toggleState === 1
                                    ? "art_tab tabs active-tabs"
                                    : "art_tab tabs "
                            }
                            onClick={() => toggleTab(1)}
                        >
                            Basic Informations
                        </button>
                        <button
                            className={
                                toggleState === 2
                                    ? "art_tab tabs active-tabs"
                                    : "art_tab tabs"
                            }
                            onClick={() => toggleTab(2)}
                        >
                            Additional Details
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
                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                            }}
                        >
                            <li className="mb-2">
                                Collector :
                                <h6 className="d-inline"> @Collector name</h6>
                            </li>
                            <li className="mb-2">
                                Edition :<h6 className="d-inline"> 1 of 1</h6>
                            </li>
                            <li className="mb-2">
                                Format :
                                <h6 className="d-inline"> Digital NFT</h6>
                            </li>
                            <li className="mb-2">
                                Subformat :<h6 className="d-inline"> Birth</h6>
                            </li>
                        </ul>
                        <p className="mb-4">
                            Augue aenean turpis diam in nulla ac dignissim
                            morbi. Consequat tortor aliquam sodales tellus
                            nulla. Pellentesque a sapien quam parturient
                            suspendisse a, elementum porttitor. Tempor feugiat
                            diam quis mi cursus.
                        </p>
                        <a href="#" className="text-decoration-none">
                            #consciousness #head #holey #identity #selfportrait
                            #vfx #video
                        </a>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "content  active-content"
                                : "content"
                        }
                    >
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Sit, cupiditate qui dolores veniam ex laborum,
                            omnis nulla quisquam doloremque repellat quia cum
                            sint, labore ipsa architecto suscipit? Deleniti,
                            earum dicta.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Artdetailtab;
