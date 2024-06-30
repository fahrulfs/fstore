import collectioLogo from '/images/collection/zara-logo.png'
import Button from '../../components/Button';
function Collection() {


    return (
        <div className='h-full w-full bg-cover lg:bg-center bg-no-repeat lg:bg-[url("/images/collection/collection.png")] bg-[url("/images/collection/collection-mobile.png")]'>
            <div className=" h-[580px]  flex justify-betweenflex-col md:flex-row items-center container">
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2">
                    <img src={collectioLogo} alt="" />
                    <h4 className="h4 capitalize text-whiteColor my-8 md:w-2/3 leading-[32px]">
                        Lustrous yet understated. The new evening wear collection
                        exclusively offered at the reopened Giorgio Armani boutique in Los
                        Angeles.
                    </h4>

                    <Button style="bg-blackColor w-fit h-fit px-3 py-2 rounded-md mt-3 hover:bg-accentColor duration-200 cursor-pointer flex justify-center items-center">
                        <p className='section-parag-dark capitalize'>See all collections</p>
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Collection
