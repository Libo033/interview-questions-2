"use client";
import LangCard from "@/components/card/LangCard";
import SwiperHome from "@/components/various/SwiperHome";
import { useEffect, useState } from "react";

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
    <main className="w-full h-fit pt-[112px]">
      <div className="bg-svg-1">
        <div className="md:flex md:w-full">
          <h1 className="px-4 py-8 text-4xl text-pretty sm:px-16 md:w-4/6 md:text-5xl md:py-32 lg:w-3/6 lg:px-22">
            Bienvenido a <b className="title">Inter Q:</b> Tu Recurso Definitivo
            para Preguntas de Entrevista en IT.
          </h1>
          <SwiperHome size={size} />
        </div>
        <h2 className="px-4 text-pretty pb-8 sm:px-16 sm:pt-12 md:text-xl lg:px-22 lg:pt-0">
          ¿Estás listo para destacarte en tu próxima entrevista de trabajo en el
          área de Tecnología de la Información? ¡Has llegado al lugar adecuado!
          En
          <b className="title font-extrabold"> Inter Q</b>, te proporcionamos
          las herramientas y los recursos necesarios para brillar en tus
          entrevistas y asegurar el trabajo de tus sueños en el emocionante
          mundo de la tecnología.
        </h2>
      </div>
      <section className="pt-12 pb-4 px-4 flex flex-col gap-8 sm:px-16 lg:px-22 lg:grid lg:grid-cols-3 lg:gap-4 lg:gap-12 lg:pt-16">
        <LangCard
          langColor={"#f0db4f"}
          lang={"JavaScript"}
          info={
            "JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámica."
          }
          redirect={""}
        />
        <LangCard
          langColor={"#007acc"}
          lang={"TypeScript"}
          info={
            "TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft."
          }
          redirect={""}
        />
        <LangCard
          langColor={"#61DAFB"}
          lang={"React"}
          info={
            "React es una biblioteca front end de código abierto creada por facebook para desarrollar IU y single page application."
          }
          redirect={""}
        />
      </section>
    </main>
  );
}
