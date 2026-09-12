
import BannerImage from "../assets/banner-stack.png"

const HeroBanner = () => {
    return (
        <div className='grid grid-cols-2 items-center py-24 max-w-7xl mx-auto px-6' >


            {/* Left side */}
            <div>
                <h1 className='text-5xl font-bold mb-6'>Build Your Ideal <br />
                    <span className='font-bold bg-linear-to-r
            from-orange-500
             to-pink-600
             bg-clip-text
             text-transparent' >Development Stack</span></h1>
                <p className='mb-6' >Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits <br /> your
                    next project.</p>


                <div>
                    <button className='btn bg-linear-to-r 
            from-orange-500 
            to-pink-600
            hover:from-pink-600
            hover:to-orange-500
            text-white
            border-none
            rounded-md py-6 px-9 mr-6' >Explore Technologies</button>

                    <button className="btn btn-outline rounded-md py-6 px-9">Learn More</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <img src={BannerImage} alt="" />
            </div>


        </div>
    );
};

export default HeroBanner;