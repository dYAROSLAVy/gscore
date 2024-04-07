import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { LicenseCard } from "../license-card/license-card";
import { ArrowLeftIcon } from "@/shared/icons/arrow-left";
import { ArrowRightIcon } from "@/shared/icons/arrow-right";
import "./slider.scss";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={28}
      slidesPerView={2}
      navigation={{
        prevEl: ".slider__button--prev",
        nextEl: ".slider__button--next",
      }}
      pagination={{ type: "fraction", el: ".slider__pagination" }}
    >
      <div className="slider__control">
        <div className="slider__button slider__button--prev">
          <ArrowLeftIcon />
        </div>
        <div className="slider__pagination"></div>
        <div className="slider__button slider__button--next">
          <ArrowRightIcon />
        </div>
      </div>
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
function userRef(arg0: string) {
  throw new Error("Function not implemented.");
}
