
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
        <div className="bg-green-50/30 min-h-screen font-sans">
            <header className="bg-gradient-to-b from-green-100 to-green-50/50 py-16 text-center border-b border-green-200">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-2">Tools Comparison</h1>
                    <p className="text-lg text-green-800/90">
                        Comparing <span className="brevo-auto">Brevo</span> with popular email marketing tools like Mailchimp, MailerLite, ConvertKit, ActiveCampaign, and more.
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
