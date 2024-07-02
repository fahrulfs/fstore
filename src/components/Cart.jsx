import { useEffect, useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Button from './Button'

function Cart({ cartItems }) {

    return (
        <div className='container left-[50%] -translate-x-1/2 absolute top-[60px] px-6 lg:-right-[500px] md:-right-[300px] lg:w-88 md:w-80 bg-white p-4 shadow-md rounded-md h-fit z-50'>
            <h3 className='h3'>Your Cart</h3>
            <ul className='mt-3'>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <div className='flex justify-between items-center gap-2'>
                            <div>
                                <img src={item.image} alt="" className='w-14 h-20' />
                            </div>
                            <p className='section-parag-light'>

                                {item.title} x({item.z})
                            </p>
                            <p className='section-parag-light'>
                                ${item.price}
                            </p>
                        </div>
                        <hr className='my-2' />
                    </li>
                ))}
                <p className='section-parag-light'>Total ${ }</p>
                <Button style="flex justify-center items-center gap-2 w-full py-3 px-4 bg-accentColor outline-none text-white text-md font-bold rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-blackColor hover:text-whiteColor cursor-pointer mt-5 ">
                    <span>Checkout</span>
                    <FaArrowAltCircleRight />
                </Button>
            </ul>
        </div>
    )
}

export default Cart;