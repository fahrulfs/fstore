import { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaMinus, FaPlus, FaTimes, FaTrash } from 'react-icons/fa'
import Button from './Button'

function Cart({ cartItems, hideCart, increaseQuantity, decreaseQuantity, removeItem }) {
    const [cartState, setCartState] = useState(cartItems);

    useEffect(() => {
        setCartState(cartItems);
    }, [cartItems]);

    const handleIncreaseQuantity = (id) => {
        increaseQuantity(id);
        setCartState(cartState.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price } : item
        ));
    };

    const handleDecreaseQuantity = (id) => {
        decreaseQuantity(id);
        setCartState(cartState.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price } : item
        ));
    };

    const handleRemoveItem = (id) => {
        removeItem(id);
        setCartState(cartState.filter(item => item.id !== id));
    };



    return (
        <div className='fixed h-fit container left-[50%] -translate-x-1/2 top-[60px] px-6 lg:-right-[500px] md:-right-[300px] lg:w-88 md:w-80 bg-white border border-blackColor p-4 shadow-md rounded-md  z-50'>
            <div className='flex justify-between'>
                <h3 className='h3'>Your Cart</h3>
                <FaTimes className='cursor-pointer' onClick={hideCart} />
            </div>
            <ul className='mt-3 overflow-y-scroll h-[450px]'>
                {cartState.map((item, index) => (
                    <li key={index} className=''>
                        <div className='flex justify-between items-center gap-2'>
                            <div>
                                <img src={item.image} alt="" className='w-14 h-20' />
                            </div>
                            <p className='section-parag-light'>

                                {item.title} x({item.quantity})
                            </p>
                            <p className='section-parag-light'>
                                ${item.totalPrice.toFixed(2)}
                            </p>
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <button onClick={() => handleIncreaseQuantity(item.id)} className='border border-blackColor text-blackColor p-1 text-base rounded'><FaPlus /></button>
                            <button onClick={() => handleDecreaseQuantity(item.id)} className='border border-blackColor text-blackColor p-1 text-base rounded'><FaMinus /></button>
                            <button onClick={() => handleRemoveItem(item.id)} className='border border-blackColor text-red-600 p-1 text-base rounded'><FaTrash /></button>
                        </div>
                        <hr className='my-2' />
                    </li>
                ))}
                <li>

                    <div className='flex justify-between'>
                        <p className='section-parag-light'>Total</p>
                        <p className='section-parag-light'>${cartState.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)}</p>
                    </div>
                    <Button style="flex justify-center items-center gap-2 w-full py-3 px-4 bg-accentColor outline-none text-white text-md font-bold rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-blackColor hover:text-whiteColor cursor-pointer mt-5 ">
                        <span>Checkout</span>
                        <FaArrowAltCircleRight />
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default Cart;