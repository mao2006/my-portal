import React from "react";
import "swiper/css";

const ServerIntro = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full text-center px-4">
    <h2 className="text-2xl font-bold mb-8">服务导航</h2>
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto overflow-y-auto py-2"
    style={{ maxHeight: "75vh" }}>
        <a href="https://blog.imjh.xyz" target="_blank" rel="noopener" className="rounded-lg border p-4 hover:shadow-lg transition">
        <div className="flex items-center justify-center mb-2">
            <img src="/icons/blogger.svg" alt="Blog" className="w-8 h-8 mr-2" />
            <span className="font-semibold">博客</span>
        </div>
        <p className="text-sm text-gray-500">个人博客/学习记录</p>
        </a>
        <a href="https://demo.imjh.xyz" target="_blank" rel="noopener" className="rounded-lg border p-4 hover:shadow-lg transition">
        <div className="flex items-center justify-center mb-2">
            <img src="/icons/javascript.svg" alt="demo演示" className="w-8 h-8 mr-2" />
            <span className="font-semibold">demo演示</span>
        </div>
        <p className="text-sm text-gray-500">演示开发中的项目</p>
        </a>
        <a
        href="ts3server://ts.imjh.xyz"
        className="rounded-lg border p-4 hover:shadow-lg transition"
        title="点击打开 Teamspeak 客户端，或手动输入域名 ts.imjh.xyz"
        >
        <div className="flex items-center justify-center mb-2">
            <img src="/icons/teamspeak.svg" alt="Teamspeak" className="w-8 h-8 mr-2" />
            <span className="font-semibold">Teamspeak 服务器</span>
        </div>
        <p className="text-sm text-gray-500">语音服务器（域名：ts.imjh.xyz）</p>
        </a>
        <a
        className="rounded-lg border border-dashed border-gray-300 p-4 bg-gray-50 text-gray-400 cursor-not-allowed flex flex-col items-center justify-center hover:shadow-none transition select-none"
        tabIndex={-1}
        aria-disabled="true"
        >
        <div className="flex items-center justify-center mb-2 opacity-70">
            <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m0-4h.01M12 8v.01M12 16v.01m-6-6h.01M18 12h.01M12 6V4m0 16v-2m4.24-4.24l1.42-1.42M7.76 7.76l-1.42-1.42" />
            </svg>
            <span className="font-semibold">未完待续</span>
        </div>
        <p className="text-sm text-gray-400">更多服务即将上线</p>
        </a>
    </div>
    </section>
  );
}

export default React.memo(ServerIntro)