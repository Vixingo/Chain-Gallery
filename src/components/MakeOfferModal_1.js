import React from 'react'
import Second_work_card from './Second_work_card'
import { Link } from 'react-router-dom';
function MakeOfferModal_1() {
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
                            <h6 className="text-center mb-4">To continue, please pick a wallet to connect to Chain.Gallery</h6>
                            <div className="w-100">
                                <img src="/img/Fortmatic.png" alt="" className="w-100 mb-3 mt-3 " data-bs-toggle="modal" data-bs-dismiss="modal" href="#exampleModalToggle2" />
                            </div>
                            <div className="w-100">
                                <img src="/img/Metamask.png" alt="" className="w-100 mb-3"  data-bs-toggle="modal" data-bs-dismiss="modal" href="#exampleModalToggle2"  />
                            </div>
                            <p className="text-center pb-5 mb-5">New to wallets?
                                    <Link to="/Register" style={{color: "unset", textDecoration: 'none' }}>  <a href="#" style={{
                        color: "#4032E5"
                    }}>  Learn more</a></Link>
                            </p>
                            

                    <p className="text-center">By connecting your wallet, you agree to our <br />  <a href="#" style={{
                        color: "#4032E5"
                    }}>Terms of Use</a> and <a href="#" style={{
                        color: "#4032E5"
                    }}>Privacy Policy .</a>
                    </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MakeOfferModal_1
