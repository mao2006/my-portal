"use client";

import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import Image from "next/image";

const icons = [
    "/icons/react.svg",
    "/icons/vuedotjs.svg",
    "/icons/nextdotjs.svg",
    "/icons/nodedotjs.svg",
    "/icons/typescript.svg",
    "/icons/javascript.svg",
    "/icons/tailwindcss.svg",
    "/icons/webpack.svg",
    "/icons/vite.svg",
    "/icons/git.svg",
    "/icons/nginx.svg",
    "/icons/docker.svg",
];

const ROW_HEIGHT = 80 as const;

const shuffleIcons = (array: string[]) => {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


export const BackgroundMarquee = () => {
    const [rows,setRows] = useState(1)
    useEffect(() => {
        setRows(Math.round(window.innerHeight / ROW_HEIGHT));
        const handleResize = () => {
          setRows(Math.round(window.innerHeight / ROW_HEIGHT));
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none bg-gray-100 flex flex-col justify-center gap-4">
        {Array.from({ length: rows }).map((_, row) => {
        const shuffledIcons = shuffleIcons(icons);
        return (
            <Marquee
            key={row}
            speed={30 + row * 7}
            direction={row % 2 === 0 ? "left" : "right"}
            gradient={false}
            >
            {shuffledIcons.map((src, idx) => (
                <Image
                    key={src + idx + row}
                    src={src}
                    alt=""
                    width={52}
                    height={52}
                    className="h-[55px] mx-8 opacity-10 drop-shadow select-nonepointer-events-none"
                    draggable={false}
                />
            ))}
            </Marquee>
        );
        })}
    </div>
    );
}