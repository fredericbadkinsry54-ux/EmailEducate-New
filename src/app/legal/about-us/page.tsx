'use client'

import { useState } from "react";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppHeader } from "@/components/layout/AppHeader";

const faqData = [
    { question: "What is EmailEducate?", answer: "EmailEducate is a simple educational platform that helps you learn email marketing, automation, and CRM using Brevo's real features." },
    { question: "What makes this platform different?", answer: "We focus on clear, practical training based on real tools like Brevo — no theory, no fluff, just step-by-step guidance." },
    { question: "Do you promote affiliate or sponsored tools?", answer: "No. All recommendations are based on actual testing and experience — not sponsorships." },
    { question: "Can I trust the reviews and comparisons?", answer: "Yes. Everything is tested hands-on using real business workflows, so the reviews reflect practical usage — not paid opinions." },
    { question: "Who creates the content?", answer: "All content is created by EmailEducate — based on real experiments, marketing execution, and automation setups done within Brevo." },
    { question: "How can I collaborate?", answer: "You can reach out through the Contact page or email us directly at contact@emaileducate.online for collaborations, partnerships, or content requests." },
    { question: "What's the long-term vision?", answer: "To be the most trusted, practical resource for mastering email marketing and automation, with a strong focus on the Brevo ecosystem." }
];

