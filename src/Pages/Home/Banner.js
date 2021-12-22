import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
// Import Swiper styles
// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./style.css"

// SwiperCore.use([]);

function App() {
  return (
    <React.Fragment>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}

export default App;
