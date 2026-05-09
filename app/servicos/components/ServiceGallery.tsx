"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Scrollbar } from "swiper/modules";

import "swiper/css/scrollbar";
import Link from "next/link";

interface Props {
  images?: string[];
  title: string;
}

export default function ServiceGallery({ images = [], title }: Props) {
  return (
    <div className="gallery-wrapper">
      <Swiper
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        slidesPerView={1.2}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },

          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((img: string, index: number) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 1200px) 100vw, 35vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
