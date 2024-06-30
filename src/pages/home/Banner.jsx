import bannerImg from '/images/banner/banner.svg'
import Button from '../../components/Button'
import { FaShoppingBag } from 'react-icons/fa'

function Banner() {
    return (

        <div className='w-full bg-bgLightmode'>
            <div className='
           lg:h-dvh container pb-12 lg:px-20 flex flex-col-reverse md:flex-row md:justify-between md:items-center md:h-auto pt-[110px]'>
                <div className='w-full md:w-1/2 block'>
                    <h1 className='section-tittle-light'>Collections</h1>
                    <p className='section-parag-light mt-3 capitalize'>you can explore ans shop many differnt collection
                        from various barands here</p>
                    <a href="">
                        <Button style="bg-blackColor w-fit h-fit px-3 py-2 rounded-md mt-3 hover:bg-accentColor duration-200 cursor-pointer">
                            <p className='section-parag-dark flex gap-2 items-center capitalize'><FaShoppingBag className='h-4 w-4' />shop now</p>
                        </Button>
                    </a>
                </div>
                <div classsName='w-1/2'>
                    <img src={bannerImg} alt="banner" title="banner" className='w-full h-[470px]' />
                </div>
            </div>
        </div>
    )
}

export default Banner
