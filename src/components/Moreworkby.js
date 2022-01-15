import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Primary_work_card from "./Primary_work_card";
import Second_work_card from "./Second_work_card";
import Third_work_card from "./Third_work_card";

function Moreworkby() {
    return (
        <>
            <section className="more_work_by bg-white">
                <div className="container">
                    <h1 className="pb-4 pt-4">More work by @artistname</h1>
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
                            <Second_work_card />
                        </div>
                        <div className="item">
                            <Third_work_card />
                        </div>
                        <div className="item">
                            <Primary_work_card />
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </>
    );
}

export default Moreworkby;
