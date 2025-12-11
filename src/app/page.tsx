
"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lessons } from "@/lib/lessons";
import { ToolIntegrations } from "@/components/layout/ToolIntegrations";
import { WavyBg } from "@/components/layout/WavyBg";
import { Seaweed } from "@/components/layout/Seaweed";
import { Pricing } from "@/components/layout/Pricing";
import { CustomerSuccess } from "@/components/layout/CustomerSuccess";
import { BrevoCategories } from "@/components/layout/BrevoCategories";
import { BrevoEnterprise } from "@/components/layout/BrevoEnterprise";
import { BrevoRecommendation } from "@/components/layout/BrevoRecommendation";
import { BrevoAiConnect } from "@/components/layout/BrevoAiConnect";
import { Marketplace } from "@/components/layout/Marketplace";
import { AppHeader } from "@/components/layout/AppHeader";

export default function Home() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
    const categories = [...new Set(lessons.map((lesson) => lesson.category))];

    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1">
            <section className="hero">
                <div className="hero-container">
                    <h1 className="hero-title">
                    Learn Email Marketing Faster Using 
                    <span className="brevo-badge-pro">Brevo’s</span> Best Features
                    </h1>
                    <p className="hero-subtitle">
                    Clear, practical lessons that help you understand campaigns, segmentation,
                    automation, and CRM inside <strong style={{ color: '#059669' }}>Brevo</strong> — without complexity
                    or technical confusion.
                    </p>
                    <a href="https://www.brevo.com" target="_blank" rel="noopener noreferrer" className="hero-btn">Visit Brevo</a>
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

                <section className="relative py-24 bg-gradient-to-b from-[#E9F9F1] to-white text-center overflow-hidden">
                    {/* Soft floating background shapes */}
                    <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#0DA56F]/20 rounded-full blur-3xl animate-fade"></div>
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0DA56F]/10 rounded-full blur-2xl animate-float-slow"></div>

                    <div className="relative max-w-3xl mx-auto px-6">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                            Start Improving Your Email Marketing With <span className="brevo-auto">Brevo</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-10">
                            Learn how to create smarter campaigns, automate workflows, improve deliverability,
                            and use CRM features the right way — all through practical lessons powered by <span className="brevo-auto">Brevo</span>.
                        </p>
                        <a href="https://www.brevo.com" className="inline-block px-10 py-4 bg-[#0DA56F] text-white text-lg font-semibold rounded-xl shadow-xl hover:bg-[#0c8b5d] transition-all duration-200 main-btn">
                            Start Learning <span className="brevo-auto">Brevo</span>
                        </a>
                        <p className="text-sm text-gray-600 mt-4">
                            No credit card required — just practical learning.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
