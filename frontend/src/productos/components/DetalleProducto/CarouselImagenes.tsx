/* eslint-disable @typescript-eslint/no-explicit-any */
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

const imagenes: string[] = [
    'https://www.notebookcheck.org/fileadmin/_processed_/5/8/csm_MateBook_X_Pro_MachR_Grey_Front_Angle_RGB_15d67819ca.jpg',
    'https://www.notebookcheck.org/fileadmin/_processed_/0/2/csm_MateBook_X_Pro_MachR_Grey_Top_IMG_2190_RGB_dab491d4a2.jpg  ',
    'https://www.notebookcheck.org/fileadmin/_processed_/5/a/csm_MateBook_X_Pro_MachR_Grey_SpecialAngle_Left_Top_Front_2_RGB_4d7c1407a4.jpg',
    'https://www.notebookcheck.org/fileadmin/_processed_/e/9/csm_MateBook_X_Pro_Green_Front_RGB_6e0d58a1e9.jpg',
];

const CarouselImagenes = () => {

    // const { producto } = useContext(DetalleProductoContext)!
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
                        <SwiperSlide key={`${imagen}-${Date.now()}`}>
                            <img
                                src={imagen}
                                className='rounded-lg w-full md:w-[400px] md:h-[400px] object-contain mx-auto'
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
                                src={imagen}
                                className='rounded-lg'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default CarouselImagenes