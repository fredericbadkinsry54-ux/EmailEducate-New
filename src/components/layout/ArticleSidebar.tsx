"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const categories = [
    { label: "Email Campaigns", href: "/articles/brevo-email-campaigns", slug: "brevo-email-campaigns" },
    { label: "Marketing Automation", href: "/articles/brevo-marketing-automation", slug: "brevo-marketing-automation" },
    { label: "Deliverability", href: "/articles/brevo-deliverability", slug: "brevo-deliverability" },
    { label: "CRM & Contacts", href: "/articles/brevo-crm-contacts", slug: "brevo-crm-contacts" },
    { label: "Tools Comparison", href: "/articles/tools-comparison", slug: "tools-comparison" },
];

const relatedByCategory: Record<string, { title: string; href: string }[]> = {
    "brevo-email-campaigns": [
        { title: "How to Create High-Converting Email Campaigns", href: "/articles/brevo-email-campaigns/overview" },
        { title: "Personalization in Brevo: Make Emails Feel Human", href: "/articles/brevo-email-campaigns/personalization-guide" },
        { title: "Brevo Email Campaign Templates: Beginner's Guide", href: "/articles/brevo-email-campaigns/templates-guide" },
        { title: "Brevo A/B Testing: Subject Lines, Designs & CTAs", href: "/articles/brevo-email-campaigns/brevo-ab-testing-guide" },
        { title: "Brevo Email Analytics: Open Rate, CTR & Beyond", href: "/articles/brevo-email-campaigns/analytics-guide" },
    ],
    "brevo-marketing-automation": [
        { title: "Abandoned Cart Automation: Recover Lost Sales", href: "/articles/brevo-marketing-automation/abandoned-cart-automation-reco" },
        { title: "Automated Welcome Series: First Impression", href: "/articles/brevo-marketing-automation/automated-welcome-series-perfe" },
        { title: "Brevo Automation Triggers Explained", href: "/articles/brevo-marketing-automation/brevo-automation-triggers-explai" },
        { title: "How to Build Your First Automation Workflow", href: "/articles/brevo-marketing-automation/how-to-build-your-first-automati" },
        { title: "Tags and Segments in Brevo Automation", href: "/articles/brevo-marketing-automation/how-to-use-tags-and-segments-i" },
    ],
    "brevo-deliverability": [
        { title: "Domain Warm-Up Plan for New Senders", href: "/articles/brevo-deliverability/domain-warm-up-plan-for-new-s" },
        { title: "How to Improve Inbox Placement with Brevo", href: "/articles/brevo-deliverability/how-to-improve-inbox-placemen" },
        { title: "List Hygiene: Clean Your Contact List", href: "/articles/brevo-deliverability/list-hygiene-how-to-clean-your-c" },
        { title: "SPF, DKIM & DMARC Setup Guide for Brevo", href: "/articles/brevo-deliverability/spf-dkim-dmarc-setup-guide" },
        { title: "Why Emails Land in Spam — Fix with Brevo", href: "/articles/brevo-deliverability/why-emails-land-in-spam-and-ho" },
    ],
    "brevo-crm-contacts": [
        { title: "How to Build a High-Quality Email List", href: "/articles/brevo-crm-contacts/how-to-build-a-high-quality-emai" },
        { title: "How to Organize Contacts Inside Brevo CRM", href: "/articles/brevo-crm-contacts/how-to-organize-contacts-inside" },
        { title: "Segmentation: Send Smarter Emails with Brevo", href: "/articles/brevo-crm-contacts/how-to-use-segmentation-to-sen" },
        { title: "Tags vs Segments in Brevo — Key Differences", href: "/articles/brevo-crm-contacts/tags-vs-segments-whats-the-diffe" },
        { title: "Custom Fields to Personalize Communication", href: "/articles/brevo-crm-contacts/using-custom-fields-to-personaliz" },
    ],
    "tools-comparison": [
        { title: "Brevo vs Mailchimp 2026: Which Platform Wins?", href: "/articles/tools-comparison/brevo-vs-mailchimp-2026" },
        { title: "Brevo vs MailerLite 2026: Which Is Right for You?", href: "/articles/tools-comparison/brevo-vs-mailerlite-2026" },
        { title: "Brevo vs ActiveCampaign 2026", href: "/articles/tools-comparison/brevo-vs-activecampaign-2026" },
        { title: "Brevo vs ConvertKit 2026", href: "/articles/tools-comparison/brevo-vs-convertkit-2026" },
        { title: "Brevo vs GetResponse 2026", href: "/articles/tools-comparison/brevo-vs-getresponse-2026" },
    ],
};

interface ArticleSidebarProps {
    currentCategory?: string;
    currentPath?: string;
    tocItems?: { id: string; label: string }[];
}

