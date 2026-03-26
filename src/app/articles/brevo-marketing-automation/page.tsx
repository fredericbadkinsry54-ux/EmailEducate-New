"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppHeader } from "@/components/layout/AppHeader";

const articles = [
    { title: "Abandoned Cart Automation: How to Recover Lost Sales with Brevo", description: "Learn how to set up abandoned cart email automation in Brevo to recover lost sales and boost your ecommerce revenue.", link: "/articles/brevo-marketing-automation/abandoned-cart-automation-reco" },
    { title: "Automated Welcome Series: The Perfect First Impression with Brevo", description: "Create a high-converting automated welcome email series using Brevo to onboard new subscribers and build lasting relationships.", link: "/articles/brevo-marketing-automation/automated-welcome-series-perfe" },
    { title: "Brevo Automation Triggers Explained: How to Start the Right Workflow", description: "Understand all Brevo automation triggers — from sign-ups to purchases — and learn when to use each one effectively.", link: "/articles/brevo-marketing-automation/brevo-automation-triggers-explai" },
    { title: "How to Build Your First Automation Workflow in Brevo", description: "A step-by-step beginner's guide to creating your first marketing automation workflow in Brevo from scratch.", link: "/articles/brevo-marketing-automation/how-to-build-your-first-automati" },
    { title: "How to Use Tags and Segments in Brevo Automation", description: "Master Brevo tags and segments to create highly targeted automated campaigns that reach the right people at the right time.", link: "/articles/brevo-marketing-automation/how-to-use-tags-and-segments-i" },
];

export default function BrevoMarketingAutomationPage() {
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
                        <span style={{ color: "#0DA56F" }}>Bre</span>vo Marketing Automation
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                        Master Brevo automation — build workflows, triggers, drip sequences, and automated journeys that convert.
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