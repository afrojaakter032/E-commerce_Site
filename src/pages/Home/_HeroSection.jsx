import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function HeroSection () {
    return (
        <>
            {/* <div>
                <img src="./asstes/images/hero.png" alt="hero" height={500} />
            </div> */}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><img src="./asstes/images/hero.png" alt="hero" height={500} /></SwiperSlide>
                <SwiperSlide><img src="./asstes/images/banner2.png" alt="hero" height={500} /></SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </>
    )
}

export default HeroSection;