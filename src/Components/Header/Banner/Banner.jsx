
import { FiSearch } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-500 via-purple-600 to-blue-400 text-white min-h-screen flex items-center">
            <div className="container mx-auto">
                <div className="bg-transparent w-full flex items-center justify-center flex-col sm:flex-row lg:mt-0 md:mt-0 mt-44">
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className="w-full sm:w-2/3 lg:w-1/2 flex flex-col items-center">
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-4 text-center">
                            Find Your Haven of Opportunities
                        </h1>
                        <p className="text-base sm:text-lg text-center mb-2 sm:mb-4">
                            Discover Your Dream Job with HireHaven: Find, Apply, and Succeed.
                        </p>
                        <div className="relative w-full max-w-md lg:px-0 md:px-4 px-5">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    className="w-full h-14 pl-12 pr-10 bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring focus:border-purple-300 rounded-none"
                                    placeholder="Find Jobs..."
                                />
                                <button className="absolute  right-2 lg:bg-blue-500 md:bg-violet-500 bg-violet-500  text-white h-10 w-10 flex items-center justify-center">
                                    <FiSearch className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 sm:w-1/2 h-auto max-h-70 lg:max-h-full object-cover mt-4 sm:mt-0 ml-0 sm:ml-4 relative lg:block hidden">
                        <div data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="2000"
                            className='flex justify-between items-center h-20 w-64 px-4 bg-white rounded-lg shadow-lg shadow-slate-600 absolute top-64'>
                            <div>
                                <img className='h-12 p-2 ' src="https://i.ibb.co/R9Kmgsx/file.png" alt="" />
                            </div>
                            <div className='text-black'>
                                <h2 className='font-semibold'>Upload Your CV</h2>
                                <small className='text-slate-600'>It only takes a few seconds</small>
                            </div>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className='flex justify-between items-center h-20 w-64 px-4 bg-white rounded-lg shadow-lg shadow-slate-600 absolute top-3/4 right-24'>
                            <div>
                                <img className='h-12 p-2 bg-amber-100 rounded-xl ' src="https://i.ibb.co/c6xgbp9/mail.png" alt="" />
                            </div>
                            <div className='text-black'>
                                <h2 className='font-semibold'>Work Inquiry From</h2>
                                <small className='text-slate-600'>Surovi Yasmin</small>
                            </div>
                        </div>
                        <div data-aos="zoom-out-up"
                            data-aos-duration="2000" className='flex justify-between items-center h-20 w-52 px-4 bg-white rounded-lg shadow-lg shadow-slate-600 absolute top-28 right-6'>
                            <div>
                                <img className='h-12 p-2 bg-violet-200 rounded-full' src="https://i.ibb.co/M1nmCrx/briefcase.png" alt="" />
                            </div>
                            <div className='text-black'>
                                <h2 className='font-semibold'>Creative Agency</h2>
                                <small className='text-slate-600'>Startup</small>
                            </div>
                        </div>
                        <img
                            src="https://brayo.co/static/da15ee8a121c0b65611d997546f2741f/f3583/person-with-screens.png"
                            alt="Banner Image"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
