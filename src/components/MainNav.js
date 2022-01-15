import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

function MainNav() {
    return (
        <>
        <section className="main_nav bg-white" 
        style={{
            borderBottomStyle: 'solid',
            borderBottomColor: '#ededed',
            borderBottomWidth: '3px'
        }}>
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light pb-3 pt-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./"><img src="/img/Chain.Gallery.png"/></a>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="/img/menu_icon.png"/>
                        </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto float-right text-right">
                        <li className="nav-item" >
                        <Link to="/Gallery" style={{color: "unset", textDecoration: 'none' }}>   <a className="nav-link me-3" href="#" style={{color:'black' }}><SearchIcon/> Gallery</a> </Link>                            
                        </li>
                        <li className="nav-item">                       
                        <Link to="/Market" style={{color: "unset", textDecoration: 'none' }}> <a className="nav-link me-3" href="#" style={{color:'black'}}>Market</a> </Link>                            
                        </li>
                        
                        <li className="nav-item">    
                        <Link to="/sell_your_artwork" style={{color: "unset", textDecoration: 'none' }}> <a className="nav-link me-3" href="#" style={{color:'black'}}>Sell your artwork</a></Link>                     
                            
                        </li>
                        <li className="nav-item">
                        <Link to="/Activity" style={{color: "unset", textDecoration: 'none' }}> <a className="nav-link me-3" href="#" style={{color:'black'}}>Activity</a></Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="/Sign_in" style={{color: "unset", textDecoration: 'none' }}> <a className="nav-link me-3" href="#" style={{color:'black'}}>Login</a></Link>
                            
                        </li>
        
                    </ul>
            </div>
    </div>
</nav>
                {/*  
                
                
                 <nav className="navbar navbar-expand-lg navbar-light mt-3">
                    <a className="navbar-brand" href="#"><img src="/img/Chain.Gallery.png"/></a>
                    * <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="/img/menu_icon.png"/>
                    </button> 

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><SearchIcon/></a>
                            </li>
                        </ul>   
                    </div>
                </nav> */}
                </div>
        </section> 
        </>
    )
}

export default MainNav
