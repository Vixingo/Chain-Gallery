import React from 'react'

function FeaturedCategories() {
    return (
        <>
            <section className="featured_categories bg-white pt-5 mb-5">
                <div className="container">
                    <h1 className="mt-5 mb-4"
                    style={{
                        fontWeight:'300'
                    }}>Featured Categories</h1>
                    <div className="row">
                        <div className="col-md-4">                     
                            <div className="fea_img w-100">
                                <img src="/img/Nothing_4.png" className="w-100" alt=""/>
                            </div>
                            <h5 className="text-center my-3">#abstract</h5>
                        </div>
                        <div className="col-md-4">
                            <div className="fea_img w-100">
                                <img src="/img/Nothing_4.png" className="w-100" alt="" />
                            </div>
                            <h5 className="text-center my-3">#animated</h5>
                        </div>
                        <div className="col-md-4">
                            <div className="fea_img w-100">
                                <img src="/img/Nothing_4.png" className="w-100" alt="" />
                            </div>
                            <h5 className="text-center my-3">#surrealism</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="fea_img w-100">
                                <img src="/img/Nothing_4.png" className="w-100" alt="" />
                            </div>
                            <h5 className="text-center my-3">#3D</h5>
                        </div>
                        <div className="col-md-4">
                            <div className="fea_img w-100">
                                <img src="/img/Nothing_4.png" className="w-100" alt="" />
                            </div>
                            <h5 className="text-center my-3">#scifi</h5>
                        </div>
                        <div className="col-md-4">
                            <div className="fea_img w-100">
                                <img src="/img/Nothing_4.png" className="w-100" alt="" />
                            </div>
                            <h5 className="text-center my-3">#portrait</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedCategories
