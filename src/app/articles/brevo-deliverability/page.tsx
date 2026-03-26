"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppHeader } from "@/components/layout/AppHeader";

const articles = [
    { title: "Domain Warm-Up Plan for New Senders Using Brevo", description: "Follow this step-by-step domain warm-up plan to build sender reputation and maximize email deliverability with Brevo.", link: "/articles/brevo-deliverability/domain-warm-up-plan-for-new-s" },
    { title: "How to Improve Inbox Placement with Brevo", description: "Discover proven strategies to improve your inbox placement rate and avoid spam folders using Brevo's deliverability tools.", link: "/articles/brevo-deliverability/how-to-improve-inbox-placemen" },
    { title: "List Hygiene: How to Clean Your Contact List in Brevo", description: "Learn how to maintain a clean, healthy email list in Brevo by removing inactive subscribers and reducing bounce rates.", link: "/articles/brevo-deliverability/list-hygiene-how-to-clean-your-c" },
    { title: "SPF, DKIM & DMARC Setup Guide for Brevo", description: "A complete guide to setting up SPF, DKIM, and DMARC authentication records for your Brevo account to improve deliverability.", link: "/articles/brevo-deliverability/spf-dkim-dmarc-setup-guide" },
    { title: "Why Emails Land in Spam and How to Fix It with Brevo", description: "Understand the top reasons your emails end up in spam and learn how to use Brevo's tools to fix deliverability issues.", link: "/articles/brevo-deliverability/why-emails-land-in-spam-and-ho" },
];

export default function BrevoDeliverabilityPage() {
    return (
        <div style={{ background: "#0a1628", minHeight: "100vh" }}>
            <AppHeader />
            <header style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "80px 24px 60px", textAlign: "center", borderBottom: "1px solid rgba(13,165,111,0.15)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", overflow: "hidden" }}>
                    <span style={{ fontSize: "220px", fontWeight: "900", color: "rgba(13,165,111,0.04)", letterSpacing: "-6px", userSelect: "none", whiteSpace: "nowrap" }}>BREVO</span>
                </div>
                <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
                    <span style={{ background: "rgba(13,165,111,0.2)", color: "#0DA56F", fontSize: "12px", fontWeight: "700", padding: "5px 16px", borderRadius: "20px", letterSpacing: "1.5px", display: "inline-block", marginBottom: "20px" }}>LEARN BREVO</span>
                    <h1 style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffffff", marginBottom: "16px", lineHeight: "1.2" }}>
                        <span style={{ color: "#0DA56F" }}>Bre</span>vo Deliverability & Inbox Success
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                        Learn how to maximize inbox placement, set up domains, warm up IPs, and keep your list healthy using Brevo.
                    </p>
                </div>
            </header>
            <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {articles.map((article, index) => (
                        <Link key={index} href={article.link} style={{ textDecoration: "none", display: "block" }}>
                            <div style={{ background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)", borderRadius: "18px", padding: "28px", boxShadow: "0 8px 24px rgba(13,165,111,0.3)", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer" }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 32px rgba(13,165,111,0.45)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(13,165,111,0.3)"; }}
                            >
                                <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", marginBottom: "10px", lineHeight: "1.4" }}>{article.title}</h2>
                                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>{article.description}</p>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#ffffff", fontWeight: "600", fontSize: "14px" }}>
                                    <span>Read article</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "48px" }}>
                    <Link href="/" style={{ display: "inline-block", background: "rgba(13,165,111,0.15)", border: "1px solid rgba(13,165,111,0.4)", color: "#0DA56F", padding: "12px 32px", borderRadius: "10px", fontWeight: "600", fontSize: "15px", textDecoration: "none" }}>← Back to Home</Link>
                </div>
            </main>
        </div>
    );
}