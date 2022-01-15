import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

function MainNavLogged() {
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
                        <a className="nav-link me-3" style={{color:'black'}}>

                        <div className="dropdown">
                        <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <img src="/img/artist.png" alt="" style={{width: "31px"}} />
                            <img src="/img/expend.png" alt="" className="ms-2" /></button>
                                <ul className="dropdown-menu dropdown-menu-end position-absolute" aria-labelledby="dropdownMenuButton1">
                                <div className="over_user d-flex align-items-center" style={{ width: "275px"}}>
                                    <img src="/img/artist.png" alt="" className="p-1 ms-1 " style={{width: "90px", height: "90px" }}/>
                                    <div className="over_user_detail ms-2   ">
                                        <h3 style={{fontWeight:"300"}}>User Name</h3>
                                        <h6>@username</h6>
                                    </div>
                                </div>
                                    <li className="mt-3 ms-2"> <Link to="/Userproflie" style={{color: "unset", textDecoration: 'none' }}> <a className="dropdown-item" href="#"><h6 className="my-1">Profile</h6></a></Link></li>
                                    <li className=" ms-2"><Link to="/Dashboard" style={{color: "unset", textDecoration: 'none' }}> <a className="dropdown-item" href="#"><h6 className="my-1">Dashboard</h6></a></Link></li>

                                    <li className=" ms-2"><Link to="/Setting" style={{color: "unset", textDecoration: 'none' }}> <a className="dropdown-item" href="#"><h6 className="my-1">Setting</h6></a></Link></li>
                                    <br/>
                                    <li className=" ms-2"><a className="dropdown-item" href="#"><h6 className="my-1">Logout</h6></a></li>
                                </ul>
                        </div>
                        </a>

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

export default MainNavLogged
