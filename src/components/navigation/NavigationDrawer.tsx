import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationDrawer = () => {
  return (
    <div className="w-72 h-full bg-[--nav-background] flex flex-col justify-between md:w-96">
      <ul className="py-10 px-4 text-[--foreground] flex flex-col gap-6 items-center lg:py-16">
        <li className="title font-bold text-3xl pb-6">
          Inter Q
        </li>
        <li className="text-2xl font-semibold">
          <Link href={"/"}>JavaScript</Link>
        </li>
        <li className="text-2xl font-semibold">
          <Link href={"/"}>TypeScript</Link>
        </li>
        <li className="text-2xl font-semibold">
          <Link href={"/"}>React</Link>
        </li>
      </ul>
      <div className="w-full h-40 flex justify-center items-center">
        <Image
          className="invert-[var(--logo)]"
          src={"/img/qi-nobg.png"}
          alt="logo"
          width={102}
          height={102}
        />
      </div>
    </div>
  );
};

export default NavigationDrawer;
