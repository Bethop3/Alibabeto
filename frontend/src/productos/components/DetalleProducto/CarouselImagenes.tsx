/* eslint-disable @typescript-eslint/no-explicit-any */
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import '../../../styles/global.css'
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'


type Props = {
    imagenes: string[]
}

const CarouselImagenes = ({ imagenes }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <>
            <Swiper
                slidesPerView={1}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {
                    imagenes.map(imagen => (
                        <SwiperSlide key={`${imagen}-${Date.now()}`}>
                            <img
                                src={imagen}
                                className='rounded-lg '
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* <Swiper
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
                                src={imagen}
                                className='rounded-lg'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper> */}
        </>
    )
}

export default CarouselImagenes