import React from 'react'
import Button from "@material-ui/core/Button";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
function Dash_Overview() {
    return (
        <>
            <section className="dash_overview py-5 " style={{backgroundColor: "#F4F4F4"}}>
                <div className="container ">
                    <div className="current_balance d-flex align-items-center justify-content-center mt-5">
                        <h1 style={{fontWeight:"300"}}>0.000 ETH</h1>
                        <h4 className="mx-3">$0.00</h4>
                    </div>
                    <div className="text-center">
                    <Button
                        variant="contained"
                        className="mt-4"
                        style={{
                            fontWeight: "400",
                            backgroundColor: "#ffffff",
                            color: "#4032E5",
                            border: "1px solid #4032E5",
                            width: "284px",
                            height: "39px",
                            borderRadius: 0, 
                            letterSpacing: "2px",
                        }}
                    >
                    <AccountBalanceWalletIcon /> &nbsp; Manage Wallet
                    </Button>
                    </div>



                    <div className="row mt-5">
                        <div className="col-md-4 mb-2">
                            <div className="wh_div bg-white p-5 w-100">
                                    <h4 className="fw-light">0</h4>
                                    <h5 className="fw-light">Total # of sales</h5>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="wh_div bg-white p-5 w-100">
                                    <h4 className="fw-light">0.00 ETH</h4>
                                    <h5 className="fw-light">Total sales value</h5>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="wh_div bg-white p-5 w-100">
                                    <h4 className="fw-light">0.00 ETH</h4>
                                    <h5 className="fw-light">Artists collected</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <div className="wh_div bg-white p-5 w-100">
                                    <h4 className="fw-light">0</h4>
                                    <h5 className="fw-light">Total # of sales</h5>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="wh_div bg-white p-5 w-100">
                                    <h4 className="fw-light">0.00 ETH</h4>
                                    <h5 className="fw-light">Total sales value</h5>
                            </div>
                        </div>
                    
                    </div>
                </div>

            </section>
        </>
    )
}

export default Dash_Overview
