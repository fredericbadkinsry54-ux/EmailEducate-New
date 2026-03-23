"use client";

import { AppHeader } from "@/components/layout/AppHeader";
import { Mail, MessageSquare, Users, HelpCircle } from "lucide-react";

const emailBtn = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  background: "rgba(255,255,255,0.25)",
  border: "2px solid rgba(255,255,255,0.6)",
  color: "#ffffff",
  padding: "10px 18px",
  borderRadius: "8px",
  fontWeight: "700",
  fontSize: "14px",
  textDecoration: "none",
  marginTop: "14px",
} as const;

export default function ContactMe() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#0a1628" }}>
      <AppHeader />
      <main className="flex-1">

        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "64px 24px 48px", textAlign: "center", borderBottom: "1px solid rgba(13,165,111,0.15)" }}>
          <span style={{ background: "rgba(13,165,111,0.2)", color: "#0DA56F", fontSize: "12px", fontWeight: "700", padding: "5px 16px", borderRadius: "20px", letterSpacing: "1.5px", display: "inline-block", marginBottom: "20px" }}>GET IN TOUCH</span>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffffff", marginBottom: "16px" }}>
            Contact <span style={{ color: "#0DA56F" }}>Us</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "580px", margin: "0 auto" }}>
            Whether you need help with email marketing, automation, Brevo setup, or want to collaborate — reach out anytime.
          </p>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Quick Contact Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
            {[
              { icon: <Mail size={20} />, title: "Email Us", value: "contact@emaileducate.online", href: "mailto:contact@emaileducate.online" },
              { icon: <MessageSquare size={20} />, title: "Response Time", value: "Within 24–48 hours", href: null },
              { icon: <Users size={20} />, title: "Collaborations", value: "contact@emaileducate.online", href: "mailto:contact@emaileducate.online" },
              { icon: <HelpCircle size={20} />, title: "Support", value: "contact@emaileducate.online", href: "mailto:contact@emaileducate.online" },
            ].map((card, i) => (
              <div key={i} style={{ background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)", borderRadius: "16px", padding: "20px", boxShadow: "0 8px 24px rgba(13,165,111,0.3)" }}>
                <div style={{ color: "rgba(255,255,255,0.8)", marginBottom: "10px" }}>{card.icon}</div>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>{card.title}</p>
                {card.href ? (
                  <a href={card.href} style={{ color: "#ffffff", fontSize: "13px", fontWeight: "700", textDecoration: "none" }}>{card.value}</a>
                ) : (
                  <p style={{ color: "#ffffff", fontSize: "13px", fontWeight: "700", margin: 0 }}>{card.value}</p>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="contact-grid">

            {/* Left Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Support card */}
              <div className="legal-card">
                <h2>Support & Inquiries</h2>
                <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.7" }}>
                  For technical issues, learning support, or help with your marketing workflow, contact us directly:
                </p>
                <a href="mailto:contact@emaileducate.online" style={emailBtn}>
                  <Mail size={14} /> contact@emaileducate.online
                </a>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", marginTop: "12px", lineHeight: "1.6" }}>
                  Every message is handled personally — no bots, no scripts.
                </p>
              </div>

              {/* How we can help */}
              <div className="legal-card">
                <h2>How We Can Help</h2>
                <ul style={{ listStyle: "none", padding: 0, marginTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Understanding email marketing & automation basics",
                    "Choosing the right tool (especially Brevo)",
                    "Reviewing your campaign setup or deliverability issues",
                    "Learning CRM, segmentation, and workflow automation",
                    "General guidance for your marketing system or strategy",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: "1.6" }}>
                      <span style={{ color: "#ffffff", marginTop: "2px", flexShrink: 0 }}>✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Collaboration */}
              <div className="legal-card">
                <h2>Collaboration & Projects</h2>
                <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.7" }}>
                  We collaborate with creators, marketers, and small teams who want guidance on building better systems powered by tools like <span style={{ color: "#0DA56F", fontWeight: "700" }}>Brevo</span>.
                </p>
                <a href="mailto:contact@emaileducate.online" style={emailBtn}>
                  <Mail size={14} /> contact@emaileducate.online
                </a>
              </div>
            </div>

            {/* Right Column — Form */}
            <div className="legal-card">
              <h2>Send Us a Message</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", marginBottom: "24px", lineHeight: "1.6" }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[
                  { label: "Full Name", type: "text", placeholder: "Your Name" },
                  { label: "Email Address", type: "email", placeholder: "you@example.com" },
                  { label: "Subject", type: "text", placeholder: "e.g., Automation Help, Brevo Setup" },
                ].map((field, i) => (
                  <div key={i}>
                    <label style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: "600", display: "block", marginBottom: "8px" }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} style={{ width: "100%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", padding: "10px 14px", color: "#ffffff", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                  </div>
                ))}
                <div>
                  <label style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: "600", display: "block", marginBottom: "8px" }}>Message</label>
                  <textarea rows={5} placeholder="Tell us how we can help..." style={{ width: "100%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", padding: "10px 14px", color: "#ffffff", fontSize: "14px", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button type="submit" style={{ background: "linear-gradient(135deg, #0DA56F, #08855a)", color: "#ffffff", border: "none", borderRadius: "10px", padding: "14px", fontWeight: "700", fontSize: "16px", cursor: "pointer", boxShadow: "0 4px 14px rgba(13,165,111,0.35)" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}