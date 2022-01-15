import React from 'react'
import SearchIcon from '@material-ui/icons/Search'


function Landingnav  () {
    return (
    
        <div className= "header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light mt-3">
                    <a className="navbar-brand" href="./"><img src="/img/Chain.Gallery.png"/></a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><SearchIcon/></a>
                            </li>
                        </ul>   
                    </div>
                    <div className="text-right top_right_div">
                        <img src="/img/menu_icon.png"/>
                        <img src="/img/Dark-Light.png" className="theme_changer" />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Landingnav;
