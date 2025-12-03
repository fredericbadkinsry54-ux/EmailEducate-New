
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "How to Build Your First Automation Workflow in Brevo",
        description: "A complete step-by-step guide to building your first automation workflow in Brevo. Learn triggers, actions, segmentation, timing, and optimization in a beginner-friendly way.",
        link: "/articles/brevo-marketing-automation/how-to-build-your-first-automation-workflow-in-brevo"
    },
    {
        title: "Brevo Automation Triggers Explained for Beginners",
        description: "A complete beginner-friendly guide to understanding Brevo automation triggers. Learn how event-based, behavior-based, and contact-based triggers work to build high-performing automation workflows.",
        link: "/articles/brevo-marketing-automation/brevo-automation-triggers-explained-for-beginners"
    },
    {
        title: "Automated Welcome Series: The Perfect 3-Email Sequence",
        description: "Learn how to create a high-performing 3-email welcome series in Brevo. This beginner-friendly guide explains structure, timing, messaging, segmentation, and workflow setup.",
        link: "/articles/brevo-marketing-automation/automated-welcome-series-perfect-3-email-sequence"
    },
    {
        title: "Abandoned Cart Automation: Recover More Sales with Brevo",
        description: "Learn how to recover lost sales using Brevo’s abandoned cart automation. A complete 2026-ready guide for ecommerce brands to build high-performing recovery workflows.",
        link: "/articles/brevo-marketing-automation/abandoned-cart-automation-recover-more-sales-with-brevo"
    },
    {
        title: "How to Use Tags and Segments Inside Automation Workflows",
        description: "Learn how to use tags and segments inside Brevo automation workflows. A complete beginner-friendly 2026 guide to behavior-based personalization and smart email triggers.",
        link: "/articles/brevo-marketing-automation/how-to-use-tags-and-segments-inside-automation-workflows"
    }
];

export default function BrevoMarketingAutomationCategoryPage() {
    return (
        <div className="bg-green-50/30 min-h-screen font-sans">
            <header className="bg-gradient-to-b from-green-100 to-green-50/50 py-16 text-center border-b border-green-200">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-2"><span className="brevo-auto">Brevo</span> Marketing Automation</h1>
                    <p className="text-lg text-green-800/90">
                        Everything you need to know to create, manage, and optimize your marketing automation using <span className="brevo-auto">Brevo</span>.
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

    
