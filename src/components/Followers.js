import React from 'react'
import Mini_artistname from './Mini_artistname'
import Followers_btn from './Followers_btn'
function Followers() {
    return (
        <>
           <div className="d-flex justify-content-between my-5">
           <Mini_artistname/>
            <Followers_btn/>
           </div>
        </>
    )
}

export default Followers
