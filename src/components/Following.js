import React from 'react'
import Following_btn from './Following_btn'
import Mini_artistname from './Mini_artistname'
function Following() {
    return (
        <>
            <div className="d-flex justify-content-between my-5">
            <Mini_artistname/>
            <Following_btn/>
            </div>
        </>
    )
}

export default Following
