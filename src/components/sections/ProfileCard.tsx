"use client"

import Image from "next/image";
import React from "react";

const ProfileCard = () => (
  <section className="flex flex-col items-center justify-center min-h-[70vh] py-6 text-center">
    {/* 头像 */}
    <Image
      src="/avatar.jpg"
      alt="blues 头像"
      width={240}
      height={240}
      unoptimized
      className="rounded-full shadow-lg mb-4 object-cover border-4 border-white w-[120px] h-[120px] md:w-[240px] md:h-[240px]"
    />

    <h1 className="text-3xl font-bold mb-2">blues</h1>
    <p className="text-gray-500 mb-4">前端工程师 / 学生</p>

    <div className="flex gap-5 justify-center items-center mb-4">
      <a href="https://github.com/mao2006" target="_blank" rel="noopener noreferrer" title="GitHub">
        <img src="/icons/github.svg" className="w-7 h-7 hover:text-black transition" />
      </a>
      <a href="mailto:maojianhui2006@gmail.com" title="Gmail">
        <img src="/icons/gmail.svg" className="w-7 h-7 hover:text-black transition" />
      </a>
      <button
        title="WeChat: blues-id"
        onClick={() => navigator.clipboard.writeText("mjh135246357")}
        className="hover:text-green-500"
      >
        <img src="/icons/wechat.svg" className="w-7 h-7 hover:text-black transition"/>
      </button>
    </div>

    <p className="text-sm text-gray-400">
        Welcome to reach out anytime!
    </p>
    <p className="text-sm text-gray-400">
        I am blues,a lucid dream.
    </p>
  </section>
);

export default React.memo(ProfileCard);