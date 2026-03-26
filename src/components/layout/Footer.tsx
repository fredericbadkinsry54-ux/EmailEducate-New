"use client";
import { Logo } from "@/components/Logo";
import { Mail, ArrowRight, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer style={{ background: "linear-gradient(180deg, #0a1628 0%, #071020 100%)", borderTop: "1px solid rgba(13,165,111,0.12)" }}>

            {/* CTA Bar */}
            <div style={{ background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)", padding: "22px 32px" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                    <div>
                        <p style={{ color: "#ffffff", fontWeight: "800", fontSize: "17px", margin: 0, lineHeight: "1.3" }}>Ready to master Brevo?</p>
                        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", margin: "4px 0 0" }}>Start learning email marketing for free — no credit card needed.</p>
                    </div>
                    <a href="https://www.brevo.com" target="_blank" rel="noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#ffffff", color: "#0DA56F", padding: "10px 22px", borderRadius: "9px", fontWeight: "700", fontSize: "14px", textDecoration: "none", whiteSpace: "nowrap", transition: "0.2s ease" }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}>
                        Start Free with Brevo <ArrowRight size={15} />
                    </a>
                </div>
            </div>

            {/* Main */}
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 32px 40px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.3fr", gap: "48px" }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                            <Logo className="size-8" />
                            <span style={{ fontWeight: "800", fontSize: "19px", color: "#ffffff" }}>EmailEducate</span>
                        </div>
                        <p style={{ fontSize: "13px", lineHeight: "1.75", color: "rgba(255,255,255,0.55)", marginBottom: "18px", maxWidth: "240px" }}>
                            Your free resource for mastering Brevo and email marketing — from campaigns to automation, CRM, and beyond.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "22px" }}>
                            {["100% Free Educational Content", "No Spam — Ever"].map((t, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span style={{ color: "#0DA56F", fontSize: "11px" }}>✔</span>
                                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>{t}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: "flex", gap: "8px" }}>
                            {[
                                { href: "https://www.facebook.com/profile.php?id=61584705578803", icon: <Facebook size={15} /> },
                                { href: "https://www.instagram.com/emaileducate/", icon: <Instagram size={15} /> },
                            ].map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                    style={{ width: "34px", height: "34px", background: "rgba(13,165,111,0.12)", border: "1px solid rgba(13,165,111,0.25)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#0DA56F", textDecoration: "none", transition: "0.2s ease" }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.25)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Learn Brevo */}
                    <div>
                        <h3 style={{ color: "#ffffff", fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "18px" }}>Learn Brevo</h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                            {[
                                { label: "Email Campaigns", href: "/articles/brevo-email-campaigns" },
                                { label: "Marketing Automation", href: "/articles/brevo-marketing-automation" },
                                { label: "Inbox & Deliverability", href: "/articles/brevo-deliverability" },
                                { label: "CRM & Contacts", href: "/articles/brevo-crm-contacts" },
                                { label: "Tools Comparison", href: "/articles/tools-comparison" },
                            ].map((l, i) => (
                                <li key={i}>
                                    <Link href={l.href}
                                        style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", textDecoration: "none", transition: "0.2s ease", display: "inline-block" }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0DA56F"; (e.currentTarget as HTMLElement).style.paddingLeft = "4px"; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 style={{ color: "#ffffff", fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "18px" }}>Legal</h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
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
                                    <Link href={l.href}
                                        style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", textDecoration: "none", transition: "0.2s ease", display: "inline-block" }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0DA56F"; (e.currentTarget as HTMLElement).style.paddingLeft = "4px"; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 style={{ color: "#ffffff", fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "18px" }}>Stay Updated</h3>
                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginBottom: "14px", lineHeight: "1.7" }}>
                            Get weekly Brevo tutorials and email marketing tips — free.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
                            <input type="email" placeholder="Enter your email"
                                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px", padding: "10px 14px", color: "#ffffff", fontSize: "13px", outline: "none", width: "100%", boxSizing: "border-box" }} />
                            <button
                                style={{ background: "linear-gradient(135deg, #0DA56F, #08855a)", color: "#ffffff", border: "none", borderRadius: "8px", padding: "10px", fontWeight: "600", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", transition: "0.2s ease" }}
                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.9"}
                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                                Subscribe <Mail size={13} />
                            </button>
                        </div>
                        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>No spam. Unsubscribe anytime.</p>
                        <div style={{ background: "rgba(13,165,111,0.08)", border: "1px solid rgba(13,165,111,0.18)", borderRadius: "10px", padding: "12px 14px" }}>
                            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", margin: "0 0 3px" }}>Questions? Email us:</p>
                            <a href="mailto:contact@emaileducate.online"
                                style={{ color: "#0DA56F", fontSize: "12px", fontWeight: "600", textDecoration: "none" }}>
                                contact@emaileducate.online
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ marginTop: "48px", paddingTop: "22px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", margin: 0 }}>
                        © {new Date().getFullYear()} EmailEducate. All Rights Reserved.
                    </p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", margin: 0 }}>
                        Built with ❤️ for email marketers — powered by{" "}
                        <a href="https://www.brevo.com" target="_blank" rel="noopener noreferrer"
                            style={{ color: "#0DA56F", textDecoration: "none", fontWeight: "600" }}>Brevo</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}