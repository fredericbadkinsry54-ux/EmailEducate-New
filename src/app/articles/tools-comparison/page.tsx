import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "Brevo vs Mailchimp: Which One Is Better in 2026?",
        description: "A complete, educational comparison between Brevo and Mailchimp for 2026. Learn which email platform is better for automation, deliverability, pricing, CRM, templates, and long-term value.",
        link: "/articles/tools-comparison/brevo-vs-mailchimp-2026"
    },
    {
        title: "Brevo vs MailerLite: Best Choice for Beginners in 2026?",
        description: "A complete educational comparison between Brevo and MailerLite for beginners in 2026. Learn which email tool is better for automation, pricing, deliverability, templates, onboarding, and long-term value.",
        link: "/articles/tools-comparison/brevo-vs-mailerlite-2026"
    },
    {
        title: "Brevo vs ConvertKit: Which Tool Fits Your Business in 2026?",
        description: "Brevo vs ConvertKit: A complete educational comparison for businesses in 2026. Learn which platform delivers better automation, CRM, segmentation, personalization, pricing, and audience growth features.",
        link: "/articles/tools-comparison/brevo-vs-convertkit-2026"
    },
    {
        title: "Brevo vs ActiveCampaign: Automation Battle in 2026",
        description: "A deep, educational comparison of Brevo vs ActiveCampaign for 2026. Learn which email marketing platform delivers better automation, segmentation, CRM power, personalization, pricing, and scalability.",
        link: "/articles/tools-comparison/brevo-vs-activecampaign-2026"
    },
    {
        title: "Brevo vs GetResponse: Who Wins in Value & Features in 2026?",
        description: "A detailed, educational comparison of Brevo and GetResponse for 2026. Learn which email marketing platform offers better value, automation, CRM, deliverability, templates, and long-term features.",
        link: "/articles/tools-comparison/brevo-vs-getresponse-2026"
    }
];

export default function ToolsComparisonCategoryPage() {
    return (
        <div className="min-h-screen font-sans" style={{ backgroundColor: "#0a1628" }}>
            <header style={{ background: "linear-gradient(to bottom, #0d1f3c, #0a1628)", padding: "64px 0", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="max-w-4xl mx-auto px-4">
                    <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
                        Tools Comparison
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                        Comparing <span className="brevo-auto">Brevo</span> with popular email marketing tools like Mailchimp, MailerLite, ConvertKit, ActiveCampaign, and more.
                    </p>
                </div>
            </header>

            <main className="max-w-3xl mx-auto py-12 px-4">
                <div className="space-y-6">
                    {articles.map((article, index) => (
                        <Link key={index} href={article.link} className="block no-underline group">
                            <div className="article-card" style={{ padding: "24px", borderRadius: "18px", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>
                                    {article.title}
                                </h2>
                                <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: "16px", lineHeight: 1.65 }}>
                                    {article.description}
                                </p>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ffffff", fontWeight: 600 }}>
                                    <span>Read article</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button asChild className="button-animated">
                        <Link href="/">
                            <span>Back to Home</span>
                        </Link>
                    </Button>
                </div>
            </main>
        </div>
    );
}