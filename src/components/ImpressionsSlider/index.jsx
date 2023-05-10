import React from "react";
import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import ImpressionItem from "../ImpressionItem";

export default () => {
  const impressions = [
    {
      id: 1,
      name: "João da Silva",
      impression:
        "Corte de cabelo e barba muito bem feitos, com um preço justo.",
    },
    {
      id: 2,
      name: "Maria da Silva",
      impression: "Profissionais muito atenciosos e simpáticos.",
    },
    {
      id: 3,
      name: "João da Silva",
      impression: "Ambiente agradável e bem decorado.",
    },
    {
      id: 4,
      name: "Maria da Silva",
      impression: " Serviço de qualidade e preço justo.",
    },
    {
      id: 5,
      name: "João da Silva",
      impression: "Ambiente agradável e bem decorado.",
    },
    {
      id: 6,
      name: "Maria da Silva",
      impression: " Serviço de qualidade e preço justo.",
    },
    {
      id: 7,
      name: "João da Silva",
      impression: "Ambiente agradável e bem decorado.",
    },
    {
      id: 8,
      name: "Maria da Silva",
      impression: "Profissionais muito atenciosos e simpáticos.",
    },
    {
      id: 9,
      name: "João da Silva",
      impression: " Serviço de qualidade e preço justo.",
    },
  ];

  return (
    <Swiper
      breakpoints={{
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
      spaceBetween={30}
      modules={[Pagination]}
    >
      {impressions.map((impression) => (
        <SwiperSlide
          style={{
            backgroundColor: "transparent",
          }}
        >
          <ImpressionItem
            key={impression.id}
            name={impression.name}
            impression={impression.impression}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
