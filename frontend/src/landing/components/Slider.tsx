import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
const Slider = () => {
    return (
        <div className='w-full custom-background'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className=''>
                        <img className='w-full' src="/Images/hero/bg-2.webp" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Images/hero/bg-2.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Images/hero/bg-2.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Images/hero/bg-2.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Images/hero/bg-2.webp" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider