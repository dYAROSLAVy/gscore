import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { LicenseCard } from "../../shared/ui/license-card/license-card";
import { ArrowLeftIcon } from "@/shared/icons/arrow-left";
import { ArrowRightIcon } from "@/shared/icons/arrow-right";
import "./subscribe-slider.scss";
import { Subscribe } from "@/api/types";
import { FC } from "react";

export type SubscribeSliderProps = {
  subscribes: Subscribe[];
};

export const SubscribeSlider: FC<SubscribeSliderProps> = ({ subscribes }) => {
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
      {subscribes.map(({ currentPeriodEnd, product }, index) => {
        return (
          <SwiperSlide key={index}>
            <LicenseCard
              date={currentPeriodEnd}
              price={product.prices[0].price}
              type={product.name}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
