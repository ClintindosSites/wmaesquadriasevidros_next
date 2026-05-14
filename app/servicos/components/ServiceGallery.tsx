"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Scrollbar } from "swiper/modules";

import "swiper/css/scrollbar";

import { event } from "@/lib/gtag";

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
            <div
              className="slide"
              onClick={() =>
                event({
                  action: "click_gallery_image",
                  category: "Galeria",
                  label: `${title} - Imagem ${index + 1}`,
                  value: index + 1,
                })
              }
            >
              <Image
                src={img}
                alt={`${title} - Projeto ${index + 1}`}
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
