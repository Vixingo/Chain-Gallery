import React from 'react'
import Second_work_card from './Second_work_card'
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
function MakeOfferModal_2() {
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
                            <h1 className="text-center mb-4">Make an offer</h1>
                            <h6 className="text-center mb-4">You must offer at least</h6>
                            <h2 className="text-center fw-light">2.00 ETH</h2>
                            <div className="w-100 d-flex align-items-center" style={{
                                border: "2px solid #DEDEDE"
                            }}>
                                <input type="text" className="w-75 border-0 text-right" style={{
                                    fontSize: "40px",
                                    fontWeight: "400"
                                }}/>
                                <button className="w-25" style={{
                                    backgroundColor: "#F4F4F4",
                                    fontSize: "16px",
                                    height: "60px",  
                                    marginLeft: "4px",
                                    fontWeight: "300"
                                }}>
                                ETH
                                </button>
                            </div> 

                            <h5 className="text-center mt-3 mb-4">$453.84</h5>
                            
                            <div className="w-100 d-flex align-items-center p-3 justify-content-center" style={{
                                    backgroundColor: "#F4F4F4",
                                }}>
                                <p >You have </p>&nbsp;&nbsp; <h5 className="m-0"> 5.67 ETH </h5>&nbsp;&nbsp;<p >in your wallet.</p>
                            </div>

                                <div className="d-flex justify-content-center" >
                                <Button  data-bs-toggle="modal" data-bs-dismiss="modal" href="#exampleModalToggle3"
                                variant="contained"
                                className="font-weight-light mt-4 mb-4"
                                style={{
                                    textAlign: "center",
                                    backgroundColor: "#4737FF",
                                    color: "#fff",
                                    border: "1px solid #red",
                                    padding: "12px 60px",
                                    borderRadius: 0,
                                    letterSpacing: "2px",
                                    boxShadow: " 0 0 1px 5px #A3B9FF",
                                    webkitBoxShadow: " 0 0 1px 5px #A3B9FF",
                                }}
                            
                            >
                                Make an Offer
                            </Button>
                                </div>
                            
                    <p className="text-center mb-2">Your ether, including the marketplace fee, will be escrowed in the smart contract until your offer is accepted, or you withdraw it.</p>
                    <a href="#" className="text-center" style={{
                        color: "#4032E5"
                    }}><p>Learn more how offers work.</p>
                        </a></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MakeOfferModal_2
