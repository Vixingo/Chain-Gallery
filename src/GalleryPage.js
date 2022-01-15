import React from 'react'
import Featuredcreators from './components/Featuredcreators'
import Filter from './components/Filter'
import GalleryName from './components/GalleryName'
import GalleryStock from './components/GalleryStock'
import MainNav from './components/MainNav'
import Userfooter from './components/Userfooter'
import './css/GalleryPage.css'
function GalleryPage() {
    return (
        <>
            <MainNav/>
            <GalleryName/>
            <Filter/>
            <Featuredcreators/>
            <GalleryStock/>
            <Userfooter/>
        </>
    )
}

export default GalleryPage
