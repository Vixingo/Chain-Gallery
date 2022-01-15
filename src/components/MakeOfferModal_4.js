import React from 'react'
import Primary_work_card from "./Primary_work_card";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

function MakeOfferModal_4() {
    return (
        <>
            <section className="mom_1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" style={{
                            padding: "50px 100px"
                        }}>
                            <Primary_work_card/>
                        </div>
                        <div className="col-lg-6 "  style={{
                        padding: "50px 100px ",
                        }}>
                            <h4 className="text-center fw-light mt-5 pt-4">Your offer of</h4>
                            <h2 className="text-center fw-light mb-3 ">2.10 ETH</h2>
                            <h6 className="text-center my-4">to this artwork has been posted.</h6>
                            <h6 className="text-center "
                            style={{ 
                                color: "#4032E5",
                                }}>The 24-hour auction for this </h6>
                            <h6 className="text-center" style={{ 
                                color: "#4032E5",
                                }}>artwork has started!</h6>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}

export default MakeOfferModal_4
