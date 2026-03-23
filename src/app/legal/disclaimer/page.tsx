import { AppHeader } from "@/components/layout/AppHeader";
import { Mail } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#0a1628" }}>
      <AppHeader />
      <main className="flex-1">

        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "64px 24px 48px", textAlign: "center", borderBottom: "1px solid rgba(13,165,111,0.15)" }}>
          <span style={{ background: "rgba(13,165,111,0.2)", color: "#0DA56F", fontSize: "12px", fontWeight: "700", padding: "5px 16px", borderRadius: "20px", letterSpacing: "1.5px", display: "inline-block", marginBottom: "20px" }}>LEGAL</span>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffffff", marginBottom: "16px" }}>
            Dis<span style={{ color: "#0DA56F" }}>claimer</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem" }}>
            The content on EmailEducate is for educational and informational purposes only.
          </p>
        </div>

        <div className="legal-container">

          {[
            {
              title: "Educational & Informational Content",
              text: "The content on EmailEducate is created for educational and informational purposes only. All tutorials, reviews, and marketing insights are designed to guide and educate readers — not to replace professional advice.",
            },
            {
              title: "No Guarantees of Results",
              text: "While we aim to provide honest strategies and useful reviews, marketing and automation results vary based on your implementation, effort, and experience. EmailEducate does not guarantee earnings, business growth, or any specific outcomes.",
            },
            {
              title: "External Links and Third-Party Tools",
              text: "Our articles may include links to third-party tools such as Brevo, Systeme.io, Mailchimp, or other platforms. We do not control these websites and are not responsible for their content, policies, or services.",
            },
            {
              title: "Financial & Legal Disclaimer",
              text: "EmailEducate is not a financial, legal, or professional advisory platform. For any financial or legal decisions, always consult a licensed professional before acting on information shared on this website.",
            },
            {
              title: "Your Responsibility",
              text: "By using this website, you acknowledge that you are responsible for your own actions, decisions, and outcomes. EmailEducate shall not be held liable for any direct or indirect damages arising from the use of our content or recommendations.",
            },
          ].map((card, i) => (
            <div key={i} className="legal-card">
              <h2>{card.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8" }}>{card.text}</p>
            </div>
          ))}

          {/* Contact */}
          <div className="legal-card">
            <h2>Questions?</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "16px" }}>
              If you have any questions about this Disclaimer, feel free to reach out:
            </p>
            <a href="mailto:contact@emaileducate.online" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff", padding: "10px 18px", borderRadius: "8px", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
              <Mail size={14} /> contact@emaileducate.online
            </a>
          </div>

          <div className="legal-card">
            <h2>Last Updated</h2>
            <p style={{ color: "rgba(255,255,255,0.85)" }}>This disclaimer was last updated on</p>
            <p style={{ color: "#ffffff", fontWeight: "700", marginTop: "6px" }}>March 22, 2026</p>
          </div>

        </div>
      </main>
    </div>
  );
}