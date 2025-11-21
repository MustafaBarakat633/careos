"use client";

import { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="flex justify-end gap-3 mb-5">
        <IconButton
          icon={<IoMdArrowRoundBack size={20} />}
          onClick={previous}
        />
        <IconButton icon={<IoMdArrowRoundForward size={20} />} onClick={next} />
      </div>

      <Slider ref={sliderRef} {...settings}>
        {cars.map((car, i) => (
          <div
            key={i}
            className="bg-white min-h-[400px] relative group overflow-hidden"
          >
            <div className="absolute inset-0 z-1">
              <Image
                src={car.image}
                fill
                alt="car"
                className="object-cover group-hover:scale-105 duration-200"
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
        ))}
      </Slider>
    </div>
  );
}