export function ArticleSidebar({
    currentCategory = "brevo-email-campaigns",
    currentPath = "",
    tocItems = [],
}: ArticleSidebarProps) {
    const [readingProgress, setReadingProgress] = useState(0);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const el = document.documentElement;
            const scrollTop = el.scrollTop || document.body.scrollTop;
            const scrollHeight = el.scrollHeight - el.clientHeight;
            const progress = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;
            setReadingProgress(progress);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const related = relatedByCategory[currentCategory] || relatedByCategory["brevo-email-campaigns"];
    const filtered = related.filter(a => !a.href.includes(currentPath)).slice(0, 4);

    return (
        <aside style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>

            {/* Reading Progress */}
            <div style={{ background: "#0d1f3c", border: "1px solid rgba(13,165,111,0.25)", borderRadius: "16px", padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <span style={{ color: "#0DA56F", fontSize: "11px", fontWeight: "700", letterSpacing: "1px" }}>READING PROGRESS</span>
                    <span style={{ color: "#0DA56F", fontSize: "12px", fontWeight: "700" }}>{readingProgress}%</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "10px", height: "6px", overflow: "hidden" }}>
                    <div style={{
                        background: "linear-gradient(90deg, #0DA56F, #00e6a0)",
                        width: `${readingProgress}%`,
                        height: "100%",
                        borderRadius: "10px",
                        transition: "width 0.3s ease",
                    }} />
                </div>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", marginTop: "8px" }}>
                    {readingProgress < 30 ? "Just getting started..." : readingProgress < 70 ? "Great progress!" : readingProgress === 100 ? "Article complete!" : "Almost done!"}
                </p>
            </div>

            {/* Table of Contents */}
            {tocItems.length > 0 && (
                <div style={{ background: "#0d1f3c", border: "1px solid rgba(13,165,111,0.25)", borderRadius: "16px", padding: "16px" }}>
                    <span style={{ color: "#0DA56F", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", display: "block", marginBottom: "12px" }}>IN THIS ARTICLE</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {tocItems.map((item, i) => (
                            <a key={i} href={`#${item.id}`} style={{
                                color: activeSection === item.id ? "#0DA56F" : "rgba(255,255,255,0.7)",
                                fontSize: "12px",
                                padding: "6px 10px",
                                borderRadius: "8px",
                                textDecoration: "none",
                                background: activeSection === item.id ? "rgba(13,165,111,0.15)" : "transparent",
                                borderLeft: activeSection === item.id ? "2px solid #0DA56F" : "2px solid transparent",
                                transition: "0.2s ease",
                                display: "block",
                            }}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Categories */}
            <div style={{ background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)", borderRadius: "16px", padding: "16px", boxShadow: "0 8px 24px rgba(13,165,111,0.3)" }}>
                <span style={{ color: "#ffffff", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", display: "block", marginBottom: "12px" }}>BROWSE CATEGORIES</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {categories.map((cat, i) => (
                        <Link key={i} href={cat.href} style={{
                            background: currentCategory === cat.slug ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.18)",
                            color: "#ffffff",
                            fontSize: "11px",
                            fontWeight: "600",
                            padding: "4px 10px",
                            borderRadius: "20px",
                            textDecoration: "none",
                            border: currentCategory === cat.slug ? "1px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.1)",
                            transition: "0.2s ease",
                        }}>
                            {cat.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Related Articles */}
            <div style={{ background: "rgba(13,165,111,0.08)", border: "1px solid rgba(13,165,111,0.2)", borderRadius: "16px", padding: "16px" }}>
                <span style={{ color: "#ffffff", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", display: "block", marginBottom: "12px" }}>RELATED ARTICLES</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {filtered.map((article, i) => (
                        <Link key={i} href={article.href} style={{
                            display: "block",
                            background: "rgba(13,165,111,0.1)",
                            border: "1px solid rgba(13,165,111,0.2)",
                            borderRadius: "10px",
                            padding: "10px 12px",
                            textDecoration: "none",
                            transition: "0.2s ease",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.22)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,165,111,0.1)"; }}
                        >
                            <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "12px", lineHeight: "1.5", display: "block" }}>{article.title}</span>
                            <span style={{ color: "#0DA56F", fontSize: "11px", fontWeight: "600", marginTop: "4px", display: "block" }}>Read →</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Brevo CTA */}
            <div style={{ background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)", borderRadius: "16px", padding: "18px", textAlign: "center", boxShadow: "0 8px 24px rgba(13,165,111,0.3)" }}>
                <p style={{ color: "#ffffff", fontWeight: "800", fontSize: "14px", marginBottom: "6px" }}>Try Brevo Free Today</p>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", marginBottom: "14px", lineHeight: "1.6" }}>
                    Start sending smarter emails — no credit card required.
                </p>
                <a href="https://get.brevo.com/4o18rd1h33kd" target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-block",
                    background: "#ffffff",
                    color: "#0DA56F",
                    padding: "9px 22px",
                    borderRadius: "8px",
                    fontWeight: "700",
                    fontSize: "13px",
                    textDecoration: "none",
                }}>
                    Get Started Free →
                </a>
            </div>

        </aside>
    );
}