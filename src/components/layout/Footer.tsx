"use client";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer style={{
            background: "linear-gradient(180deg, #0a1628 0%, #071020 100%)",
            borderTop: "1px solid rgba(13,165,111,0.15)",
            color: "rgba(255,255,255,0.7)",
        }}>
            {/* Top CTA Bar */}
            <div style={{
                background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)",
                padding: "28px 24px",
                textAlign: "center",
            }}>
                <div style={{ maxWidth: "700px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                    <div style={{ textAlign: "left" }}>
                        <p style={{ color: "#ffffff", fontWeight: "800", fontSize: "18px", margin: 0 }}>Ready to master Brevo?</p>
                        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", margin: 0 }}>Start learning email marketing for free — no credit card needed.</p>
                    </div>
                    <a href="https://www.brevo.com" target="_blank" rel="noopener noreferrer" style={{
                        background: "#ffffff",
                        color: "#0DA56F",
                        padding: "10px 28px",
                        borderRadius: "8px",
                        fontWeight: "700",
                        fontSize: "14px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        whiteSpace: "nowrap",
                    }}>
                        Start Free with Brevo <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            {/* Main Footer */}
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 40px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px" }} className="footer-grid">

                    {/* Brand Column */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                            <Logo className="size-8 text-primary" />
                            <span style={{ fontWeight: "800", fontSize: "20px", color: "#ffffff" }}>EmailEducate</span>
                        </div>
                        <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgba(255,255,255,0.6)", marginBottom: "20px", maxWidth: "260px" }}>
                            Your free resource for mastering Brevo and email marketing — from campaigns to automation, CRM, and beyond.
                        </p>

                        {/* Trust badges */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                            {["Brevo Affiliate Partner", "100% Free Educational Content", "No Spam — Ever"].map((t, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span style={{ color: "#0DA56F", fontSize: "12px" }}>✔</span>
                                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{t}</span>
                                </div>
                            ))}
                        </div>

                        {/* Social */}
                        <div style={{ display: "flex", gap: "10px" }}>
                            {[
                                { href: "https://www.facebook.com/profile.php?id=61584705578803", icon: <Facebook size={16} /> },
                                { href: "https://www.instagram.com/emaileducate/", icon: <Instagram size={16} /> },
                            ].map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                                    width: "36px", height: "36px",
                                    background: "rgba(13,165,111,0.15)",
                                    border: "1px solid rgba(13,165,111,0.3)",
                                    borderRadius: "8px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#0DA56F",
                                    transition: "0.25s ease",
                                    textDecoration: "none",
                                }}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "20px" }}>
                            Learn Brevo
                        </h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                            {[
                                { label: "Email Campaigns", href: "/articles/brevo-email-campaigns" },
                                { label: "Marketing Automation", href: "/articles/brevo-marketing-automation" },
                                { label: "Inbox & Deliverability", href: "/articles/brevo-deliverability" },
                                { label: "CRM & Contacts", href: "/articles/brevo-crm-contacts" },
                                { label: "Tools Comparison", href: "/articles/tools-comparison" },
                            ].map((l, i) => (
                                <li key={i}>
                                    <a href={l.href} style={{
                                        color: "rgba(255,255,255,0.6)",
                                        fontSize: "14px",
                                        textDecoration: "none",
                                        transition: "0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                    }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0DA56F"; (e.currentTarget as HTMLElement).style.paddingLeft = "4px"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "20px" }}>
                            Legal
                        </h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                            {[
                                { label: "About Us", href: "/legal/about-us" },
                                { label: "Affiliate Disclosure", href: "/legal/affiliate-disclosure" },
                                { label: "Contact Us", href: "/legal/contact-us" },
                                { label: "Disclaimer", href: "/legal/disclaimer" },
                                { label: "Privacy Policy", href: "/legal/privacy-policy" },
                                { label: "Terms of Service", href: "/legal/terms-of-service" },
                                { label: "Cookie Policy", href: "/legal/cookie-policy" },
                            ].map((l, i) => (
                                <li key={i}>
                                    <a href={l.href} style={{
                                        color: "rgba(255,255,255,0.6)",
                                        fontSize: "14px",
                                        textDecoration: "none",
                                        transition: "0.2s ease",
                                    }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0DA56F"; (e.currentTarget as HTMLElement).style.paddingLeft = "4px"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "20px" }}>
                            Stay Updated
                        </h3>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "16px", lineHeight: "1.6" }}>
                            Get weekly Brevo tutorials and email marketing tips — free.
                        </p>
                        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                style={{
                                    background: "rgba(255,255,255,0.07)",
                                    border: "1px solid rgba(13,165,111,0.3)",
                                    borderRadius: "8px",
                                    padding: "10px 14px",
                                    color: "#ffffff",
                                    fontSize: "14px",
                                    outline: "none",
                                    width: "100%",
                                }}
                            />
                            <button type="submit" style={{
                                background: "linear-gradient(135deg, #0DA56F, #08855a)",
                                color: "#ffffff",
                                border: "none",
                                borderRadius: "8px",
                                padding: "10px 20px",
                                fontWeight: "600",
                                fontSize: "14px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "6px",
                                transition: "0.25s ease",
                            }}>
                                Subscribe <Mail size={14} />
                            </button>
                        </form>
                        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "10px" }}>
                            No spam. Unsubscribe anytime.</p>
                        
                        {/* Contact Email */}
                        <div style={{
                            marginTop: "20px",
                            padding: "12px 14px",
                            background: "rgba(13,165,111,0.08)",
                            border: "1px solid rgba(13,165,111,0.2)",
                            borderRadius: "10px",
                        }}>
                            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: "0 0 4px" }}>Questions? Email us:</p>
                            <a href="mailto:contact@emaileducate.online" style={{
                                color: "#0DA56F",
                                fontSize: "13px",
                                fontWeight: "600",
                                textDecoration: "none",
                            }}>contact@emaileducate.online</a>
                        </div>
                        <p style={{ display: "none" }}>
                        </p>


                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    marginTop: "48px",
                    paddingTop: "24px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                }}>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
                        &copy; {new Date().getFullYear()} EmailEducate. All Rights Reserved.
                    </p>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
                        Built with ❤️ for email marketers — powered by{" "}
                        <a href="https://www.brevo.com" target="_blank" rel="noopener noreferrer" style={{ color: "#0DA56F", textDecoration: "none", fontWeight: "600" }}>Brevo</a>
                    </p>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                }
                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
            `}</style>
        </footer>
    );
}