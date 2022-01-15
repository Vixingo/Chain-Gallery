import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Reg_Nav() {
    return (
        <>
<section className="reg_nav bg-white" 
        style={{
            borderBottomStyle: 'solid',
            borderBottomColor: '#ededed',
            borderBottomWidth: '3px'
        }}>
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light pb-3 pt-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./"><img src="/img/Chain.Gallery.png"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto float-right text-right">
                        <li className="nav-item" >
                        <Link to="/Sign_in" style={{color: "unset", textDecoration: 'none' }}> <Button className="mt-3" variant="outlined" style={{
                            borderRadius: "0",
                            borderColor: "#4032E5",
                            color: "#4032E5",
                            fontWeight: "400",
                            padding: "7px 50px"

                        }}>
        SIGN IN
      </Button> </Link>                            
                        </li>
        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</section> 
        </>
    )
}

export default Reg_Nav
