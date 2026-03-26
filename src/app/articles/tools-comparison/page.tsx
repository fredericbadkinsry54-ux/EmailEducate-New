"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppHeader } from "@/components/layout/AppHeader";

const articles = [
    { title: "Brevo vs ActiveCampaign 2026: Which Is Better for Automation?", description: "A detailed comparison of Brevo and ActiveCampaign — features, pricing, automation, and ease of use to help you choose the right tool.", link: "/articles/tools-comparison/brevo-vs-activecampaign-2026" },
    { title: "Brevo vs ConvertKit 2026: Best Email Tool for Creators?", description: "Compare Brevo and ConvertKit side by side — which platform is better for creators, bloggers, and small businesses in 2026?", link: "/articles/tools-comparison/brevo-vs-convertkit-2026" },
    { title: "Brevo vs GetResponse 2026: Full Feature Comparison", description: "An in-depth look at Brevo vs GetResponse — covering email marketing, automation, landing pages, pricing, and more.", link: "/articles/tools-comparison/brevo-vs-getresponse-2026" },
    { title: "Brevo vs Mailchimp 2026: Which Platform Wins?", description: "The ultimate Brevo vs Mailchimp comparison — pricing, features, deliverability, and automation to find the best email marketing tool.", link: "/articles/tools-comparison/brevo-vs-mailchimp-2026" },
    { title: "Brevo vs MailerLite 2026: Which Is Right for You?", description: "Compare Brevo and MailerLite on pricing, ease of use, automation features, and deliverability to make the best choice for your business.", link: "/articles/tools-comparison/brevo-vs-mailerlite-2026" },
];

export default function ToolsComparisonPage() {
    return (
        <div style={{ background: "#0a1628", minHeight: "100vh" }}>
            <AppHeader />
            <header style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "80px 24px 60px", textAlign: "center", borderBottom: "1px solid rgba(13,165,111,0.15)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", overflow: "hidden" }}>
                    <span style={{ fontSize: "220px", fontWeight: "900", color: "rgba(13,165,111,0.04)", letterSpacing: "-6px", userSelect: "none", whiteSpace: "nowrap" }}>BREVO</span>
                </div>
                <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
                    <span style={{ background: "rgba(13,165,111,0.2)", color: "#0DA56F", fontSize: "12px", fontWeight: "700", padding: "5px 16px", borderRadius: "20px", letterSpacing: "1.5px", display: "inline-block", marginBottom: "20px" }}>TOOLS COMPARISON</span>
                    <h1 style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffffff", marginBottom: "16px", lineHeight: "1.2" }}>
                        <span style={{ color: "#0DA56F" }}>Bre</span>vo Tools Comparison
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                        Compare Brevo with Mailchimp, MailerLite, ActiveCampaign, ConvertKit — find the best tool for your needs.
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