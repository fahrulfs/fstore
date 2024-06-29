import React from 'react'
import Banner from './Banner'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import Buton from '../../components/Buton'
function Home() {
    return (
        <>
            <div>
                <Banner />
            </div>

        </>
    )
}

export default Home
