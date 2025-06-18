/* eslint-disable @typescript-eslint/no-explicit-any */
import { DetalleProductoContext } from '../../context/DetalleProductoContext';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'


const CarouselImagenes = () => {

    // const { producto } = useContext(DetalleProductoContext)!
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const context = useContext(DetalleProductoContext)!

    const { imagenes_productos } = context.producto!

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
                    imagenes_productos.map(imagen => (
                        <SwiperSlide key={`${imagen.id}-${Date.now()}`}>
                            <img
                                src={imagen.url}
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
                className="mySwiper mt-10"
            >
                {
                    imagenes_productos.map(imagen => (
                        <SwiperSlide key={imagen.id}>
                            <img
                                src={imagen.url}
                                className='mx-auto rounded-lg max-h-[100px] object-cover object-center'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default CarouselImagenes