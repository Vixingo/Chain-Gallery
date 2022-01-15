import React from 'react'
import Second_work_card from './Second_work_card'
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
function MakeOfferModal_3() {
    return (
        <>
            <section className="mom_1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" style={{
                            padding: "50px 100px"
                        }}>
                            <Second_work_card/>
                        </div>
                        <div className="col-lg-6 "  style={{
                        padding: "50px 100px ",
                        }}>
                            <h4 className="text-center fw-light mt-5 pt-4">You are offering</h4>
                            <h2 className="text-center fw-light mb-3 ">2.10 ETH</h2>
                            

                            <div className="d-flex justify-content-center" >
                                <Button  data-bs-toggle="modal" data-bs-dismiss="modal" href="#exampleModalToggle4"
                                variant="contained"
                                className="font-weight-light mt-4 "
                                style={{
                                    textAlign: "center",
                                    backgroundColor: "#4737FF",
                                    color: "#fff",
                                    border: "1px solid #red",
                                    padding: "8px 60px",
                                    borderRadius: 0,
                                    letterSpacing: "2px",
                                    boxShadow: " 0 0 1px 5px #A3B9FF",
                                    webkitBoxShadow: " 0 0 1px 5px #A3B9FF",
                                }}
                            >
                                Confirm Offer
                            </Button>
                                </div>
                            <div className="d-flex justify-content-center" >
                                <Button  data-bs-dismiss="modal" 
                                variant="contained"
                                className="font-weight-light mt-4 mb-4"
                                style={{
                                    textAlign: "center",
                                    backgroundColor: "#ffffff",
                                    color: "#4032E5",
                                    border: "1px solid #4032E5",
                                    padding: "8px 60px",
                                    borderRadius: 0,
                                    width: "256px",
                                    letterSpacing: "2px",
                                }}
                            >
                                Cancel Offer
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}

export default MakeOfferModal_3
