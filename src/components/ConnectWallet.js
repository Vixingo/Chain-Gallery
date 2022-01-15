import React from 'react'

function ConnectWallet() {
    return (
        <>  
            <section className="connect_wallet mt-sm-5">
                <div className="container px-sm-5 pt-5">
                    <h1 className=" mb-4" style={{
                        fontWeight:"300"
                    }}>Connect your wallet</h1>
                    <h5 className="mb-3">Pick a wallet to connect to Chain.Gallery</h5>
                    <div className="wallet_img w-100 mt-5">
                        <a href="#"> <img src="/img/Metamask.png" alt="" className="w-100" /></a>
                    </div>
                    <div className="wallet_img  w-100 mt-3 mb-4">
                        <a href="#"><img src="/img/Fortmatic.png" alt="" className="w-100 "  /></a>
                    </div>
                    <p className="mt-3 mb-4">New to wallets? <a href="#" style={{
                        color: "#4032E5"
                    }}>Learn more</a></p>
                    <p>By connecting your wallet, you agree to our <a href="#" style={{
                        color: "#4032E5"
                    }}>Terms of Use</a> and <a href="#" style={{
                        color: "#4032E5"
                    }}>Privacy Policy .</a>
                    </p>
                </div>
            </section>
        </>
    )
}

export default ConnectWallet
