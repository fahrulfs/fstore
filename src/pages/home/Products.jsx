import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards'


function Products() {

    const [products, setProducts] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategoty] = useState('all')
    const [sortOption, setSortOption] = useState('default')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('products.json')
                const data = await response.json()
                setProducts(data)
                setFilteredItems(data)
            } catch (error) {
                console.error('Error fetching the products:', error)
            }
        }
        fetchData()
    }, [])
    // filtering
    const filterItems = (category) => {
        const filtered = category === "all" ? (products) : products.filter((item) => item.category === category)
        setFilteredItems(filtered)
        setSelectedCategoty(category)
    }
    // showing all product
    const showAll = () => {
        setFilteredItems(products)
        setSelectedCategoty('all')
    }

    return (
        <div className=' w-full h-fit py-8 mt-10'>
            <div className='container text-center w-full'>
                <h3 className='h3 capitalize text-blackColor'>Or subscribe to the newsletter</h3>
            </div>

            {/* Product category tab */}
            <div className='w-full h-fit mt-5 container'>
                <div className="w-full flex justify-between">

                    <div className='flex gap-2'>

                        <button className='section-parag-light' onClick={showAll}>All</button>
                        <button className='section-parag-light' onClick={() => filterItems('Dress')}>Clothing</button>
                        <button className='section-parag-light' onClick={() => filterItems('Hoodies')}>Hoodies</button>
                        <button className='section-parag-light' onClick={() => filterItems('Bag')}>Bag</button>
                    </div>

                    {/* sorting product */}
                    <select className='bg-blackColor text-whiteColor p-1 rounded-md outline-none border-none capitalize section-parag-dark'>
                        <option value="default">Default</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                        <option value="low-high">Low to High</option>
                        <option value="high-low">High to Low</option>
                    </select>
                </div>
            </div>
            {/* Product Card */}
            <Cards products={filteredItems} />
        </div>
    )
}

export default Products
