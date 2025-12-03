
"use client";

import Link from "next/link";

export function BrevoRecommendation() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-[#F0FAF5] to-white">
      {/* Floating animated bubbles */}
      <div className="absolute top-10 right-24 w-32 h-32 bg-[#0DA56F]/15 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0DA56F]/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-1/2 left-[70%] w-52 h-52 bg-[#0DA56F]/10 rounded-full blur-2xl animate-float-delayed"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div className="z-10 text-center md:text-left">
          <p className="text-[#0DA56F] font-semibold tracking-wider mb-4 uppercase">
            Why EmailEducate Recommends <span className="brevo-auto">Brevo</span>
          </p>
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            The Smarter, Modern Way to<br />
            Grow Your Email Marketing<br />
            With <span className="brevo-auto">Brevo</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            <span className="brevo-auto">Brevo</span> gives you automation, CRM, deliverability, segmentation,
            and analytics in one powerful system. EmailEducate shows you
            exactly how to use these features to achieve long-term, scalable
            results — without complexity.
          </p>
          <ul className="space-y-4 text-gray-800 text-[17px] leading-relaxed text-left inline-block">
            <li className="flex gap-3">
              <span>✔</span> All-in-one platform: Email, SMS, WhatsApp & workflows
            </li>
            <li className="flex gap-3">
              <span>✔</span> Simple automation that beginners can master
            </li>
            <li className="flex gap-3">
              <span>✔</span> Best-in-class inbox placement & deliverability tools
            </li>
            <li className="flex gap-3">
              <span>✔</span> Advanced segmentation and CRM features built-in
            </li>
            <li className="flex gap-3">
              <span>✔</span> More value and affordability than other tools
            </li>
          </ul>
          <div className="mt-10">
            <a
              href="https://www.brevo.com/"
              className="inline-block px-10 py-4 bg-[#0DA56F] text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-[#0c8b5d] transition-all duration-200"
            >
              Start Learning <span className="brevo-auto">Brevo</span>
            </a>
          </div>
        </div>

        {/* RIGHT DECORATIVE VISUAL */}
        <div className="brevo-side-visual hidden md:block">
          <div className="brevo-wave"></div>
          <div className="brevo-icon icon-1">⚡</div>
          <div className="brevo-icon icon-2">📊</div>
          <div className="brevo-icon icon-3">🎯</div>
        </div>
      </div>
    </section>
  );
}
