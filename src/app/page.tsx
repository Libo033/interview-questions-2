"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const [size, setSize] = useState(150);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 640) setSize(120);
      if (window.innerWidth >= 640 && window.innerWidth < 1024) setSize(150);
      if (window.innerWidth >= 1024) setSize(180);
    }
  }, []);

  return (
    <main className="bg-svg-1 w-full h-fit pt-[112px]">
      <div className="md:flex md:w-full">
        <h1 className="px-4 py-8 text-4xl text-pretty sm:px-16 md:w-4/6 md:text-5xl md:py-32 lg:w-3/6 lg:px-22">
          Bienvenido a <b className="title">Inter Q:</b> Tu Recurso Definitivo
          para Preguntas de Entrevista en IT.
        </h1>
        <div className="h-60 my-auto flex justify-center items-center md:w-2/6 md:h-fit lg:w-3/6">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ disableOnInteraction: false }}
            centeredSlides={true}
          >
            <SwiperSlide>
              <Image
                className="m-auto"
                src={"/img/javascript.svg"}
                alt="javascript"
                width={size}
                height={size}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="m-auto"
                src={"/img/react.svg"}
                alt="react"
                width={size}
                height={size}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="m-auto"
                src={"/img/typescript.svg"}
                alt="typescript"
                width={size}
                height={size}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <h2 className="px-4 text-pretty pb-16 sm:px-16 sm:pt-12 md:text-xl lg:px-22 lg:pt-0">
        ¿Estás listo para destacarte en tu próxima entrevista de trabajo en el
        área de Tecnología de la Información? ¡Has llegado al lugar adecuado! En
        <b className="title font-extrabold"> Inter Q</b>, te proporcionamos las
        herramientas y los recursos necesarios para brillar en tus entrevistas y
        asegurar el trabajo de tus sueños en el emocionante mundo de la
        tecnología.
      </h2>
    </main>
  );
}
