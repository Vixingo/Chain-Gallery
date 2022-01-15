import React from 'react'
import Dash_Overview from './components/Dash_Overview'
import MainNavLogged from './components/MainNavLogged'
import Offers from './components/Offers'
import Userfooter from './components/Userfooter'

function Dashboard() {
    return (
        <>
            <MainNavLogged/>
            <Dash_Overview/>
            <Offers/>
            <Userfooter/>
        </>
    )
}

export default Dashboard
