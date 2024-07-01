import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../components/Button';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Bestsellers() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    }, [])
    const bestSeller = products.filter((item) => item.status === "Best Selers")
    return (
        <div className='w-full h-fit mt-10'>
            <div className='container text-center w-full lg:px-32'>
                <h2 className='h2 capitalize text-blackColor'>best seller</h2>
                <p className='section-parag-light mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nobis, corporis doloremque voluptatem sequi perspiciatis</p>
            </div>
            {/* best seller */}
            <div className='container w-full lg:h-[500px] lg:mt-0 mt-5'>

                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 1750,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {bestSeller.map((product) => (


                        <SwiperSlide key={product.id}>
                            <Link rel="stylesheet" to={`/shop/${product.id}`}>
                                <div className='relative rounded-md border border-gray-200 p-2 hover:scale-105 duration-150 cursor-pointer lg:w-[250px]'>

                                    <img src={product.image} alt="" className='w-full' />
                                    <h4 className='mt-2 h4 text-black font-semibold capitalize'>{product.title}</h4>
                                    <div className='flex justify-between'>
                                        <p className='section-parag-light'>
                                            {product.category}
                                        </p>
                                        <h4 className='h4 text-accentColor font-normal capitalize'>${product.price}</h4>
                                    </div>
                                    <div className='hidden absolute inset-0 lg:flex gap-2 items-end pb-16 pe-3 justify-end bg-blackColor bg-opacity-10 opacity-0 lg:hover:opacity-90 transition-opacity duration-300 rounded-md'>
                                        <Link to={`/shop/${product.id}`}>
                                            <Button style='bg-accentColor text-white p-2 rounded-md'><FaEye /></Button>
                                        </Link>
                                        <Link to={`/hai/${product.id}`}>
                                            <Button style='bg-accentColor text-white p-2  rounded-md flex gap-2 items-center justify-center'><FaShoppingCart />
                                                <span className='text-xs'>Add To Cart</span></Button>
                                        </Link>
                                    </div>
                                </div>

                            </Link>
                        </SwiperSlide>
                    )

                    )}

                </Swiper>
            </div>
        </div>
    )
}

export default Bestsellers
