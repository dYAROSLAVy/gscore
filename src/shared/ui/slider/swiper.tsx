import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { LicenseCard } from "../license-card/license-card";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={28}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true, type: "fraction" }}
    >
      <SwiperSlide>
        <LicenseCard price={77} date="21.10.2022" type="Single site license" />
      </SwiperSlide>
      <SwiperSlide>
        <LicenseCard price={77} date="21.10.2022" type="Single site license" />
      </SwiperSlide>
      <SwiperSlide>
        <LicenseCard price={77} date="21.10.2022" type="Single site license" />
      </SwiperSlide>
      <SwiperSlide>
        <LicenseCard price={77} date="21.10.2022" type="Single site license" />
      </SwiperSlide>
      <SwiperSlide>
        <LicenseCard price={77} date="21.10.2022" type="Single site license" />
      </SwiperSlide>
    </Swiper>
  );
};
