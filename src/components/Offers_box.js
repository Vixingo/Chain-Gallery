import React from 'react'

function Offers_box() {
    return (
        <>
            <div className="row ">
                <div className="col-md-5 ">
                <div className="offer_wraper position-relative h-100">
                    <div className="offer_user d-flex align-items-center">
                        <img src="/img/artist.png" alt=""  className="m-0" style={{ width: "41px", height: "41px"}}/>
                        <div className="mx-2">
                            <h6 className="fw-light mb-1">Offered by</h6>
                            <h6>@artistname</h6>
                        </div>
                    </div>
                    <div className="offer_cost mt-3">
                        <h3 className="fw-light ">0.000 ETH</h3>
                        <h6 className="pb-3"> $0,000.00</h6>
                        <span className="position-absolute bottom-0" style={{fontSize:"12px", fontWeight: "300"}}>42 minutes ago</span>
                    </div>
                </div>
                </div>
                <div className="col-md-7">
                    <div className="w-100">
                        <img src="/img/nothing.png" className="m-0" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers_box
