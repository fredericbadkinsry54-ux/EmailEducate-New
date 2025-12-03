
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "How to Improve Inbox Placement Using Brevo Tools",
        description: "A complete 2026-ready guide on improving email inbox placement using Brevo tools. Learn best practices for deliverability, IP warming, authentication, and reputation protection.",
        link: "/articles/brevo-deliverability/how-to-improve-inbox-placement-using-brevo-tools"
    },
    {
        title: "SPF, DKIM, DMARC Setup Guide for Better Deliverability",
        description: "A complete 2026-friendly guide to setting up SPF, DKIM, and DMARC for strong email authentication and improved inbox placement using Brevo.",
        link: "/articles/brevo-deliverability/spf-dkim-dmarc-setup-guide"
    },
    {
        title: "Why Emails Land in Spam & How to Fix It (Brevo Guide)",
        description: "Understand the common reasons emails go to spam and practical Brevo-focused fixes. Learn authentication, content best practices, and list hygiene to improve inbox placement.",
        link: "/articles/brevo-deliverability/why-emails-land-in-spam-and-how-to-fix-it-brevo-guide"
    },
    {
        title: "Domain Warm-Up Plan for New Senders in 2025",
        description: "A complete domain warm-up plan for new email senders. Learn how to build sending reputation safely using Brevo, with a structured warm-up roadmap designed for strong inbox placement in 2026.",
        link: "/articles/brevo-deliverability/domain-warm-up-plan-for-new-senders-2025"
    },
    {
        title: "List Hygiene: How to Clean Your Contacts for Better Inboxing",
        description: "A complete 2026-ready guide to list hygiene and contact cleaning. Learn how to improve inbox placement by removing cold contacts, suppressing bad data, and optimizing list quality using Brevo.",
        link: "/articles/brevo-deliverability/list-hygiene-how-to-clean-your-contacts-for-better-inboxing"
    }
];

export default function BrevoDeliverabilityCategoryPage() {
    return (
        <div className="bg-green-50/30 min-h-screen font-sans">
            <header className="bg-gradient-to-b from-green-100 to-green-50/50 py-16 text-center border-b border-green-200">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-2"><span className="brevo-auto">Brevo</span> Deliverability & Inbox Success</h1>
                    <p className="text-lg text-green-800/90">
                        Everything you need to know about email deliverability and inbox placement when using <span className="brevo-auto">Brevo</span>.
                    </p>
                </div>
            </header>

            <main className="max-w-3xl mx-auto py-12 px-4">
                <div className="space-y-6">
                    {articles.map((article, index) => (
                        <Link key={index} href={article.link} className="block no-underline group">
                            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-200/80 group-hover:border-green-400/50">
                                <CardContent className="p-6">
                                    <h2 className="text-xl font-bold text-green-900 group-hover:text-green-700 transition-colors" dangerouslySetInnerHTML={{ __html: article.title.replace(/Brevo/g, '<span class="brevo-auto">Brevo</span>') }}>
                                    </h2>
                                    <p className="text-green-900/80 mt-2 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.description.replace(/Brevo/g, '<span class="brevo-auto">Brevo</span>') }}>
                                    </p>
                                    <div className="flex items-center gap-2 text-green-700 font-semibold">
                                        <span>Read article</span>
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </CardContent>
                            </Card>
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
