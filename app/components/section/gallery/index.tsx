"use client";

import React, { useEffect } from "react";
import {
  GalleryBox,
  GalleryContainer,
  GallerySlide,
  H2,
  GalleryFooter,
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Gallery = () => {
  return (
    <>
      <GalleryContainer>
        <H2>Gallery</H2>
        <GalleryBox>
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={50}
            slidesPerView={4}
            navigation={{
              nextEl: "nextbtn",
              prevEl: "prevbtn",
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <GallerySlide>
                <Image
                  src="/assets/somewhere-gallery-8.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </GallerySlide>
            </SwiperSlide>
            <SwiperSlide>
              <GallerySlide>
                <Image
                  src="/assets/somewhere-gallery-8.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </GallerySlide>
            </SwiperSlide>
            <SwiperSlide>
              <GallerySlide>
                <Image
                  src="/assets/somewhere-gallery-8.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </GallerySlide>
            </SwiperSlide>
            <SwiperSlide>
              <GallerySlide>
                <Image
                  src="/assets/somewhere-gallery-8.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </GallerySlide>
            </SwiperSlide>
            <SwiperSlide>
              <GallerySlide>
                <Image
                  src="/assets/somewhere-gallery-8.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </GallerySlide>
            </SwiperSlide>
            <SwiperSlide>
              <GallerySlide>
                <Image
                  src="/assets/somewhere-gallery-8.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </GallerySlide>
            </SwiperSlide>
            <SwiperSlide>
              <GallerySlide>
                <Image
                  src="/assets/somewhere-gallery-8.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </GallerySlide>
            </SwiperSlide>
          </Swiper>
        </GalleryBox>
        <GalleryFooter>
          <div className="gallery__scrollbar swiper-scrollbar-horizontal">
            <div
              className="swiper-scrollbar-drag"
            ></div>
          </div>
        </GalleryFooter>
      </GalleryContainer>
    </>
  );
};

const Images = [
  { number: "01", image: "" },
  { number: "02", image: "" },
  { number: "03", image: "" },
  { number: "04", image: "" },
  { number: "05", image: "" },
  { number: "06", image: "" },
  { number: "07", image: "" },
];
