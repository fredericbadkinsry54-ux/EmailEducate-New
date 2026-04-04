"use client";

import { Logo } from "@/components/Logo";
import Link from "next/link";
import { useState } from "react";

const navLinkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.8)",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  whiteSpace: "nowrap",
};

const dropBtnStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "rgba(255,255,255,0.8)",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  padding: "8px 14px",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  whiteSpace: "nowrap",
};

export function AppHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [tutorialsOpen, setTutorialsOpen] = useState(false);

  const dropMenu = (open: boolean): React.CSSProperties => ({
    position: "absolute",
    top: "calc(100% + 10px)",
    left: "50%",
    transform: open ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-6px)",
    width: "220px",
    background: "#0d1f3c",
    border: "1px solid rgba(13,165,111,0.25)",
    borderRadius: "12px",
    padding: "8px 0",
    boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
    opacity: open ? 1 : 0,
    pointerEvents: open ? "auto" : "none",
    transition: "opacity 0.25s ease, transform 0.25s ease",
    zIndex: 200,
  });

  return (
    <>
      <header style={{ background: "#0a1628", borderBottom: "1px solid rgba(255,255,255,0.07)", position: "sticky", top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
            <Logo className="size-8" />
            <span style={{ fontWeight: "800", fontSize: "18px", color: "#ffffff" }}>EmailEducate</span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2px" }} className="desktop-nav">

            <Link href="/" style={navLinkStyle}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0DA56F"; (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              Home
            </Link>

            <Link href="/legal/about-us" style={navLinkStyle}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0DA56F"; (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              About
            </Link>

            {/* Tools Dropdown */}
            <div style={{ position: "relative" }}
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}>
              <button style={dropBtnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0DA56F"; (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                Tools Comparison
                <span style={{ fontSize: "9px", display: "inline-block", transition: "transform 0.25s ease", transform: toolsOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
              </button>
              <div style={dropMenu(toolsOpen)}>
                {[
                  { label: "Brevo vs Mailchimp", href: "/articles/tools-comparison/brevo-vs-mailchimp-2026" },
                  { label: "Brevo vs MailerLite", href: "/articles/tools-comparison/brevo-vs-mailerlite-2026" },
                  { label: "Brevo vs ConvertKit", href: "/articles/tools-comparison/brevo-vs-convertkit-2026" },
                  { label: "Brevo vs GetResponse", href: "/articles/tools-comparison/brevo-vs-getresponse-2026" },
                  { label: "Brevo vs ActiveCampaign", href: "/articles/tools-comparison/brevo-vs-activecampaign-2026" },
                ].map((item, i) => (
                  <Link key={i} href={item.href} style={{ display: "block", padding: "10px 18px", fontSize: "13px", color: "rgba(255,255,255,0.8)", textDecoration: "none", transition: "0.15s ease" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.12)"; (e.currentTarget as HTMLElement).style.color = "#0DA56F"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"; }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tutorials Dropdown */}
            <div style={{ position: "relative" }}
              onMouseEnter={() => setTutorialsOpen(true)}
              onMouseLeave={() => setTutorialsOpen(false)}>
              <button style={dropBtnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0DA56F"; (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                Tutorials
                <span style={{ fontSize: "9px", display: "inline-block", transition: "transform 0.25s ease", transform: tutorialsOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
              </button>
              <div style={dropMenu(tutorialsOpen)}>
                {[
                  { label: "Email Campaigns", href: "/articles/brevo-email-campaigns" },
                  { label: "Marketing Automation", href: "/articles/brevo-marketing-automation" },
                  { label: "CRM & Contacts", href: "/articles/brevo-crm-contacts" },
                  { label: "Inbox Placement", href: "/articles/brevo-deliverability" },
                ].map((item, i) => (
                  <Link key={i} href={item.href} style={{ display: "block", padding: "10px 18px", fontSize: "13px", color: "rgba(255,255,255,0.8)", textDecoration: "none", transition: "0.15s ease" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.12)"; (e.currentTarget as HTMLElement).style.color = "#0DA56F"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"; }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/legal/contact-us" style={navLinkStyle}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0DA56F"; (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              Contact
            </Link>

            {/* CTA Button */}
            <a href="https://get.brevo.com/4o18rd1h33kd" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px", background: "#0DA56F", color: "#ffffff", padding: "9px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", textDecoration: "none", whiteSpace: "nowrap", transition: "0.2s ease" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#08855a"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#0DA56F"}>
              Try Brevo Free
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle"
            style={{ display: "none", background: "none", border: "none", color: "#ffffff", fontSize: "22px", cursor: "pointer", padding: "8px" }}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{ background: "#0d1f3c", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/legal/about-us" },
              { label: "Email Campaigns", href: "/articles/brevo-email-campaigns" },
              { label: "Marketing Automation", href: "/articles/brevo-marketing-automation" },
              { label: "CRM & Contacts", href: "/articles/brevo-crm-contacts" },
              { label: "Deliverability", href: "/articles/brevo-deliverability" },
              { label: "Tools Comparison", href: "/articles/tools-comparison" },
              { label: "Contact", href: "/legal/contact-us" },
            ].map((item, i) => (
              <Link key={i} href={item.href} onClick={() => setMobileOpen(false)}
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", textDecoration: "none", padding: "10px 12px", borderRadius: "8px", transition: "0.15s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.12)"; (e.currentTarget as HTMLElement).style.color = "#0DA56F"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; }}>
                {item.label}
              </Link>
            ))}
            <a href="https://get.brevo.com/4o18rd1h33kd" target="_blank" rel="noopener noreferrer" style={{ marginTop: "8px", background: "#0DA56F", color: "#ffffff", padding: "12px", borderRadius: "8px", fontWeight: "700", textAlign: "center", textDecoration: "none" }}>
              Try Brevo Free →
            </a>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}