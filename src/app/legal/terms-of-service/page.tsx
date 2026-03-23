"use client";

import { AppHeader } from "@/components/layout/AppHeader";
import { Mail } from "lucide-react";

const sections = [
  {
    title: "Introduction",
    content: "Welcome to EmailEducate. By accessing or using this website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use. EmailEducate provides educational content focused on email marketing, automation, CRM, and deliverability to help users build better skills with modern marketing tools.",
  },
  {
    title: "Use of Our Website",
    content: "You agree to use EmailEducate only for lawful purposes.",
    list: ["Misuse or attempt to disrupt website functionality", "Copy or distribute our content without written permission", "Share harmful, misleading, or illegal content"],
    listLabel: "You must not:",
  },
  {
    title: "Intellectual Property Rights",
    content: "All content, graphics, branding, and materials on EmailEducate are protected by copyright laws. You may not reproduce or distribute any content without authorization.",
  },
  {
    title: "Content Disclaimer",
    content: "Our content is for educational and informational purposes only. We do not guarantee that using any tools or strategies discussed on this website will lead to specific results. Your decisions and outcomes are entirely your responsibility.",
  },
  {
    title: "External Links",
    content: "EmailEducate may contain links to third-party platforms like Brevo or other marketing tools. We are not responsible for their content, policies, or services. Visiting third-party websites is at your own discretion.",
  },
  {
    title: "Limitation of Liability",
    content: "EmailEducate shall not be held liable for any direct or indirect damages arising from the use of our website or reliance on our information.",
  },
  {
    title: "Changes to Our Services",
    content: "We may modify, update, or discontinue any part of the website without notice. These Terms may also be updated as needed.",
  },
  {
    title: "Termination",
    content: "We reserve the right to suspend or restrict access to any user who violates these Terms or engages in harmful activity.",
  },
  {
    title: "Governing Law",
    content: "These Terms of Service are governed by the laws of Pakistan (or your operating region). All disputes must be resolved under applicable jurisdiction.",
  },
];

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#0a1628" }}>
      <AppHeader />
      <main className="flex-1">

        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "64px 24px 48px", textAlign: "center", borderBottom: "1px solid rgba(13,165,111,0.15)" }}>
          <span style={{ background: "rgba(13,165,111,0.2)", color: "#0DA56F", fontSize: "12px", fontWeight: "700", padding: "5px 16px", borderRadius: "20px", letterSpacing: "1.5px", display: "inline-block", marginBottom: "20px" }}>LEGAL</span>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffffff", marginBottom: "16px" }}>
            Terms of <span style={{ color: "#0DA56F" }}>Service</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem" }}>Official Version 2026</p>
        </div>

        <div className="legal-container">

          {sections.map((section, i) => (
            <div key={i} className="legal-card">
              <h2>{section.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8" }}>{section.content}</p>
              {section.list && (
                <>
                  {section.listLabel && <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "12px", fontSize: "14px" }}>{section.listLabel}</p>}
                  <ul style={{ listStyle: "none", padding: 0, marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {section.list.map((item, j) => (
                      <li key={j} style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.85)", fontSize: "15px" }}>
                        <span style={{ color: "#e05c5c", flexShrink: 0 }}>✕</span>{item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}

          {/* Contact */}
          <div className="legal-card">
            <h2>Contact Information</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "16px" }}>
              For questions regarding these Terms, contact us at:
            </p>
            <a href="mailto:contact@emaileducate.online" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff", padding: "10px 18px", borderRadius: "8px", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
              <Mail size={14} /> contact@emaileducate.online
            </a>
          </div>

          <div className="legal-card">
            <h2>Last Updated</h2>
            <p style={{ color: "rgba(255,255,255,0.9)" }}>This Terms of Service was last updated on</p>
            <p style={{ color: "#ffffff", fontWeight: "700", marginTop: "6px" }}>March 22, 2026</p>
          </div>

        </div>
      </main>
    </div>
  );
}