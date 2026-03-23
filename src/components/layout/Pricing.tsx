"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
    { name: "Free", price: "300 emails/day", features: ["Drag & Drop Email Editor", "Email Templates", "Basic Reporting & Analytics", "AI Content Generator", "Basic Segmentation"], isPopular: false },
    { name: "Starter", price: "$9/month", features: ["Everything in Free", "5,000 emails per month", "Forms & Email Support", "Advanced Segmentation", "No Brevo Logo"], isPopular: false },
    { name: "Standard", price: "$18/month", features: ["Everything in Starter", "Marketing Automation", "A/B Testing", "Advanced Email Reporting", "Landing Pages", "Web + Event Tracking"], isPopular: true },
    { name: "Professional", price: "$499/month", features: ["Everything in Standard", "Multi-Account Management", "Dedicated IP", "AI Data Analyst", "Custom Data Integrations", "Deliverability Specialist Support"], isPopular: false },
];

export function Pricing() {
    return (
        <section className="py-16 px-5" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}>
            <h2 className="text-center text-3xl font-bold mb-2" style={{ color: "#ffffff" }}>
                Brevo Pricing Explained Simply
            </h2>
            <p className="text-center mb-10 text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
                A clear, easy breakdown of Brevo's pricing and core features — helping you choose the right plan for your email marketing, automation, and CRM needs.
            </p>

            <div className="flex flex-nowrap justify-start md:justify-center gap-[35px] w-full overflow-x-auto pb-2.5 max-w-6xl mx-auto px-4">
                {plans.map((plan, index) => (
                    <Link key={index} href="https://www.brevo.com/pricing/" target="_blank" rel="noopener noreferrer"
                        className={cn("w-[260px] min-w-[260px] flex-shrink-0 block", { "transform scale-105": plan.isPopular })}
                        style={{
                            background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)",
                            boxShadow: plan.isPopular ? "0 14px 36px rgba(13, 165, 111, 0.55)" : "0 8px 24px rgba(13, 165, 111, 0.35)",
                            borderRadius: "18px",
                            border: "none",
                            padding: "24px",
                            color: "#ffffff",
                            textDecoration: "none",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                    >
                        {plan.isPopular && (
                            <div style={{ background: "rgba(255,255,255,0.25)", color: "#ffffff", fontSize: "11px", fontWeight: "700", padding: "3px 12px", borderRadius: "20px", display: "inline-block", marginBottom: "8px" }}>
                                ⭐ Most Popular
                            </div>
                        )}
                        <h3 style={{ color: "#ffffff", fontSize: "22px", fontWeight: "600", marginBottom: "4px" }}>{plan.name}</h3>
                        <p style={{ color: "rgba(255,255,255,0.95)", fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>{plan.price}</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {plan.features.map((feature, i) => (
                                <li key={i} style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.88)", fontSize: "14px", marginBottom: "8px" }}>
                                    <span style={{ color: "#ffffff", marginRight: "8px", fontWeight: "bold" }}>✔</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </Link>
                ))}
            </div>
        </section>
    );
}