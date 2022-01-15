import React from 'react'
import ActivityGallery from './components/ActivityGallery'
import ActivityName from './components/ActivityName'
import LoadMoreBTN from './components/LoadMoreBTN'
import MainNav from './components/MainNav'
import Userfooter from './components/Userfooter'

function ActivityPage() {
    return (
        <>  
        <MainNav/>
        <ActivityName/>
        <ActivityGallery/>
        <LoadMoreBTN/>
        <Userfooter/>
        </>
    )
}

export default ActivityPage

