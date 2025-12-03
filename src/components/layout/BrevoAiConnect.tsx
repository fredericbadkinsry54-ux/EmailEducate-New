
'use client';

import Link from "next/link";

export function BrevoAiConnect() {
  return (
    <section className="w-full py-24 bg-[#f2faf5] flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 text-center md:text-left relative overflow-hidden px-5">
      
      {/* Text Block */}
      <div className="max-w-xl z-10">
        <span className="text-sm font-bold text-[#1ba97c] bg-[#e6f9f0] py-2 px-4 rounded-full">
          <span className="brevo-auto">BREVO</span> MCP SERVER
        </span>
        <h2 className="mt-5 text-4xl font-extrabold text-[#0f2a22] leading-tight">
          Connect Your AI Tools <br /> Directly to <span className="brevo-auto">Brevo</span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#24483e]">
          <span className="brevo-auto">Brevo</span>'s MCP Server lets your existing AI assistants talk directly to <span className="brevo-auto">Brevo</span>. 
          This gives your tools the context they need to analyze data, manage contacts, 
          run reports, and handle campaigns — all inside your preferred AI environment.
        </p>
        <h3 className="mt-8 text-xl font-bold text-[#0f2a22]">
          Full <span className="brevo-auto">Brevo</span> functionality at your AI’s fingertips
        </h3>
        <ul className="mt-4 space-y-3 text-left max-w-md mx-auto md:mx-0">
          <li className="flex items-start gap-3 text-[#1c3d34]">
            <span className="text-[#1ba97c] mt-1">✔</span> Contact and company management
          </li>
          <li className="flex items-start gap-3 text-[#1c3d34]">
            <span className="text-[#1ba97c] mt-1">✔</span> Deals, pipelines, and tasks
          </li>
          <li className="flex items-start gap-3 text-[#1c3d34]">
            <span className="text-[#1ba97c] mt-1">✔</span> Contact attributes and smart segmentation
          </li>
          <li className="flex items-start gap-3 text-[#1c3d34]">
            <span className="text-[#1ba97c] mt-1">✔</span> Campaign creation + A/B testing
          </li>
          <li className="flex items-start gap-3 text-[#1c3d34]">
            <span className="text-[#1ba97c] mt-1">✔</span> Cross-channel analytics
          </li>
        </ul>
        <Link 
          href="https://www.brevo.com/features/ai/" 
          target="_blank" 
          className="inline-block mt-8 bg-[#1ba97c] text-white py-3 px-7 rounded-full text-base font-semibold transition hover:bg-[#168a64]"
        >
          Find out more
        </Link>
      </div>

      {/* Animated Visual */}
      <div className="relative w-[350px] h-[350px] mt-16 md:mt-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="brevo-main-button">
            <span>Brevo</span>
          </div>
        </div>
        <div className="absolute top-0 left-[140px] w-[60px] h-[60px] bg-white border-2 border-[#bce7d6] rounded-full animate-orbit" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-[70px] left-[280px] w-[60px] h-[60px] bg-white border-2 border-[#bce7d6] rounded-full animate-orbit" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[240px] left-[260px] w-[60px] h-[60px] bg-white border-2 border-[#bce7d6] rounded-full animate-orbit" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-[300px] left-[100px] w-[60px] h-[60px] bg-white border-2 border-[#bce7d6] rounded-full animate-orbit" style={{animationDelay: '4.5s'}}></div>
      </div>

    </section>
  );
}
