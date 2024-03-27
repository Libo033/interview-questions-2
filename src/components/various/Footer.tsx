import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-fit mt-8 border-t rounded-t-3xl border-t-[--border1] py-6 px-6 sm:flex sm:justify-between">
      <div className="flex justify-center pb-4 sm:pb-0">
        <a
          className="title font-bold"
          href="https://valentinlibonat33.vercel.app/"
          rel="noreferrer nofollow"
          target="_blank"
        >
          VISITA MI PAGINA WEB
        </a>
      </div>
      <div className="flex justify-end border-t border-t-[--border1] sm:border-0">
        <p className="pt-2 text-sm title sm:pt-0">
          Created by Valentin Libonati ®
        </p>
      </div>
    </footer>
  );
};

export default Footer;
