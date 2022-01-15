import React from 'react'

function Featuredcreators() {
    return (
        <>
            <section className="featured_creator" style={{
                backgroundColor:"#f4f4f4"
            }}>
                <div className="container pt-5 pb-5">
                    <h3 style={{
                        fontWeight:"300"
                    }}>Featured creators</h3>
                    <div className="artist_holder d-flex justify-content-between mt-4 flex-wrap">
                            <div className="artist_img text-center">
                                <img src="/img/artist.png" alt="" />
                                <p className="mt-3">Artist 1</p>
                            </div>
                            <div className="artist_img text-center">
                                <img src="/img/artist.png" alt="" />
                                <p className="mt-3">Artist 2</p>
                            </div>
                            <div className="artist_img text-center">
                                <img src="/img/artist.png" alt="" />
                                <p className="mt-3">Artist 3</p>
                            </div>
                            <div className="artist_img text-center">
                                <img src="/img/artist.png" alt="" />
                                <p className="mt-3">Artist 4</p>
                            </div>
                            <div className="artist_img text-center">
                                <img src="/img/artist.png" alt="" />
                                <p className="mt-3">Artist 5</p>
                            </div>
                            <div className="artist_img text-center">
                                <img src="/img/artist.png" alt="" />
                                <p className="mt-3">Artist 6</p>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featuredcreators
