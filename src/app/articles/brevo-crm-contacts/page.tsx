
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "How to Organize Contacts Inside Brevo CRM",
        description: "A complete 2026-ready CRM organization guide for better email relevance, automation, and deliverability.",
        link: "/articles/brevo-crm-contacts/how-to-organize-contacts-inside-brevo-crm"
    },
    {
        title: "How to Use Segmentation to Send More Relevant Emails",
        description: "Learn how to use segmentation inside Brevo to send highly relevant and personalized emails. A complete 2026-ready segmentation guide.",
        link: "/articles/brevo-crm-contacts/how-to-use-segmentation-to-send-more-relevant-emails"
    },
    {
        title: "Tags vs Segments: What’s the Difference?",
        description: "Learn the real difference between tags and segments in Brevo. A complete 2026-ready guide to organizing contacts, improving targeting, and creating smarter automation inside Brevo CRM.",
        link: "/articles/brevo-crm-contacts/tags-vs-segments-whats-the-difference"
    },
    {
        title: "How to Build a High-Quality Email List Using Brevo",
        description: "A complete step-by-step guide to building a high-quality email list using Brevo. Learn proven acquisition channels, consent best practices, lead magnets, and growth strategies for 2026.",
        link: "/articles/brevo-crm-contacts/how-to-build-a-high-quality-email-list-using-brevo"
    },
    {
        title: "Using Custom Fields in Brevo to Personalize Emails",
        description: "Learn how to use custom fields inside Brevo to personalize emails, improve segmentation, build dynamic content, and create more relevant customer journeys in 2026.",
        link: "/articles/brevo-crm-contacts/using-custom-fields-to-personalize-emails"
    }
];

export default function BrevoCrmContactsCategoryPage() {
    return (
        <div className="bg-green-50/30 min-h-screen font-sans">
            <header className="bg-gradient-to-b from-green-100 to-green-50/50 py-16 text-center border-b border-green-200">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-2"><span className="brevo-auto">Brevo</span> CRM &amp; Contacts Management</h1>
                    <p className="text-lg text-green-800/90">
                        Learn how to structure, organize, segment, tag, and manage contacts inside <span className="brevo-auto">Brevo</span> CRM for better email relevance.
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
