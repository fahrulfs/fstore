import { Link } from 'react-router-dom'
import { FaEye, FaShoppingCart } from "react-icons/fa"
import Button from './Button'
const Cards = ({ products }) => {
    return (


        <div className='container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-3 mt-8'>
            {products && products.length > 0 ? (
                products.map((item) => {
                    return (
                        <div key={item.id
                        } className='relative rounded-md border border-gray-200 p-2 hover:scale-105 duration-150 cursor-pointer bg-whiteColor lg:w-[250px]'>
                            <Link rel="stylesheet" to={`/shop/${item.id}`}>
                                <img src={item.image} alt="" className='w-full' />
                                <h4 className='mt-2 h4 text-black font-semibold capitalize'>{item.title}</h4>
                                <div className='flex justify-between'>
                                    <p className='section-parag-light'>
                                        {item.category}
                                    </p>
                                    <h4 className='h4 text-accentColor font-normal capitalize'>${item.price}</h4>
                                </div>
                                <div className='absolute inset-0 flex gap-2 items-end pb-16 pe-3 justify-end bg-blackColor bg-opacity-10 opacity-0 lg:hover:opacity-90 transition-opacity duration-300 rounded-md'>
                                    <Link to={`/shop/${item.id}`}>
                                        <Button style='bg-accentColor text-white p-2 rounded-md'><FaEye /></Button>
                                    </Link>
                                    <Link to={`/hai/${item.id}`}>
                                        <Button style='bg-accentColor text-white p-2  rounded-md flex gap-2 items-center justify-center'><FaShoppingCart />
                                            <span className='text-xs'>Add To Cart</span></Button>
                                    </Link>
                                </div>
                            </Link>


                        </div>
                    )
                })
            ) : (
                <p>No items available!</p>
            )}
        </div>
    )
}

export default Cards
