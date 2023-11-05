import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CiLocationOn } from 'react-icons/ci';

import { useEffect, useState } from 'react';
const TopCompany = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);
    useEffect(() => {

        const mediumScreenMediaQuery = window.matchMedia('(min-width: 640px) and (max-width: 1023px)');
        const largeScreenMediaQuery = window.matchMedia('(min-width: 1024px)');
        const handleMediaQuery = (mediaQuery) => {
            if (mediaQuery.matches) {
                if (mediaQuery.media === '(min-width: 640px) and (max-width: 1023px)') {
                    setSlidesPerView(2);
                } else {
                    setSlidesPerView(3);
                }
            } else {
                setSlidesPerView(1);
            }
        };
        handleMediaQuery(largeScreenMediaQuery);

        largeScreenMediaQuery.addEventListener('change', handleMediaQuery);
        mediumScreenMediaQuery.addEventListener('change', handleMediaQuery);
        return () => {
            largeScreenMediaQuery.removeEventListener('change', handleMediaQuery);
            mediumScreenMediaQuery.removeEventListener('change', handleMediaQuery);

        };
    }, []);
    return (
        <div className='mt-20 mb-20 '>
            <h1 className="text-3xl font-semibold text-center mt-20 ">Top Company Registered</h1>
            <p className='text-center text-stone-400 mt-4 mb-20'>Some of the companies we have helped recruit excellent applicants over the years.</p>
            <Swiper

                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="lg:grid lg:grid-cols-3 "
            >


                <SwiperSlide>
                    <div data-aos="flip-left" data-aos-duration="1500" className="card w-72 h-80 bg-base-100 shadow-xl ml-14">
                        <figure className="px-10 pt-10">
                            <img className='h-24' src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-1.png&w=96&q=75" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                        <h1 className='text-primary text-lg font-semibold mb-2'>Udemy</h1>
                        <p className='flex items-center mb-2'> <CiLocationOn></CiLocationOn> London, UK</p>
                            <div className="card-actions">
                            <button className='btn hover:btn-primary'>15 Open Position</button>


                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="flip-left"  data-aos-duration="1500" className="card w-72 h-80 bg-base-100 shadow-xl ml-14">
                        <figure className="px-10 pt-10">
                            <img className='h-24' src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-2.png&w=96&q=75" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                        <h1 className='text-primary text-lg font-semibold mb-2'>Stripe</h1>
                        <p className='flex items-center mb-2'> <CiLocationOn></CiLocationOn> London, UK</p>
                            <div className="card-actions">
                            <button className='btn hover:btn-primary'>22 Open Position</button>


                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="flip-left"  data-aos-duration="1500" className="card w-72 h-80 bg-base-100 shadow-xl ml-14">
                        <figure className="px-10 pt-10">
                            <img className='h-24' src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-3.png&w=96&q=75" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                        <h1 className='text-primary text-lg font-semibold mb-2'>Dropbox</h1>
                        <p className='flex items-center mb-2'> <CiLocationOn></CiLocationOn> London, UK</p>
                            <div className="card-actions">
                            <button className='btn hover:btn-primary'>22 Open Position</button>


                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="flip-left"  data-aos-duration="1500" className="card w-72 h-80 bg-base-100 shadow-xl ml-14">
                        <figure className="px-10 pt-10">
                            <img className='h-24' src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-4.png&w=96&q=75" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                        <h1 className='text-primary text-lg font-semibold mb-2'>Figma</h1>
                        <p className='flex items-center mb-2'> <CiLocationOn></CiLocationOn> London, UK</p>
                            <div className="card-actions">
                            <button className='btn hover:btn-primary'>20 Open Position</button>


                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="flip-left"  data-aos-duration="1500" className="card w-72 h-80 bg-base-100 shadow-xl ml-14">
                        <figure className="px-10 pt-10">
                            <img className='h-24' src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-5.png&w=96&q=75" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                        <h1 className='text-primary text-lg font-semibold mb-2'>Upwork</h1>
                        <p className='flex items-center mb-2'> <CiLocationOn></CiLocationOn> London, UK</p>
                            <div className="card-actions">
                            <button className='btn hover:btn-primary'>15 Open Position</button>


                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="flip-left"  data-aos-duration="1500" className="card w-72 h-96 bg-base-100 shadow-xl ml-14">
                        <figure className="px-10 pt-10">
                            <img className='h-24' src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-6.png&w=96&q=75" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                        <h1 className='text-primary text-lg font-semibold mb-2'>InVision</h1>
                        <p className='flex items-center mb-2'> <CiLocationOn></CiLocationOn> London, UK</p>
                            <div className="card-actions">
                            <button className='btn hover:btn-primary'>15 Open Position</button>


                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper></div>

    );
};

export default TopCompany;