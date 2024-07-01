
import Button from "../../components/Button"
const NewsletterImg = [
    {
        id: 1,
        image: '/images/newsletter/news1.png'
    },
    {
        id: 2,
        image: '/images/newsletter/news2.png'
    },
    {
        id: 3,
        image: '/images/newsletter/news3.png'
    },
    {
        id: 4,
        image: '/images/newsletter/news4.png'
    },
    {
        id: 5,
        image: '/images/newsletter/news5.png'
    },
    {
        id: 6,
        image: '/images/newsletter/news6.png'
    },

]

function Newsletter() {
    return (
        <div className="w-full bg-whiteColor">
            <div className='container text-center h-fit w-full mt-5 py-12'>
                <h2 className='h2 capitalize text-blackColor'>Follow products and discounts on Instagram</h2>

                <div className="w-full h-fit grid grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
                    {NewsletterImg.map(({ id, image }) => {
                        return <img key={id} src={image} />

                    }
                    )}
                </div>
                <h2 className='h2 capitalize text-blackColor mt-8'>Or subscribe to the newsletter</h2>

                <div class="w-full h-fit lg:px-40 p-4  bg-secondaryColor flex flex-wrap items-center lg:justify-center lg:mt-5 gap-4">
                    <input type="email"
                        class="w-full bg-white outline-none border border-transparent border-b-accentColor text-darkColor p-2 rounded-md placeholder:capitalize placeholder:font-light"
                        placeholder="enter your email" />


                    <Button type="submit"
                        style="w-full md:w-[150px] lg:w-[150px] py-2 hover:shadow-lg duration-150 cursor-pointer bg-blackColor hover:bg-accentColor rounded-md">
                        <p class="section-parag-dark">Subscribe</p>
                    </Button>

                </div>

            </div>
        </div>


    )
}

export default Newsletter
