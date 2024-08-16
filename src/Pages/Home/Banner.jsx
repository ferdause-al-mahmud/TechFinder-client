import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper rounded-sm md:rounded-lg"
            >


                <SwiperSlide>
                    <section className="bg-gray-100 text-gray-800">
                        <div className="p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src="https://i.ibb.co/BTkhDsD/7900709.jpg" alt="" className="rounded-md object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="bg-gray-100 text-gray-800">
                        <div className="p-6 sm:mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src="https://i.ibb.co/5s88GXj/10238919.jpg" alt="" className="h-72 object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="bg-gray-100 text-gray-800">
                        <div className="p-6 sm:mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src="https://i.ibb.co/m8nhsb3/5565175.jpg" alt="" className="h-72 object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;