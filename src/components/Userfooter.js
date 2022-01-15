import React from 'react'
import SearchIcon from '@material-ui/icons/Search'



function Userfooter() {
    return (
        <div className="user_footer bg-white">
            <div className="container">
                <div className="user_footer1">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="footer_logo">
                           <a href="/"> <img src="/img/Chain.Gallery.png"/></a>
                        </div>

                    </div>
                    <div className="col-md-9 ">
                        <ul className="footer_nav">
                            <li> <a className=" me-2" href="#" style={{color:'black', textDecoration: 'none'}}><SearchIcon/> Gallery</a></li>
                            <li><a className=" me-2" href="#" style={{color:'black', textDecoration: 'none'}}>Market</a></li>
                            <li> <a className=" me-2" href="#" style={{color:'black', textDecoration: 'none'}}>Sell your artwork</a></li>
                            <li> <a className=" me-2" href="#" style={{color:'black', textDecoration: 'none'}}>Activity</a></li>
                            <li> <a  href="#" style={{color:'black', textDecoration: 'none'}}>Login</a></li>
                        </ul>
                    </div>
                    
                </div>
                </div>
                <hr/>
                <br/>
                
                <div className="row">
                
                    <div className="col-md-10">
                    
                        <ul className="user_footer2">
                            <li><a href="#" >© 2021 Chain Gallery Inc.</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                    
                        <ul className="user_footer3">
                            <li><i class="fab fa-discord"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                        
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
    )
}

export default Userfooter;
