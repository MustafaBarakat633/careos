"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import IconButton from "../ui/IconButton";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import Image from "next/image";

type CarSliderProps = {
  cars: {
    title: string;
    description: string;
    image: string;
    badge: boolean;
  }[];
};

export default function CarsSlider({ cars }: CarSliderProps) {
  return (
    <div className="relative">
      <div className="flex justify-end gap-3 mb-5">
        <IconButton id="previous" icon={<IoMdArrowRoundBack size={20} />} />
        <IconButton id="next" icon={<IoMdArrowRoundForward size={20} />} />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: "#previous",
          nextEl: "#next",
        }}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 2.5,
          },

          1024: {
            slidesPerView: 3,
          },

          1280: {
            slidesPerView: 3.5,
          },
        }}
      >
        {cars.map((car, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white min-h-[400px] relative group overflow-hidden">
              <div className="absolute inset-0 z-1 w-full">
                <Image
                  src={car.image}
                  fill
                  alt="car"
                  className="object-cover bg-center group-hover:scale-105 duration-200"
                />
              </div>

              <div className="relative z-2 text-white backdrop-blur-lg bg-black/30 p-4">
                <h3 className="font-bold mb-1">{car.title}</h3>
                <p className="text-xs">{car.description}</p>
              </div>

              {car.badge && (
                <div className="absolute z-2 px-6 py-4 bottom-0 flex w-full gap-2 items-center">
                  <p className="uppercase text-primary text-xl font-bold text-nowrap">
                    hot sell
                  </p>
                  <span className="h-0.5 bg-gray-300 w-full"></span>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
