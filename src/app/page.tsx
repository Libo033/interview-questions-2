"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main className="bg-svg-1 w-full h-fit pt-[112px]">
      <h1 className="px-4 py-8 text-4xl text-pretty">
        Bienvenido a <b className="title">Inter Q:</b> Tu Recurso Definitivo
        para Preguntas de Entrevista en IT.
      </h1>
      <div className="h-60 flex justify-center items-center">
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
              width={120}
              height={120}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="m-auto"
              src={"/img/react.svg"}
              alt="react"
              width={120}
              height={120}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="m-auto"
              src={"/img/typescript.svg"}
              alt="typescript"
              width={120}
              height={120}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className="px-4 text-pretty pb-16">
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
