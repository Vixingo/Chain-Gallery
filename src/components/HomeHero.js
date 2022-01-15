import React from 'react'
import Button from "@material-ui/core/Button";
function HomeHero() {
    return (
        <>
        <div className="hero">
            <div className="container">
                <div class="row">
                    <div className="col-md-6">
                        <h1 className="mb-3">Digital NFT artworks</h1>
                        <p className="pe-5">creating the digital accoutrements and personalization that will underscore and foreground these amazing digital artworks.</p>
                        <Button
                                variant="contained"
                                className="font-weight-light mt-5 mb-5"
                                style={{
                                    backgroundColor: "#4737FF",
                                    color: "#fff",
                                    border: "1px solid #red",
                                    padding: "10px 50px",
                                    borderRadius: 0,
                                    letterSpacing: "2px",
                                    boxShadow: " 0 0 1px 5px #A3B9FF",
                                    webkitBoxShadow: " 0 0 1px 5px #A3B9FF",
                                }}
                            >
                                WATCH GALLERY
                            </Button>
                    </div>
                    <div className="col-md-6">
                        <div className="hero_imgs">
                            <img src="/img/hero_right.png"/>
                        </div>
                    </div>
                </div>   
            </div>    
        </div>
        </>
    )
}

export default HomeHero
