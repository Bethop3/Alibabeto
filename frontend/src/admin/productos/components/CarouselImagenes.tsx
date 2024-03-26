/* eslint-disable @typescript-eslint/no-explicit-any */
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import { useState } from 'react';

type Props = {
    imagenes: any[]
}

const CarouselImagenes = ({ imagenes }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <>
            <Swiper
                className='custom-swiper-button-next'
                slidesPerView={1}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[FreeMode, Navigation, Thumbs]}
                loop={true}
            >
                {
                    imagenes.map(imagen => (
                        <SwiperSlide key={`${imagen['data_url'] ?? imagen['url']}`}>
                            <img
                                src={imagen['data_url'] ?? imagen['url']}
                                className='rounded-lg w-full object-contain mx-auto'
                                loading='lazy'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-3"
            >
                {
                    imagenes.map(imagen => (
                        <SwiperSlide key={imagen}>
                            <img
                                src={imagen['data_url'] ?? imagen['url']}
                                className='rounded-lg w-full object-contain mx-auto'
                                loading='lazy'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default CarouselImagenes