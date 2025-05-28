"use client"
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const launchDate = new Date("2025-05-27T00:00:00");
  const [days, setDays] = useState(0);

  useEffect(() => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - launchDate.getTime()) / (1000 * 60 * 60 * 24));
    setDays(diff);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-full text-center max-w-[95vw] px-4 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        👋 欢迎来到我的服务器门户网站
      </h1>
      <p className="text-lg text-gray-600 mb-3">
        这里是我的个人技术与服务导航站点，集合了博客、项目、服务监控等所有入口。
      </p>
      <p className="text-lg text-gray-500 mb-6">
        Welcome to blues&apos;s personal portal — your one-stop entry for my blog, projects, server monitor, and more.
      </p>
      <p className="text-gray-400 text-sm mb-8">
        —— 一切工程与探索的起点，欢迎常来看看！<br />
        — The starting point of all my tech journeys. Feel free to explore!
      </p>
      <div className="text-xs text-gray-400 mt-8">
        已运行 <span className="font-semibold">{days}</span> 天
        &nbsp;|&nbsp;
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-500 ml-1"
        >
          浙ICP备202406XXXX号
        </a>
      </div>
    </section>
  );
}

export default React.memo(HomePage)