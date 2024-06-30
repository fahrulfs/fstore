import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";

const DummyText = {
    highlights: [
        "Hand cut and sewn locally",
        "Dyed with our proprietary colors",
        "Pre-washed & pre-shrunk",
        "Ultra-soft 100% cotton",
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const ProductDetail = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("products.json");
                const data = await response.json();
                const product = data.filter((p) => p.id == id)
                //  console.log(product[0])
                setProducts(product[0])
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id])

    const { image, title, category, price } = products;


    return (
        <div className="container w-full h-fit">

            <div className="pt-20 lg:pt-32 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6">
                {/* Product Image */}
                <div className="overflow-hidden rounded-xl">
                    <img
                        src={image}
                        alt="Product-Image"
                        className="w-full"
                    />

                </div>
                {/* Product Details */}
                <div className="flex flex-col gap-4">
                    <div>
                        {/* Product Title */}
                        <h2 className="h2 text-accentColor capitalize">
                            {title}
                        </h2>
                        <span className="text-xs text-gray-600 italic">Shop / {category}</span>
                        {/* Product Description */}
                        <p className="section-parag-light mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Sed enim ut sem viverra aliquet eget sit. Odio
                            facilisis mauris sit amet
                        </p>
                        {/* Star Ratings */}
                        <span className="my-3 text-xl text-yellow-600 flex items-center gap-1 sm:my-4">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </span>
                        {/* Product Price */}
                        <span className="text-xl text-accentColor font-semibold sm:text-2xl">
                            ${price}
                        </span>
                    </div>
                    {/* quantiti */}
                    <div className="text-left flex flex-col gap-2 w-full">
                        {/* Quantity Label */}
                        <label className="font-semibold">Quantity</label>
                        {/* Quantity Input */}
                        <input
                            className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                            type="number"
                            defaultValue="1"
                            required
                        />
                    </div>
                    {/* Order Button */}
                    <div className="w-full text-left">
                        <Button
                            style="flex justify-center items-center gap-2 w-full py-3 px-4 bg-blackColor outline-none text-white text-md font-bold rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-accentColor hover:text-whiteColor cursor-pointer"
                            title="Confirm Order"
                        >
                            <span>Confirm Order</span>
                            <FaArrowAltCircleRight />
                        </Button>
                    </div>

                </div>


                {/* product details */}
                <div className="">
                    <h3 className="h3">Details</h3>

                    <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">
                            {DummyText.details}
                        </p>
                    </div>
                    <div className="mt-5">
                        <h3 className="h3">Highlights</h3>
                        <div className="mt-4 space-y-4">
                            <li className="text-sm text-gray-6000">
                                {DummyText.highlights[0]}
                            </li>
                            <li className="text-sm text-gray-6000">
                                {DummyText.highlights[1]}
                            </li>
                            <li className="text-sm text-gray-6000">
                                {DummyText.highlights[2]}
                            </li>
                            <li className="text-sm text-gray-6000">
                                {DummyText.highlights[3]}
                            </li>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default ProductDetail;
