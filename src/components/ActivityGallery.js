import React from 'react'
import ActivityBox from './ActivityBox'
import ActivityBox2 from './ActivityBox2'
import ActivityBox3 from './ActivityBox3'
function ActivityGallery() {
    return (
        <>
            <section className="activity_gallery bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ActivityBox/>
                        </div>
                        <div className="col-md-4">
                            <ActivityBox2/>
                        </div>
                        <div className="col-md-4">
                            <ActivityBox3/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ActivityBox/>
                        </div>
                        <div className="col-md-4">
                            <ActivityBox2/>
                        </div>
                        <div className="col-md-4">
                            <ActivityBox3/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ActivityBox/>
                        </div>
                        <div className="col-md-4">
                            <ActivityBox2/>
                        </div>
                        <div className="col-md-4">
                            <ActivityBox3/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ActivityBox/>
                        </div>
                        <div className="col-md-4">
                            <ActivityBox2/>
                        </div>
                        <div className="col-md-4">
                            <ActivityBox3/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ActivityGallery
