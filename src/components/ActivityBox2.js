import React from 'react'

function ActivityBox() {
    return (
        <>  
            <div className="activity_box w-100 py-2" >
                    <div className="activity_img w-100">
                        <img src="/img/Nothing_3.png" className="w-100" alt="" />
                    </div>
                    <div className="activity_user_porfile d-flex align-items-center py-2"  >
                        <div className="activity_user_left">
                            <img src="/img/profile_demo.png" alt="" />
                        </div>
                        <div className="activity_user_right p-2">
                            <p className="m-0">Listed by <h6 className="d-inline"> @artistname</h6></p>
                            <span style={{
                                fontWeight: 300,
                                fontSize: "12px"
                            }}>42 minutes ago</span>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default ActivityBox
