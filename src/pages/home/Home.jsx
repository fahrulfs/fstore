import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collection from './Collection'
import Bestsellers from './Bestsellers'
import Newsletter from './Newsletter'

function Home() {
    return (
        <>
            <div className='home'>
                <Banner />
                <Category />
                <Products />
                <Collection />
                <Bestsellers />
                <Newsletter />
            </div>

        </>
    )
}

export default Home
