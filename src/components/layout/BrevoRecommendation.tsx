"use client";

import Link from "next/link";

export function BrevoRecommendation() {
  return (
    <section className="relative overflow-hidden py-28" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}>
      {/* Floating bubbles */}
      <div className="absolute top-10 right-24 w-32 h-32 rounded-full blur-xl animate-pulse-slow" style={{ background: "rgba(13,165,111,0.15)" }}></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-xl animate-float" style={{ background: "rgba(13,165,111,0.18)" }}></div>
      <div className="absolute top-1/2 left-[70%] w-52 h-52 rounded-full blur-2xl animate-float-delayed" style={{ background: "rgba(13,165,111,0.1)" }}></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div className="z-10 text-center md:text-left">
          <p style={{ color: "#0DA56F", fontWeight: "600", letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase", fontSize: "13px" }}>
            Why EmailEducate Recommends <span className="brevo-auto">Brevo</span>
          </p>
          <h2 className="text-5xl font-extrabold leading-tight mb-6" style={{ color: "#ffffff" }}>
            The Smarter, Modern Way to<br />
            Grow Your Email Marketing<br />
            With <span className="brevo-auto">Brevo</span>
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            <span className="brevo-auto">Brevo</span> gives you automation, CRM, deliverability, segmentation,
            and analytics in one powerful system. EmailEducate shows you exactly how to
            use these features to achieve long-term, scalable results — without complexity.
          </p>
          <ul className="space-y-4 text-[17px] leading-relaxed text-left inline-block" style={{ color: "rgba(255,255,255,0.85)" }}>
            <li className="flex gap-3">
              <span style={{ color: "#0DA56F" }}>✔</span> All-in-one platform: Email, SMS, WhatsApp & workflows
            </li>
            <li className="flex gap-3">
              <span style={{ color: "#0DA56F" }}>✔</span> Simple automation that beginners can master
            </li>
            <li className="flex gap-3">
              <span style={{ color: "#0DA56F" }}>✔</span> Best-in-class inbox placement & deliverability tools
            </li>
            <li className="flex gap-3">
              <span style={{ color: "#0DA56F" }}>✔</span> Advanced segmentation and CRM features built-in
            </li>
            <li className="flex gap-3">
              <span style={{ color: "#0DA56F" }}>✔</span> More value and affordability than other tools
            </li>
          </ul>
          <div className="mt-10">
            <a
              href="https://www.brevo.com/"
              style={{
                display: "inline-block",
                padding: "14px 40px",
                background: "#0DA56F",
                color: "#ffffff",
                fontSize: "1.1rem",
                fontWeight: "600",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(13,165,111,0.4)",
                textDecoration: "none",
                transition: "0.25s ease",
              }}
            >
              Start Learning Brevo
            </a>
          </div>
        </div>

        {/* RIGHT FEATURE CARDS */}
        <div className="brevo-feature-cards hidden md:grid">
          <div className="feature-card">
            <h3>Smart Automation</h3>
            <p>Create automated journeys, triggers, and workflows that scale effortlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Inbox Performance</h3>
            <p>Improve deliverability with warm-up tools, dedicated IPs, and inbox analytics.</p>
          </div>
          <div className="feature-card">
            <h3>CRM & Segmentation</h3>
            <p>Organize contacts, build smart segments, and personalize communication.</p>
          </div>
        </div>
      </div>
    </section>
  );
}