function FaqItem({ item, isOpen, onClick }: { item: typeof faqData[0], isOpen: boolean, onClick: () => void }) {
    return (
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <button
                style={{ width: "100%", textAlign: "left", padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer" }}
                onClick={onClick}
            >
                <span style={{ fontSize: "16px", fontWeight: "600", color: "#ffffff" }}>{item.question}</span>
                <ChevronDown style={{ color: "#0DA56F", transition: "transform 0.3s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }} />
            </button>
            <div style={{ overflow: "hidden", maxHeight: isOpen ? "500px" : "0", transition: "max-height 0.3s ease" }}>
                <p style={{ paddingBottom: "16px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", fontSize: "15px" }}>{item.answer}</p>
            </div>
        </div>
    );
}

export default function AboutMePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen" style={{ background: "#0a1628" }}>
            <AppHeader />
            <main className="flex-1">

                {/* Hero */}
                <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", padding: "64px 24px 48px", textAlign: "center", borderBottom: "1px solid rgba(13,165,111,0.15)" }}>
                    <span style={{ background: "rgba(13,165,111,0.2)", color: "#0DA56F", fontSize: "12px", fontWeight: "700", padding: "5px 16px", borderRadius: "20px", letterSpacing: "1.5px", display: "inline-block", marginBottom: "20px" }}>
                        ABOUT EMAILEDUCATE
                    </span>
                    <h1 style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffffff", marginBottom: "16px", lineHeight: "1.2" }}>
                        Our Mission at <span style={{ color: "#0DA56F" }}>Email</span>Educate
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                        Making email marketing, automation, and digital growth easy, ethical, and effective for everyone.
                    </p>
                </div>

                <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px" }}>

                    {/* Intro card */}
                    <div className="legal-card" style={{ marginBottom: "24px" }}>
                        <p style={{ fontSize: "17px", lineHeight: "1.9", color: "rgba(255,255,255,0.88)" }}>
                            I help individuals, creators, and small teams master automation, email marketing, CRM, segmentation, and deliverability through clear, experience-based insights. My focus is on tools that actually work — especially <span style={{ color: "#0DA56F", fontWeight: "700" }}>Brevo</span> — along with other helpful platforms.
                        </p>
                    </div>

                    {/* What I Do */}
                    <div className="legal-card" style={{ marginBottom: "24px" }}>
                        <h2>What I Do</h2>
                        <p style={{ color: "rgba(255,255,255,0.8)" }}>I focus on what truly matters: helping you grow using honest insights, automation, and simple guidance.</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" }}>
                            {[
                                { title: "Email & Marketing", desc: "Practical guides to help you design campaigns that engage, convert, and retain customers." },
                                { title: "Marketing Automation", desc: "Learn how to automate workflows using trusted tools like Brevo — saving time while increasing results." },
                                { title: "CRM & Sales", desc: "Build stronger customer relationships with data-driven personalization and simple CRM strategies." },
                                { title: "Growth Strategies", desc: "Actionable, modern strategies to grow your brand consistently — from beginner to professional." },
                            ].map((item, i) => (
                                <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "16px", border: "1px solid rgba(13,165,111,0.15)" }}>
                                    <h3 style={{ color: "#0DA56F", fontWeight: "700", fontSize: "16px", marginBottom: "8px" }}>{item.title}</h3>
                                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.6" }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Philosophy */}
                    <div className="legal-card" style={{ marginBottom: "24px" }}>
                        <h2>My Philosophy</h2>
                        <p style={{ color: "rgba(255,255,255,0.8)" }}>I don't believe in complexity. I believe in clarity, ethics, and long-term trust.</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" }}>
                            {[
                                { title: "Teach, Don't Sell.", desc: "Everything I create is designed to help you learn — not to push products." },
                                { title: "Be Transparent.", desc: "I only recommend tools I personally test and trust — especially Brevo." },
                                { title: "Grow Together.", desc: "Marketing is about community, learning, and progress — not competition." },
                            ].map((item, i) => (
                                <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "16px", border: "1px solid rgba(13,165,111,0.15)" }}>
                                    <h3 style={{ color: "#0DA56F", fontWeight: "700", fontSize: "16px", marginBottom: "8px" }}>{item.title}</h3>
                                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.6" }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Values */}
                    <div className="legal-card" style={{ marginBottom: "24px" }}>
                        <h2>My Values</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" }}>
                            {[
                                { title: "Transparency", desc: "I tell things exactly as they are — no sponsored fluff." },
                                { title: "Education", desc: "I simplify complex topics with clear, step-by-step lessons." },
                                { title: "Community", desc: "I aim to build a global network of learners growing together." },
                                { title: "Innovation", desc: "I explore automation tools shaping the future of marketing." },
                            ].map((item, i) => (
                                <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "16px", border: "1px solid rgba(13,165,111,0.15)" }}>
                                    <h3 style={{ color: "#0DA56F", fontWeight: "700", fontSize: "16px", marginBottom: "8px" }}>{item.title}</h3>
                                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.6" }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Join Journey */}
                    <div className="legal-card" style={{ marginBottom: "24px" }}>
                        <h2>Join My Journey</h2>
                        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: "1.9", marginBottom: "16px" }}>
                            Marketing shouldn't be a maze — it should be a map. My mission is to simplify the path for modern marketers. Whether you want to automate workflows, create engaging campaigns, or use <span style={{ color: "#0DA56F", fontWeight: "700" }}>Brevo</span> the right way — I'm here to help you do it clearly and confidently.
                        </p>
                        <p style={{ fontWeight: "700", color: "#ffffff", fontSize: "17px", fontStyle: "italic" }}>
                            "Let's make marketing easy — together."
                        </p>
                    </div>

                    {/* Contact CTA */}
                    <div style={{
                        background: "linear-gradient(135deg, #0DA56F 0%, #08855a 100%)",
                        borderRadius: "18px",
                        padding: "32px",
                        textAlign: "center",
                        marginBottom: "24px",
                        boxShadow: "0 8px 24px rgba(13,165,111,0.35)",
                    }}>
                        <h2 style={{ color: "#ffffff", fontSize: "22px", fontWeight: "800", marginBottom: "10px" }}>Get in Touch</h2>
                        <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "15px", marginBottom: "20px" }}>
                            Have questions, collaboration ideas, or feedback? We'd love to hear from you.
                        </p>
                        <a href="mailto:contact@emaileducate.online" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            background: "#ffffff",
                            color: "#0DA56F",
                            padding: "12px 28px",
                            borderRadius: "10px",
                            fontWeight: "700",
                            fontSize: "15px",
                            textDecoration: "none",
                        }}>
                            <Mail size={16} />
                            contact@emaileducate.online
                        </a>
                    </div>

                    {/* FAQ */}
                    <div className="legal-card">
                        <h2>Frequently Asked Questions</h2>
                        <div style={{ marginTop: "16px" }}>
                            {faqData.map((item, index) => (
                                <FaqItem key={index} item={item} isOpen={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)} />
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}