import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collection from './Collection'
import Bestsellers from './Bestsellers'
import Newsletter from './Newsletter'
import Footer from '../../components/Footer'
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
                <Footer />
            </div>

        </>
    )
}

export default Home
