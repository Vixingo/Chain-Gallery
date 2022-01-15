import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';



function Servicebottomcarousel () {
    return (
<>
        <div className= "service_bottom">
            <div className="container">
            <OwlCarousel className='owl-theme' 
            loop margin={10} 
            nav
            autoplay 
            autoplayTimeout= "2000"
            navText ={ ['<img src="/img/Arrow_left.png"/> &nbsp;&nbsp;&nbsp;&nbsp;' , '&nbsp;<img src="/img/Arrow_right.png"/>']}
            items ="1.5"
            
            >
                <div className='item'>
                    <img src="/img/car_img_1.png" />
                </div>
                <div className='item'>
                <img src="/img/car_img_2.png" />
                </div>
                
            </OwlCarousel>
            

            



            </div>     
        </div>

</>
    )
}

export default Servicebottomcarousel;
