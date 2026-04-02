"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const partners = [
  {
    img: "/webflow/images/slide-link-1-img_1.webp",
    url: "",
    alt: "Partner 1",
  },
  {
    img: "/webflow/images/574x287-1.png",
    url: "https://legalaid.gov.ua/kliyentam/pro-bezoplatnu-pravovu-dopomogu-bpd/",
    alt: "lawyers help",
  },
  {
    img: "/webflow/images/evrointegration-1.webp",
    url: "/ievrointegraciya",
    alt: "evrointegration",
  },
  {
    img: "/webflow/images/u24-media.webp",
    url: "https://united24media.com/",
    alt: "united24 media",
  },
];

export default function PartnersSlider() {
  return (
    <div className="slider-block">
      <div className="partners-swiper-wrap relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".partners-next",
            prevEl: ".partners-prev",
          }}
          pagination={{
            clickable: true,
            el: ".partners-pagination",
          }}
          className="slider-3 w-slider"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="slide-6 w-slide">
              {partner.url ? (
                <Link
                  href={partner.url}
                  target="_blank"
                  className="w-inline-block"
                  style={{ display: "block", width: "100%", height: "100%" }}
                >
                  <Image
                    src={partner.img}
                    alt={partner.alt}
                    width={900}
                    height={450}
                    className="o-img alt-page-img"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Link>
              ) : (
                <Image
                  src={partner.img}
                  alt={partner.alt}
                  width={900}
                  height={450}
                  className="o-img alt-page-img"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows to match Webflow style if needed, or use default */}
        <button
          className="partners-prev left-arrow-2 w-slider-arrow-left"
          type="button"
          aria-label="Previous slide"
          style={{ zIndex: 10 }}
        >
          <div className="w-icon-slider-left"></div>
        </button>
        <button
          className="partners-next right-arrow w-slider-arrow-right"
          type="button"
          aria-label="Next slide"
          style={{ zIndex: 10 }}
        >
          <div className="w-icon-slider-right"></div>
        </button>

        {/* Custom Pagination */}
        <div
          className="partners-pagination slide-nav w-slider-nav w-round w-num"
          style={{ marginTop: "10px", textAlign: "center" }}
        ></div>
      </div>
    </div>
  );
}
