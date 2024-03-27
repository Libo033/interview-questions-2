"use client";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect } from "react";

const NavigationBar = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (window && localStorage) {
      let savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      }
    }
  }, []);

  return (
    <nav className="w-full h-28 fixed bg-[--nav-background] flex justify-between">
      <div className="w-2/6 h-full flex justify-center items-center md:w-1/6">
        <Image
          className="w-20 h-auto invert-[var(--logo)]"
          src={"/img/qi-nobg.png"}
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="w-fit h-full flex justify-between items-center lg:mr-10">
        <div className="flex justify-center items-center cursor-pointer">
          {theme === "dark" && (
            <LightMode
              onClick={() => setTheme("light")}
              sx={{ fontSize: "28px", color: "var(--foreground)" }}
            />
          )}
          {theme === "light" && (
            <DarkMode
              onClick={() => setTheme("dark")}
              sx={{ fontSize: "28px", color: "var(--foreground)" }}
            />
          )}
        </div>
        <div className="flex justify-center items-center mx-8 cursor-pointer">
          <Menu sx={{ fontSize: "45px", color: "var(--foreground)" }} />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
