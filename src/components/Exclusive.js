import React from 'react'

function Exclusive() {
    return (
        <>
            <section className="exclusive bg-white">
                <div className="container" style={{
                    maxWidth: "960px"
                }}>
                    <div className="row">
                        <div className="col-md-6 mb-3 d-flex">
                            <div className="exclusive_img">
                                <img src="/img/Nothing_3.png" alt="" width="108px" height="82px" />
                            </div>
                            <div className="align-self-center px-3">
                                <p className="m-0" style={{
                                    color: '#707070',
                                    fontWeight:'300'
                                }}>Exclusive on Chain.Gallery</p>
                                <h5>Collect 2021</h5>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3 d-flex">
                            <div className="exclusive_img">
                                <img src="/img/Nothing_3.png" alt="" width="108px" height="82px" />
                            </div>
                            <div className="align-self-center px-3">
                                <p className="m-0" style={{
                                    color: '#707070',
                                    fontWeight: '300'
                                }}>Featured Artworks Now</p>
                                <h5>Exclusively on Chain.Gallery</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Exclusive
