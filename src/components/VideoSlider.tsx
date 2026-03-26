"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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

export default function VideoSlider() {
  return (
    <section className="slider-section">
      <div className="w-layout-blockcontainer o-container video-slider w-container">
        <h2 className="white-header">Роздивись Україну</h2>
        <Swiper
          className="video-swiper"
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
          {videos.map((video) => (
            <SwiperSlide 
              key={video.src} 
              className="video-slide"
              style={{ height: "auto", width: "auto" }} // Allow Swiper to control width
            >
              <div 
                className="video-wrap"
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  minHeight: "unset", 
                  flex: "unset" 
                }} // Override Webflow flex and height
              >
                <div className="html-embed w-embed w-iframe" style={{ width: "100%" }}>
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
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
    </section>
  );
}
