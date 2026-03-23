import { AppHeader } from "@/components/layout/AppHeader";
import { Mail } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#0a1628" }}>
      <AppHeader />
      <main className="flex-1">

        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "64px 24px 48px", textAlign: "center", borderBottom: "1px solid rgba(13,165,111,0.15)" }}>
          <span style={{ background: "rgba(13,165,111,0.2)", color: "#0DA56F", fontSize: "12px", fontWeight: "700", padding: "5px 16px", borderRadius: "20px", letterSpacing: "1.5px", display: "inline-block", marginBottom: "20px" }}>LEGAL</span>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffffff", marginBottom: "16px" }}>
            Cookie <span style={{ color: "#0DA56F" }}>Policy</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px" }}>Last updated: March 22, 2026</p>
        </div>

        <div className="legal-container">

          <div className="legal-card">
            <h2>What Are Cookies?</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8" }}>
              Cookies are small text files stored on your device to improve your browsing experience. They help websites function properly, load faster, and offer a more personalized experience.
            </p>
          </div>

          <div className="legal-card">
            <h2>How We Use Cookies</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "14px" }}>We use cookies to:</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Remember your preferences", "Improve overall website speed and usability", "Analyze traffic and understand user behavior"].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.85)", fontSize: "15px" }}>
                  <span style={{ color: "#0DA56F", flexShrink: 0 }}>✔</span>{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="legal-card">
            <h2>Types of Cookies We Use</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "12px" }}>
              {[
                { name: "Essential Cookies", desc: "Allow the website to function correctly." },
                { name: "Analytics Cookies", desc: "Help us analyze usage and improve performance." },
                { name: "Preference Cookies", desc: "Store your settings and site preferences." },
              ].map((item, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "10px", padding: "14px 16px", border: "1px solid rgba(13,165,111,0.15)", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "#0DA56F", flexShrink: 0, marginTop: "2px" }}>✔</span>
                  <div>
                    <span style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px" }}>{item.name}: </span>
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px" }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="legal-card">
            <h2>Your Choices</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8" }}>
              You can accept or decline cookies through your browser settings. Most browsers allow you to delete stored cookies or block future cookies if you prefer greater privacy.
            </p>
          </div>

          <div className="legal-card">
            <h2>Contact</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "16px" }}>
              If you have questions about this Cookie Policy, feel free to reach out:
            </p>
            <a href="mailto:contact@emaileducate.online" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff", padding: "10px 18px", borderRadius: "8px", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
              <Mail size={14} /> contact@emaileducate.online
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}