import React from 'react'
import styled from 'styled-components'



function Work() {


    return (
        <div className="Work">
            <div className="container">
            <h6>— Hot This Week</h6>
                <div class="row">
                    <div className="col-md-7">
                        
                        <h1>Discover more works </h1>
                    </div>
                    
                    <div className="col-md-5">
                        <Nav_ul id="myDIV">
                    

                            <li>
                                <a className ="active">All</a>
                            </li>
                            <li><a>hackatao</a></li>
                            <li><a>pak</a></li>
                            <li><a>fewocious</a></li>
                            <li><a>3lau</a></li> 
                        </Nav_ul>
                    </div>
                </div>   
                
                
            </div>    
        </div>
    )
}

export default Work;

const Nav_ul = styled.ul`
    display: flex;
    text-transform: uppercase;
    opacity: 70%;
    cursor: pointer;

    
    
    li{
    font-size: 10px;
    margin: 15px;
        a{
            color:#707070;
            text-decoration:none;     
            
            
        }
        .active{
            color:#1434E1;
            font-weight: 700;
        }

    }
`