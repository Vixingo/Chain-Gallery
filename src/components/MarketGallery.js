import React from 'react'
import Primary_work_card from './Primary_work_card'
import Second_work_card from './Second_work_card'
import Third_work_card from './Third_work_card'
import LoadMoreBTN from './LoadMoreBTN'
function MarketGallery() {
    return (
        <>
            <section className="market_gallery bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 p-2">
                        <Primary_work_card/>
                        </div>
                        <div className="col-xl-3 p-2">
                        <Second_work_card />
                        </div>
                        <div className="col-xl-3 p-2">
                        <Primary_work_card/>
                        </div>
                        <div className="col-xl-3 p-2">                      
                        <Third_work_card />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 p-2">
                        <Primary_work_card/>
                        </div>
                        <div className="col-xl-3 p-2">
                        <Second_work_card />
                        </div>
                        <div className="col-xl-3 p-2">
                        <Third_work_card />
                        
                        </div>
                        <div className="col-xl-3 p-2">                      
                        <Primary_work_card/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 p-2">
                        <Primary_work_card/>
                        </div>
                        <div className="col-xl-3 p-2">
                        <Second_work_card />
                        </div>
                        <div className="col-xl-3 p-2">
                        <Primary_work_card/>
                        </div>
                        <div className="col-xl-3 p-2">                      
                        <Third_work_card />
                        </div>
                    </div>
                    <LoadMoreBTN />
                </div>
            </section>
        </>
    )
}

export default MarketGallery
