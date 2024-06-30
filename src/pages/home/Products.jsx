import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards'
import Button from '../../components/Button'


function Products() {

    const [products, setProducts] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategoty] = useState('all')


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
                <h2 className='h2 capitalize text-blackColor'>Or subscribe our newsletter</h2>
            </div>

            {/* Product category tab */}
            <div className='w-full h-fit mt-5 container'>
                <div className="w-full flex gap-2 lg:justify-start justify-center">

                    <button
                        className={`section-parag-light ${selectedCategory === 'all' ? 'text-active' : ''}`}
                        onClick={showAll}
                    >
                        All
                    </button>
                    <button
                        className={`section-parag-light ${selectedCategory === 'Dress' ? 'text-active' : ''}`}
                        onClick={() => filterItems('Dress')}
                    >
                        Clothing
                    </button>
                    <button
                        className={`section-parag-light ${selectedCategory === 'Hoodies' ? 'text-active' : ''}`}
                        onClick={() => filterItems('Hoodies')}
                    >
                        Hoodies
                    </button>
                    <button
                        className={`section-parag-light ${selectedCategory === 'Bag' ? 'text-active' : ''}`}
                        onClick={() => filterItems('Bag')}
                    >
                        Bag
                    </button>

                </div>
            </div>
            {/* Product Card */}
            <Cards products={filteredItems} />
        </div>
    )
}

export default Products
