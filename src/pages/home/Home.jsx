import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collection from './Collection'
import Bestsellers from './Bestsellers'
function Home() {
    return (
        <>
            <div>
                <Banner />
                <Category />
                <Products />
                <Collection />
                <Bestsellers />
            </div>

        </>
    )
}

export default Home
