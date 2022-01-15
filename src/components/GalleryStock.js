import React from 'react'
import LoadMoreBTN from './LoadMoreBTN'

function GalleryStock() {
    return (
        <>
            <section className="gallery_stock bg-white pt-5" >
                <div className="container">
                        <div className="row">
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src="/img/nothing.png" alt="" />
                                </div>
                        </div>
                        <LoadMoreBTN/>
                </div>
            </section>
        </>
    )
}

export default GalleryStock
