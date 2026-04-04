"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { lessons } from "@/lib/lessons";
import { ToolIntegrations } from "@/components/layout/ToolIntegrations";
import { Pricing } from "@/components/layout/Pricing";
import { CustomerSuccess } from "@/components/layout/CustomerSuccess";
import { BrevoCategories } from "@/components/layout/BrevoCategories";
import { BrevoEnterprise } from "@/components/layout/BrevoEnterprise";
import { BrevoRecommendation } from "@/components/layout/BrevoRecommendation";
import { BrevoAiConnect } from "@/components/layout/BrevoAiConnect";
import { Marketplace } from "@/components/layout/Marketplace";
import { AppHeader } from "@/components/layout/AppHeader";
import { ScrollAnimations } from "@/components/layout/ScrollAnimations";

const heroStyle = `
  @keyframes wordPop {
    0% { opacity: 0; transform: scale(0.7) translateY(20px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes fadeUpHero {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export default function Home() {
    const headlineWords = [
        { text: "Grow", delay: "0.3s" },
        { text: "Smarter", delay: "0.5s" },
        { text: "Email", delay: "0.7s" },
        { text: "Marketing", delay: "0.9s" },
        { text: "with", delay: "1.1s" },
        { text: "Brevo’s", delay: "1.3s", isBrvo: true },
        { text: "All-in-One", delay: "1.5s" },
        { text: "Tools", delay: "1.7s" },
    ];

    return (
        <div className="flex flex-col min-h-screen" style={{ background: "#0a1628" }}>
            <style>{heroStyle}</style>
            <AppHeader />
            <ScrollAnimations />
            <main className="flex-1">

            {/* HERO SECTION */}
            <section style={{
                background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a2040 100%)",
                padding: "110px 20px 90px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
                    <span style={{ fontSize: "280px", fontWeight: "900", color: "rgba(13,165,111,0.05)", letterSpacing: "-8px", userSelect: "none", whiteSpace: "nowrap" }}>BREVO</span>
                </div>

                <div style={{ maxWidth: "850px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <span style={{
                        display: "inline-block",
                        background: "rgba(13,165,111,0.2)",
                        color: "#0DA56F",
                        fontSize: "12px",
                        fontWeight: "700",
                        padding: "6px 18px",
                        borderRadius: "20px",
                        letterSpacing: "1.5px",
                        marginBottom: "28px",
                        border: "1px solid rgba(13,165,111,0.3)",
                        animation: "fadeUpHero 0.6s ease forwards",
                        opacity: 0,
                        animationDelay: "0.1s",
                    }}>
                        MASTER EMAIL MARKETING TODAY
                    </span>

                    <h1 style={{
                        fontSize: "3.1rem",
                        lineHeight: "1.35",
                        fontWeight: "800",
                        maxWidth: "900px",
                        margin: "0 auto 1.5rem auto",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "14px",
                    }}>
                        {headlineWords.map((word, i) => (
                            <span key={i} style={{
                                color: "#ffffff",
                                opacity: 0,
                                animation: `wordPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                                animationDelay: word.delay,
                                display: "inline-block",
                            }}>
                                {word.isBrvo ? (
                                    <>
                                        <span className="brevo-auto">{word.text}</span>
                                    </>
                                ) : word.text}
                            </span>
                        ))}
                    </h1>

                    <p style={{
                        maxWidth: "680px",
                        margin: "0 auto 36px",
                        color: "rgba(255,255,255,0.75)",
                        fontSize: "1.1rem",
                        lineHeight: "1.6",
                        animation: "fadeUpHero 0.7s ease forwards",
                        opacity: 0,
                        animationDelay: "2.0s",
                    }}>
                        From email campaigns to automation and CRM, Brevo helps marketers manage contacts, personalize communication, and streamline workflows without unnecessary complexity.
                    </p>

                    <div style={{
                        display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center", marginBottom: "48px",
                        animation: "fadeUpHero 0.7s ease forwards", opacity: 0, animationDelay: "2.3s",
                    }}>
                        <a href="https://get.brevo.com/4o18rd1h33kd" target="_blank" rel="noopener noreferrer" style={{ background: "#0DA56F", color: "#ffffff", padding: "13px 34px", borderRadius: "10px", fontWeight: "600", fontSize: "1rem", textDecoration: "none", boxShadow: "0 4px 16px rgba(13,165,111,0.35)" }}>
                            Start For Free
                        </a>
                        <Link href="/articles/tools-comparison/brevo-vs-mailchimp-2026" style={{ background: "rgba(255,255,255,0.1)", color: "#ffffff", padding: "13px 34px", borderRadius: "10px", fontWeight: "600", fontSize: "1rem", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", gap: "8px" }}>
                            Brevo Review <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div style={{
                        display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px",
                        animation: "fadeUpHero 0.7s ease forwards", opacity: 0, animationDelay: "2.6s",
                    }}>
                        {["Free Tutorials", "No Signup Required", "Always Updated", "Brevo Certified"].map((badge, i) => (
                            <span key={i} style={{ background: "rgba(13,165,111,0.15)", color: "#0DA56F", fontSize: "12px", fontWeight: "600", padding: "5px 14px", borderRadius: "20px", border: "1px solid rgba(13,165,111,0.25)" }}>✔ {badge}</span>
                        ))}
                    </div>
                </div>
            </section>

            <BrevoEnterprise />
            <Pricing />
            <Marketplace />
            <BrevoCategories />
            <ToolIntegrations />
            <CustomerSuccess />
            <BrevoRecommendation />
            <BrevoAiConnect />

            {/* Brevo by the Numbers */}
            <section style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "96px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "relative", maxWidth: "1152px", margin: "0 auto" }}>
                    <p style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase", color: "#0DA56F", marginBottom: "12px" }}>Trusted Worldwide</p>
                    <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "#ffffff", marginBottom: "16px" }}>
                        <span style={{ color: "#0DA56F" }}>Brevo</span> by the Numbers
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
                        {[
                            { num: "500,000+", label: "Businesses Using Brevo", desc: "Creators, startups & global brands rely on Brevo daily." },
                            { num: "180+", label: "Countries Served", desc: "Worldwide coverage with stable deliverability and compliance." },
                            { num: "8B+", label: "Emails Sent Monthly", desc: "Enterprise-grade sending infrastructure designed for high scale." },
                            { num: "99%", label: "Inbox Deliverability", desc: "AI-powered routing helps your emails land exactly where they should." },
                        ].map((stat, i) => (
                            <div key={i} className="pricing-card">
                                <p style={{ fontSize: "2.25rem", fontWeight: "800", color: "#ffffff", marginBottom: "8px" }}>{stat.num}</p>
                                <p style={{ fontSize: "15px", fontWeight: "600", color: "#ffffff", marginBottom: "8px" }}>{stat.label}</p>
                                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.82)" }}>{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #0a1628 100%)", padding: "96px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "relative", maxWidth: "768px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "#ffffff", marginBottom: "16px" }}>
                        Start Improving Your Email Marketing With Brevo
                    </h2>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", marginBottom: "40px" }}>
                        Learn how to create smarter campaigns, automate workflows, improve deliverability,
                        and use CRM features the right way — all through practical lessons powered by Brevo.
                    </p>
                    <a href="https://get.brevo.com/4o18rd1h33kd" style={{ display: "inline-block", padding: "16px 40px", background: "#0DA56F", color: "#ffffff", fontSize: "1.1rem", fontWeight: "600", borderRadius: "12px", boxShadow: "0 8px 24px rgba(13,165,111,0.4)", textDecoration: "none" }}>
                        Start Learning Brevo
                    </a>
                </div>
            </section>

            </main>
        </div>
    );
}