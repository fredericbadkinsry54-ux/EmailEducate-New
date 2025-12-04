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

export default function Home() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
    const categories = [...new Set(lessons.map((lesson) => lesson.category))];

    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
                <div className="flex items-center gap-2">
                    <Logo className="size-7 text-primary" />
                    <h1 className="text-xl font-semibold tracking-tight">EmailEducate</h1>
                </div>
                <div className="flex w-full items-center justify-end gap-4">
                     <nav className="hidden md:flex gap-6">
                        <Link href="/" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Home</Link>
                        <Link href="/about" className="font-medium text-foreground/80 hover:text-foreground transition-colors">About</Link>
                        <Link href="/blogs" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Blogs</Link>
                        <Link href="/contact" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">
            <section id="hero" className="relative flex flex-col items-center justify-center text-center py-24 text-foreground overflow-hidden bg-[hsl(165,56%,95%)]">
                <div className="max-w-3xl mx-auto px-6 z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg text-slate-800">
                        Smarter Email Marketing, Powered by <span className="brevo-auto">Brevo</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-slate-600 max-w-2xl mx-auto">
                        Learn how to create, automate, and improve your email campaigns using <span className="brevo-auto">Brevo</span> and other leading tools — all in one educational platform.
                    </p>
                    <div className="flex justify-center">
                        <Button
                          asChild
                          size="lg"
                          className="h-12 button-animated">
                          <Link href="https://www.brevo.com/?r=t" target="_blank" rel="noopener noreferrer">
                            <span>Visit <span className="brevo-auto">Brevo</span></span>
                          </Link>
                        </Button>
                    </div>
                </div>

                {/* Decorative background shapes */}
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary/20 blur-3xl rounded-full"></div>
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
