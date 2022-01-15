import React from 'react'
import Button from '@material-ui/core/Button'



function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer1">
                <div className="row">
                    <div className="col-lg-7  ">
                        
                        <ul>
                            <li> <img src="/img/Chain.Gallery.png"/></li>
                            <li>lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            <li>Sit Amet</li>
                            <li>Aanean</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 ">
                        <input type="email" className="w-90 float-right" placeholder="Your Email"/>
                    </div>
                    <div className="col-lg-2  ">
                    <Button variant="contained" className="w-100 font-weight-light" style={{
                    backgroundColor: "#4032E5",
                    color:"#ffffff",
                    }}>
                    SEND
                    </Button></div>
                </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="footer2">
                <div className="row">
                    <div className="col-md-8">
                        <ul>
                            <li><a href="#" >Terms</a></li>
                            <li><a href="#">Artists</a></li>
                            <li><a href="#">Buy Art</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                    <div class="footer3">
                        <ul>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-google"></i></li>
                            <li><i class="fab fa-facebook-f"></i></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
