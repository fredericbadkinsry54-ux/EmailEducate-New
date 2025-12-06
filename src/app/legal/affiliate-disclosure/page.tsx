
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function AffiliateDisclosurePage() {
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
        <div className="max-w-4xl mx-auto py-16 px-6">

          {/* Heading */}
          <h1 className="text-4xl font-bold mb-6">Affiliate Disclosure</h1>

          {/* Intro */}
          <p className="text-lg leading-8 text-gray-700 mb-6">
            At <span className="font-semibold">EmailEducate</span>, transparency matters.
            I believe you deserve to know exactly how this website earns money and how
            recommendations are made.
          </p>

          {/* Section */}
          <h2 className="text-2xl font-bold mt-10 mb-3">How This Website Earns</h2>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            Some articles, guides, and pages on this website may contain affiliate links.
            This means that if you click a link and make a purchase, I may earn a small commission
            — at no extra cost to you.
          </p>

          {/* Section */}
          <h2 className="text-2xl font-bold mt-10 mb-3">My Recommendation Policy</h2>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            I only recommend tools and platforms that I personally test, use, and trust.
            Recommendations are based on:
          </p>

          <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 mb-6">
            <li>Real-world testing and hands-on experience</li>
            <li>Honesty, accuracy, and long-term reliability</li>
            <li>Features that genuinely help users grow</li>
            <li>No sponsored reviews or paid promotions</li>
          </ul>

          {/* Section */}
          <h2 className="text-2xl font-bold mt-10 mb-3">Brevo Disclosure</h2>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            I frequently recommend{" "}
            <span className="text-green-700 font-semibold">Brevo</span> because it is one
            of the most reliable and transparent platforms for email marketing, automation,
            CRM, and deliverability.
          </p>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            Whether I earn a commission or not, my goal is always to provide unbiased,
            experience-based guidance that genuinely helps you improve your marketing.
          </p>

          {/* Section */}
          <h2 className="text-2xl font-bold mt-10 mb-3">Your Trust Comes First</h2>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            Affiliate commissions help support the time and effort it takes to create
            free tutorials, guides, comparisons, and resources. But they never influence
            my opinions or recommendations.
          </p>

          {/* Section */}
          <h2 className="text-2xl font-bold mt-10 mb-3">If You Have Questions</h2>
          <p className="text-lg leading-8 text-gray-700 mb-12">
            If anything is unclear or you’d like to know more about how affiliate links are used,
            feel free to reach out anytime through the{" "}
            <Link href="/legal/contact-us" className="text-green-700 font-semibold underline">
              Contact Page
            </Link>.
          </p>

          <p className="text-sm text-gray-600 italic">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </main>
    </div>
  );
}
