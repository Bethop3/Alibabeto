import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

const Slider = () => {
    return (
        <div className='w-full custom-background'>
            <Swiper
                className='custom-swiper-button-next'
                modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full' src="/Images/hero/bg-2.webp" alt="" />
                        <div className="container px-5 mx-auto left-0 right-0 bottom-0 absolute top-0 grid grid-cols-1 h-[100%] md:h-auto grid-rows-2 md:grid-rows-1 md:grid-cols-2">
                            <div className="item  flex items-center justify-center flex-col">
                                <div className="order-last mb-6 space-y-6 md:mb-0 ">
                                    <h1 className="text-4xl text-white font-bold md:text-5xl">
                                        Apple Watch: Una experiencia de otra manera
                                    </h1>
                                    <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                                        <button
                                            type="button"
                                            title="Start buying"
                                            className="w-full py-3 px-6 text-center rounded-xl transition bg-red-600 shadow-xl  sm:w-max"
                                        >
                                            <span className="block text-white font-semibold">
                                                Ver relojes
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="-order-1 md:order-1 item flex items-start justify-center">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="/Images/hero/bg-1.webp" alt="" />
                        <div className="container mx-auto left-0 right-0 bottom-0 absolute top-0 grid grid-cols-1 h-[100%] md:h-auto grid-rows-2 md:grid-rows-1 md:grid-cols-2">
                            <div className="item  flex items-center justify-center flex-col">
                                <div className="order-1 mb-6 space-y-6 md:mb-0 ">
                                    <h1 className="text-4x text-white font-bold md:text-5xl">
                                        Apple Watch: Una experiencia de otra manera
                                    </h1>
                                    <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                                        <button
                                            type="button"
                                            title="Start buying"
                                            className="w-full py-3 px-6 text-center rounded-xl transition bg-red-600 shadow-xl  sm:w-max"
                                        >
                                            <span className="block text-white font-semibold">
                                                Ver relojes
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:-order-1 item flex items-start justify-center">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="/Images/hero/bg-4.webp" alt="" />
                        <div className="container mx-auto left-0 right-0 bottom-0 absolute top-0 grid grid-cols-1 h-[100%] md:h-auto grid-rows-2 md:grid-rows-1 md:grid-cols-2">
                            <div className="item  flex items-center justify-center flex-col">
                                <div className="order-1 mb-6 space-y-6 md:mb-0 ">
                                    <h1 className="text-4x text-white font-bold md:text-5xl">
                                        Apple Watch: Una experiencia de otra manera
                                    </h1>
                                    <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                                        <button
                                            type="button"
                                            title="Start buying"
                                            className="w-full py-3 px-6 text-center rounded-xl transition bg-red-600 shadow-xl  sm:w-max"
                                        >
                                            <span className="block text-white font-semibold">
                                                Ver relojes
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-1 item flex items-start justify-center">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Images/hero/bg-3.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Images/hero/bg-2.webp" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider