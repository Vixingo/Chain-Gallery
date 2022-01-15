import React from 'react'

function Setting_Wallet_Connected() {
    return (
        <>
            <h1 className=" mb-4" style={{
                        fontWeight:"300"
                        }}>
                        Wallet balance
                        </h1>

                    <h1 className=" mb-4" style={{
                        fontWeight:"300",
                        color: "#4032E5"
                    }}>0.00 ETH</h1>

                    <p className="mb-3">You can always add more later by coming back to this page.</p>


            <div className="row">
            <h2 className="fw-light mt-5">Connected wallet</h2>
                <div className="col-sm-7">
                    <div className="wallet_img w-100 mt-3">
                        <a href="#"> <img src="/img/Metamask.png" alt="" className="w-100" /></a>
                    </div>
                    <div className="wallet_img  w-100 mt-3 mb-1">
                        <a href="#"><img src="/img/Fortmatic.png" alt="" className="w-100 "  /></a>
                    </div>
                </div>
                <div className="col-sm-5"></div>
            </div>
                    <p className=" mb-4">New to Ethereum? <a href="#" style={{
                        color: "#4032E5"
                    }}> Learn more about wallets</a></p>
        </>
    )
}

export default Setting_Wallet_Connected
