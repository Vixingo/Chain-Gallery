import React from 'react'
import styled from "styled-components"
function Clients_brand() {
    return (

    
            <Clients>
            <div className="container">
            <ul>
                <li><img src="/img/xiaomi.png"/></li>
                <li><img src="/img/tinder.png"/></li>
                <li><img src="/img/apple.png"/></li>
                <li><img src="/img/nike.png"/></li>
                <li><img src="/img/amd.png"/></li>
            </ul>
            </div>
        </Clients> 
   
    )
}

export default Clients_brand

const Clients =styled.div`
    padding:20px 0 120px 0;
    background-color: #fafafa;

    ul{
        display: flex;
        list-style-type: none;
        justify-content: space-around;  
        flex-wrap:wrap;
        li{
            margin-bottom:25px;  
            margin-left:10px;
            margin-right:10px;
        }
        }
    

`
