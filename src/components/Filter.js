import React from 'react'
import FilterSearch from './FilterSearch'
import FilterSwitch from './FilterSwitch'
import FilterTab from './FilterTab'

function Filter() {
    return (
        <>
            <section className="filter bg-white">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 align-self-center">
                            <FilterTab/>
                        </div>
                        <div className="col-md-4 align-self-center">
                            <FilterSwitch/>
                        </div>
                        <div className="col-md-4  align-self-center">
                            <FilterSearch/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filter
