import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

function Mini_profile() {
    return (
    
            <Profile>
                <div>
                    <Profile_pic src="/img/profile_pic.png" />
                </div>

            <Profile_detail >
            <Link to="/Userproflie" style={{color: "unset"}}><Name>  John Dominic Doe</Name>    </Link>
                                        
                    <Profile_tittle> Co-Founder & CEO </Profile_tittle>
            </Profile_detail>
        </Profile>
    
    )
}

export default Mini_profile

const Profile = styled.div`
    display:flex;
`
const Profile_pic = styled.img`
    border-radius:50%;


`
const Profile_detail= styled.div`
    margin-left:30px;

`
const Name = styled.h5`
    text-decoration:none;
`
const Profile_tittle=styled.p`
`
