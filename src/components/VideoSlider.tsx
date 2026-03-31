"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const videos = [
  {
    src: "/webflow/videos/Mandruy.mp4",
    title: "Mandruy",
  },
  {
    src: "/webflow/videos/Poltava.mp4",
    title: "Poltava",
  },
  {
    src: "/webflow/videos/ukraine map.mp4",
    title: "Ukraine Map",
  },
  {
    src: "/webflow/videos/Ukraine Now 4.mp4",
    title: "Ukraine Now",
  },
];

const loopVideos = [...videos, ...videos, ...videos];

export default function VideoSlider() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(
    null,
  );
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      className="slider-section"
      onMouseEnter={() => console.log("Section Hovered!")}
    >
      <div className="w-layout-blockcontainer o-container video-slider w-container">
        <h2 className="white-header">Роздивись Україну</h2>
        <div className="video-swiper-wrap" ref={wrapperRef}>
          <button
            className="video-slider-nav video-slider-prev"
            type="button"
            aria-label="Попереднє відео"
          >
            <Image
              src="/webflow/images/blue-arrow-next.svg"
              alt=""
              width={32}
              height={32}
              aria-hidden="true"
            />
          </button>
          <button
            className="video-slider-nav video-slider-next"
            type="button"
            aria-label="Наступне відео"
          >
            <Image
              src="/webflow/images/blue-arrow-next.svg"
              alt=""
              width={32}
              height={32}
              aria-hidden="true"
            />
          </button>
          <Swiper
            className="video-swiper"
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setSwiperInstance(swiper);
            }}
            navigation={{
              prevEl: ".video-slider-prev",
              nextEl: ".video-slider-next",
            }}
            slidesPerView={1}
            spaceBetween={24}
            centeredSlides={true}
            loop
            loopAdditionalSlides={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{ width: "100%" }}
          >
            {loopVideos.map((video, index) => (
              <SwiperSlide
                key={`${video.src}-${index}`}
                className="video-slide"
              >
                <div
                  className="video-wrap"
                  style={{
                    width: "100%",
                    height: "auto",
                    minHeight: "unset",
                    flex: "unset",
                  }}
                >
                  <div
                    className="html-embed w-embed w-iframe"
                    style={{ width: "100%" }}
                  >
                    <div
                      style={{
                        aspectRatio: "1.77777778",
                        overflow: "hidden",
                        width: "100%",
                      }}
                    >
                      <video
                        width="100%"
                        height="100%"
                        className="videoframe"
                        controls
                        preload="metadata"
                        aria-label={video.title}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
