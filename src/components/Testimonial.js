import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'animate.css';

function Testimonial () {
    return (
<>
        <div className= "testimonial">
            <div className="container">
            <OwlCarousel className='owl-theme' 
            loop margin={10} 
            nav
            // animateOut= 'slideOutDown' need to use in className later
            // animateIn= 'flipInX'
            autoplay 
            autoplayTimeout= "2000"
            navText ={ ['<img src="/img/Arrow_left.png"/> &nbsp;&nbsp;&nbsp;&nbsp;' , '&nbsp;<img src="/img/Arrow_right.png"/>']}
            items ="1">
                <div className='item'>
                <div className="row">
                    <div className="col-md-7">
                    <h6>— Testimonials</h6>
                    <h1>"Professionals in their craft! All products were super great with strong attention to details, and overall vibe"</h1>

                    <h5>Sabrina Palermo</h5>
                    <p>Manager at Cryptocraft</p>
                    </div>
                    <div className="col-md-5">
                        <img src="/img/test_right.png"/>
                    </div>
                </div>
                </div>


                <div className='item'>
                <div className="row">
                    <div className="col-md-7">
                    <h6>— Testimonials</h6>
                    <h1>"Professionals in their craft! All products were super great with strong attention to details, and overall vibe"</h1>

                    <h5>Sabrina Palermo</h5>
                    <p>Manager at Cryptocraft</p>
                    </div>
                    <div className="col-md-5">
                        <img src="/img/test_right.png"/>
                    </div>
                </div>
                </div>
                
                
            </OwlCarousel>
            






            </div>     
        </div>

</>
    )
}

export default Testimonial;
