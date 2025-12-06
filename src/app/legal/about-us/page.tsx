
'use client'

import { useState } from "react";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
    {
      question: "What is EmailEducate?",
      answer: "EmailEducate is a simple educational platform that helps you learn email marketing, automation, and CRM using Brevo’s real features."
    },
    {
      question: "What makes this platform different?",
      answer: "We focus on clear, practical training based on real tools like Brevo — no theory, no fluff, just step-by-step guidance."
    },
    {
      question: "Do you promote affiliate or sponsored tools?",
      answer: "No. All recommendations are based on actual testing and experience — not sponsorships."
    },
    {
      question: "Can I trust the reviews and comparisons?",
      answer: "Yes. Everything is tested hands-on using real business workflows, so the reviews reflect practical usage — not paid opinions."
    },
    {
      question: "Who creates the content?",
      answer: "All content is created by EmailEducate — based on real experiments, marketing execution, and automation setups done within Brevo."
    },
    {
      question: "How can I collaborate?",
      answer: "You can reach out through the Contact page for collaborations, partnerships, or content requests."
    },
    {
        question: "What’s the long-term vision?",
        answer: "To be the most trusted, practical resource for mastering email marketing and automation, with a strong focus on the Brevo ecosystem."
    }
  ];

function FaqItem({ item, isOpen, onClick }: { item: typeof faqData[0], isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b">
            <button
                className="w-full text-left py-4 flex justify-between items-center"
                onClick={onClick}
            >
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
                <ChevronDown className={cn("text-xl transition-transform", isOpen ? "rotate-180" : "")} />
            </button>
            <div
                className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-screen" : "max-h-0"
                )}
            >
                <p className="pb-4 text-gray-600">{item.answer}</p>
            </div>
        </div>
    )
}

export default function AboutMePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
                <Link href="/legal/about-us" className="font-medium text-foreground/80 hover:text-foreground transition-colors">About</Link>
                <Link href="/blogs" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Blogs</Link>
                <Link href="/legal/contact-us" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
            </nav>
        </div>
      </header>
      <main className="flex-1 bg-muted/20">
        <div className="legal-container">

          <h1 className="legal-title">Our Mission at EmailEducate</h1>
          <p className="legal-subtitle">
            Making email marketing, automation, and digital growth easy, ethical, and effective for everyone.
          </p>

          <div className="legal-card">
            <p className="text-lg leading-8 text-gray-700">
              I help individuals, creators, and small teams master automation, email
              marketing, CRM, segmentation, and deliverability through clear,
              experience-based insights. My focus is on tools that actually work —
              especially{" "}
              <span className="text-green-700 font-semibold">Brevo</span> — along with
              other helpful platforms.
            </p>
          </div>

          <div className="legal-card">
            <h2>What I Do</h2>
            <p>
              I focus on what truly matters: helping you grow using honest insights,
              automation, and simple guidance.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Email & Marketing</h3>
                <p>Practical guides to help you design campaigns that engage, convert, and retain customers.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Marketing Automation</h3>
                <p>Learn how to automate workflows using trusted tools like <span className="text-green-700 font-semibold">Brevo</span> — saving time while increasing results.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">CRM & Sales</h3>
                <p>Build stronger customer relationships with data-driven personalization and simple CRM strategies.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Growth Strategies</h3>
                <p>Actionable, modern strategies to grow your brand consistently — from beginner to professional.</p>
              </div>
            </div>
          </div>
          
          <div className="legal-card">
            <h2>My Philosophy</h2>
            <p>I don’t believe in complexity. I believe in clarity, ethics, and long-term trust.</p>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Teach, Don’t Sell.</h3>
                <p>Everything I create is designed to help you learn — not to push products.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Be Transparent.</h3>
                <p>I only recommend tools I personally test and trust — especially <span className="text-green-700 font-semibold">Brevo</span>.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Grow Together.</h3>
                <p>Marketing is about community, learning, and progress — not competition.</p>
              </div>
            </div>
          </div>

          <div className="legal-card">
            <h2>My Values</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Transparency</h3>
                <p>I tell things exactly as they are — no sponsored fluff.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Education</h3>
                <p>I simplify complex topics with clear, step-by-step lessons.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Community</h3>
                <p>I aim to build a global network of learners growing together.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Innovation</h3>
                <p>I explore automation tools shaping the future of marketing.</p>
              </div>
            </div>
          </div>

          <div className="legal-card">
            <h2>Join My Journey</h2>
            <p className="text-lg text-gray-700 leading-8 mb-4">
              Marketing shouldn’t be a maze — it should be a map. My mission is to
              simplify the path for modern marketers. Whether you want to automate
              workflows, create engaging campaigns, or use{" "}
              <span className="text-green-700 font-semibold">Brevo</span> the right
              way — I’m here to help you do it clearly and confidently.
            </p>
            <p className="font-semibold text-gray-800 text-lg italic">
              “Let’s make marketing easy — together.”
            </p>
          </div>

          <div className="legal-card">
            <h2>Frequently Asked Questions</h2>
            <div>
              {faqData.map((item, index) => (
                <FaqItem
                  key={index}
                  item={item}
                  isOpen={openFaq === index}
                  onClick={() => handleFaqClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
