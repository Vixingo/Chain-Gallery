import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Primary_work_card from "./Primary_work_card";
import Second_work_card from "./Second_work_card";
import Third_work_card from "./Third_work_card";
function TrendingTags() {
    return (
        <>
            <section className="trending_tags mt-5  pb-5 ">
                <div className="container">
                <h6 style={{
                            fontSize:'12px',
                            fontWeight: '300',
                            color: '#707070',
                            letterSpacing : '2px',
                            textTransform: 'uppercase'
                    }}>Trending tags</h6>


{/* one */}

                    <h1 className="mb-4" style={{
                        fontWeight:'300'
                    }}>#abstract</h1>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={10}
                        nav
                        autoplay
                        autoplayTimeout="2000"
                        navText={[
                            '<img src="/img/Arrow_left.png"/> &nbsp;&nbsp;&nbsp;&nbsp;',
                            '&nbsp;<img src="/img/Arrow_right.png"/>',
                        ]}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            600: {
                                items: 3,
                            },
                            1000: {
                                items: 4,
                            },
                        }}
                        >
                        <div className="item">
                            <Primary_work_card />
                        </div>
                        <div className="item">
                            <Primary_work_card />
                        </div>
                        <div className="item">
                            <Third_work_card />
                        </div>
                        <div className="item">
                            <Second_work_card />
                        </div>
                        <div className="item">
                            <Primary_work_card />
                        </div>
                    </OwlCarousel>
{/* two  */}

                    <h1 className="mb-4 mt-5 pt-5" style={{
                        fontWeight:'300'
                    }}>#animated</h1>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={10}
                        // nav
                        autoplay
                        autoplayTimeout="2000"
                        navText={[
                            '<img src="/img/Arrow_left.png"/> &nbsp;&nbsp;&nbsp;&nbsp;',
                            '&nbsp;<img src="/img/Arrow_right.png"/>',
                        ]}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            600: {
                                items: 3,
                            },
                            1000: {
                                items: 4,
                            },
                        }}
                        >
                        <div className="item">
                            <Primary_work_card />
                        </div>
                        <div className="item">
                            <Primary_work_card />
                        </div>
                        <div className="item">
                            <Second_work_card />
                        </div>
                        <div className="item">
                            <Third_work_card />
                        </div>
                        <div className="item">
                            <Primary_work_card />
                        </div>
                    </OwlCarousel>
{/* three  */}

                    <h1 className="mb-4 mt-5 pt-5" style={{
                        fontWeight:'300'
                    }}>#surrealism</h1>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={10}
                        // nav
                        autoplay
                        autoplayTimeout="2000"
                        navText={[
                            '<img src="/img/Arrow_left.png"/> &nbsp;&nbsp;&nbsp;&nbsp;',
                            '&nbsp;<img src="/img/Arrow_right.png"/>',
                        ]}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            600: {
                                items: 3,
                            },
                            1000: {
                                items: 4,
                            },
                        }}
                        >
                        <div className="item">
                            <Primary_work_card />
                        </div>
                        <div className="item">
                            <Primary_work_card />
                        </div>
                        <div className="item">
                            <Third_work_card /> 
                        </div>
                        <div className="item">
                            <Second_work_card />
                        </div>
                        <div className="item">
                            <Primary_work_card />
                        </div>
                    </OwlCarousel>


                </div>
            </section>
        </>
    )
}

export default TrendingTags
