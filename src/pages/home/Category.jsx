
const brandLogo = [
    {
        id: 1,
        img: '/images/brand/brand-1.svg'
    },
    {
        id: 2,
        img: '/images/brand/brand-2.svg'
    },
    {
        id: 3,
        img: '/images/brand/brand-3.svg'
    },
    {
        id: 4,
        img: '/images/brand/brand-4.svg'
    }

]

function Category() {
    return (
        <>
            <div className='w-full h-fit mt-12 py-2
        '>
                <div className='container'>
                    <div className='w-full flex flex-wrap justify-between gap-2 items-center'>

                        {brandLogo.map(({ id, img }) => (
                            <img key={id} src={img} className='w-[150px] md:w-[200px] h-full'></img>
                        ))}
                    </div>
                </div>
            </div>


            <div className='w-full container mt-20 grid lg:grid-cols-4 gap-2'>

                <div className='relative transition-all duration-300 row-span-2 col-span-2 cursor-pointer'>
                    <img src="/images/product-grid/product-grid-1.png" alt="" className='w-full h-full' />
                    <div className='absolute inset-0 bg-gray-200 opacity-0 lg:hover:opacity-50 transition-opacity duration-300'><h2 className="h2 text-black uppercase flex justify-center items-center pt-20 font-semibold">Women Cloth</h2></div>
                </div>
                <div className='relative transition-all duration-300 cursor-pointer'>
                    <img src="/images/product-grid/product-grid-2.png" alt="" className='w-full h-full' />
                    <div className='absolute inset-0 bg-gray-200 opacity-0 lg:hover:opacity-50 transition-opacity duration-300'><h2 className="h2 text-black uppercase flex justify-center items-center pt-20 font-semibold">men Cloth</h2></div>
                </div>
                <div className='relative transition-all duration-300 cursor-pointer'>
                    <img src="/images/product-grid/product-grid-3.png" alt="" className='w-full h-full' />
                    <div className='absolute inset-0 bg-gray-200 opacity-0 lg:hover:opacity-50 transition-opacity duration-300'><h2 className="h2 text-black uppercase flex justify-center items-center pt-20 font-semibold">Women Cloth</h2></div>
                </div>
                <div className='relative transition-all duration-300 cursor-pointer'>
                    <img src="/images/product-grid/product-grid-4.png" alt="" className='w-full h-full' />
                    <div className='absolute inset-0 bg-gray-200 opacity-0 lg:hover:opacity-50 transition-opacity duration-300'><h2 className="h2 text-black uppercase flex justify-center items-center pt-20 font-semibold">men Cloth</h2></div>
                </div>
                <div className='relative transition-all duration-300 cursor-pointer'>
                    <img src="/images/product-grid/product-grid-5.png" alt="" className='w-full h-full' />
                    <div className='absolute inset-0 bg-gray-200 opacity-0 lg:hover:opacity-50 transition-opacity duration-300'><h2 className="h2 text-black uppercase flex justify-center items-center pt-20 font-semibold">Women Cloth</h2></div>
                </div>

            </div>

        </>
    )
}

export default Category
