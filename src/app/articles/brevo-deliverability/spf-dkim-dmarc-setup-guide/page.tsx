'use client';
import Link from "next/link";
import { AppHeader } from "@/components/layout/AppHeader";
export default function ArticlePage() {
  return (
    <div style={{ background: "#0a1628", minHeight: "100vh" }}>
      <AppHeader />
      <div style={{ background: "linear-gradient(135deg,#0a1628,#0d1f3c)", padding: "60px 24px 40px", borderBottom: "1px solid rgba(13,165,111,0.15)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.2rem", fontWeight: "900", color: "#ffffff", lineHeight: "1.3" }}>SPF DKIM and DMARC Setup Guide for Brevo</h1>
          <p style={{ color: "rgba(255,255,255,0.55)", marginTop: "12px" }}>Written by <strong style={{ color: "#0DA56F" }}>Email Educate</strong></p>
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>
        {["Introduction","Why This Matters","Step by Step Guide","Best Practices","Final Verdict"].map((sec,i) => (
          <div key={i} style={{ background: "linear-gradient(135deg,#0DA56F,#08855a)", borderRadius: "18px", padding: "28px", marginBottom: "20px", boxShadow: "0 8px 24px rgba(13,165,111,0.3)" }}>
            <h2 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "800", marginBottom: "14px" }}>{sec}</h2>
            <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: "1.8" }}>This section covers practical insights about SPF DKIM and DMARC Setup Guide for Brevo to help you achieve better email marketing results with Brevo.</p>
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/" style={{ color: "#0DA56F", fontSize: "15px", textDecoration: "none", border: "1px solid rgba(13,165,111,0.4)", padding: "12px 32px", borderRadius: "10px" }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
