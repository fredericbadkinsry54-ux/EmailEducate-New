import { AppHeader } from "@/components/layout/AppHeader";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function AffiliateDisclosurePage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#0a1628" }}>
      <AppHeader />
      <main className="flex-1">

        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "64px 24px 48px", textAlign: "center", borderBottom: "1px solid rgba(13,165,111,0.15)" }}>
          <span style={{ background: "rgba(13,165,111,0.2)", color: "#0DA56F", fontSize: "12px", fontWeight: "700", padding: "5px 16px", borderRadius: "20px", letterSpacing: "1.5px", display: "inline-block", marginBottom: "20px" }}>LEGAL</span>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffffff", marginBottom: "16px" }}>
            Affiliate <span style={{ color: "#0DA56F" }}>Disclosure</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem" }}>
            At <span style={{ fontWeight: "700", color: "#ffffff" }}>EmailEducate</span>, transparency matters.
          </p>
        </div>

        <div className="legal-container">

          <div className="legal-card">
            <h2>How This Website Earns</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8" }}>
              Some articles, guides, and pages on this website may contain affiliate links. This means that if you click a link and make a purchase, we may earn a small commission — at no extra cost to you.
            </p>
          </div>

          <div className="legal-card">
            <h2>Our Recommendation Policy</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "14px" }}>
              We only recommend tools and platforms that we personally test, use, and trust. Recommendations are based on:
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Real-world testing and hands-on experience",
                "Honesty, accuracy, and long-term reliability",
                "Features that genuinely help users grow",
                "No sponsored reviews or paid promotions",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.85)", fontSize: "15px" }}>
                  <span style={{ color: "#0DA56F", flexShrink: 0 }}>✔</span>{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="legal-card">
            <h2>Brevo Disclosure</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8", marginBottom: "12px" }}>
              We frequently recommend <span style={{ color: "#0DA56F", fontWeight: "700" }}>Brevo</span> because it is one of the most reliable and transparent platforms for email marketing, automation, CRM, and deliverability.
            </p>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8" }}>
              Whether we earn a commission or not, our goal is always to provide unbiased, experience-based guidance that genuinely helps you improve your marketing.
            </p>
          </div>

          <div className="legal-card">
            <h2>Your Trust Comes First</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8" }}>
              Affiliate commissions help support the time and effort it takes to create free tutorials, guides, comparisons, and resources. But they never influence our opinions or recommendations.
            </p>
          </div>

          <div className="legal-card">
            <h2>If You Have Questions</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8", marginBottom: "16px" }}>
              If anything is unclear or you'd like to know more about how affiliate links are used, feel free to reach out anytime:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="mailto:contact@emaileducate.online" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff", padding: "10px 18px", borderRadius: "8px", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
                <Mail size={14} /> contact@emaileducate.online
              </a>
              <Link href="/legal/contact-us" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", padding: "10px 18px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
                Visit Contact Page →
              </Link>
            </div>
          </div>

          <p style={{ fontSize: "13px", textAlign: "center", color: "rgba(255,255,255,0.35)", marginTop: "32px", fontStyle: "italic" }}>
            Last updated: March 22, 2026
          </p>

        </div>
      </main>
    </div>
  );
}