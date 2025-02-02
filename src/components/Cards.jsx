import { Link } from 'react-router-dom'

const Cards = ({ products }) => {
    return (
        <div className='container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-3 mt-8'>
            {products && products.length > 0 ? (
                products.map((item) => {
                    return (
                        <div key={item.id
                        } className='rounded-md border border-gray-200 p-2 hover:scale-105 duration-150 cursor-pointer bg-whiteColor lg:w-[250px]'>
                            <Link rel="stylesheet" to={`/shop/${item.id}`}>
                                <img src={item.image} alt="" className='w-full' />
                                <h4 className='mt-2 h4 text-black font-semibold capitalize'>{item.title}</h4>
                                <div className='flex justify-between'>
                                    <p className='section-parag-light'>
                                        {item.category}
                                    </p>
                                    <h4 className='h4 text-accentColor font-normal capitalize'>${item.price}</h4>
                                </div>
                            </Link>
                        </div>
                    )
                })
            ) : (
                <p className='w-full text-red-500 p-1 italic'>Product is empty...........</p>
            )}
        </div>
    )
}

export default Cards