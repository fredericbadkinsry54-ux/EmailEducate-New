import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BookText } from "lucide-react";

const articles = [
    {
        title: "How to Create High-Converting Email Campaigns Using Brevo",
        description: "A step-by-step guide on strategy, segmentation, automation, testing, and optimization for measurable results.",
        link: "/articles/brevo-email-campaigns/overview"
    },
    {
        title: "Personalization in Brevo: How to Make Emails Feel Human",
        description: "Learn how to use Brevo to personalize email campaigns that feel human. Step-by-step guide on segmentation, dynamic content, automation, testing, and measurement.",
        link: "/articles/brevo-email-campaigns/personalization-guide"
    },
    {
        title: "Brevo Email Campaign Templates: A Complete Beginner’s Guide",
        description: "Learn how to choose, customize, and optimize templates for higher engagement and conversions.",
        link: "/articles/brevo-email-campaigns/templates-guide"
    },
    {
        title: "Brevo A/B Testing: How to Test Subject Lines, Designs, and CTAs",
        description: "Learn how to run effective A/B tests in Brevo. Test subject lines, design layouts, CTAs, and email content using a clear, data-driven method.",
        link: "/articles/brevo-email-campaigns/brevo-ab-testing-guide"
    },
    {
        title: "Brevo Email Analytics Explained: Open Rate, CTR, and Beyond",
        description: "Discover how to use Brevo's email analytics to measure open rate, CTR, conversions, and list health.",
        link: "/articles/brevo-email-campaigns/analytics-guide"
    }
];

export default function BrevoEmailCampaignsCategoryPage() {
    return (
        <div className="bg-green-50/30 min-h-screen font-sans">
            <header className="bg-gradient-to-b from-green-100 to-green-50/50 py-16 text-center border-b border-green-200">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-2"><span className="brevo-auto">Brevo</span> Email Campaigns</h1>
                    <p className="text-lg text-green-800/90">
                        Everything you need to know to create, manage, and optimize your email campaigns using <span className="brevo-auto">Brevo</span>.
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
