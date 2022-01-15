import React from 'react'
import Filter from './components/Filter'
import MainNav from './components/MainNav'
import MarketGallery from './components/MarketGallery'
import MarketName from './components/MarketName'
import Userfooter from './components/Userfooter'

function MarketPage() {
    return (
        <>
        <MainNav/>
        <MarketName/>
        <Filter/>
        <MarketGallery/>
        <Userfooter/>
        </>
    )
}

export default MarketPage
