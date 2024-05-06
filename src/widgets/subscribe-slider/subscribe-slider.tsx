import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { LicenseCard } from "../../shared/ui/license-card/license-card";
import { ArrowLeftIcon } from "@/shared/icons/arrow-left";
import { ArrowRightIcon } from "@/shared/icons/arrow-right";
import "./subscribe-slider.scss";
import { Subscribe } from "@/entities/types";
import { FC } from "react";
import { useAppDispatch } from "@/shared/redux/hooks";
import { addIndex } from "@/entities/subscribes/model/subscribesSlice";

export type SubscribeSliderProps = {
  subscribes: Subscribe[];
  createClickHandler: (index: number, id: number) => () => void;
};

export const SubscribeSlider: FC<SubscribeSliderProps> = ({
  subscribes,
  createClickHandler,
}) => {
  const dispatch = useAppDispatch();

  let activeSlideIndex;

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      breakpoints={{
        320: {
          slidesPerView: "auto",
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2.15,
          spaceBetween: 28,
        },
        1200: {
          slidesPerView: 2.15,
          spaceBetween: 28,
        },
      }}
      loop={true}
      navigation={{
        prevEl: ".slider__button--prev",
        nextEl: ".slider__button--next",
      }}
      onInit={(swiper) => {
        activeSlideIndex = swiper.activeIndex;
        const slides = swiper.slides;
        dispatch(addIndex(slides[activeSlideIndex]?.id));
      }}
      onSlideChangeTransitionEnd={(swiper) => {
        activeSlideIndex = swiper.activeIndex;
        const slides = swiper.slides;
        dispatch(addIndex(slides[activeSlideIndex]?.id));
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
      {subscribes.map(({ currentPeriodEnd, product, id }, index) => {
        return (
          <SwiperSlide key={id} id={`${id}`}>
            <LicenseCard
              date={currentPeriodEnd}
              price={product.prices[0].price}
              type={product.name}
              onClick={createClickHandler(index, id)}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
