
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function AboutMePage() {
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
          <h1 className="text-4xl font-bold mb-4">Our Mission at EmailEducate</h1>

          {/* Intro */}
          <p className="text-lg leading-8 text-gray-700 mb-6">
            My mission is simple — to make email marketing, automation, and digital
            growth easy, ethical, and effective for everyone.
          </p>

          <p className="text-lg leading-8 text-gray-700 mb-6">
            I help individuals, creators, and small teams master automation, email
            marketing, CRM, segmentation, and deliverability through clear,
            experience-based insights. My focus is on tools that actually work —
            especially{" "}
            <span className="text-green-700 font-semibold">Brevo</span> — along with
            other helpful platforms.
          </p>

          {/* SECTION: What I Do */}
          <h2 className="text-3xl font-bold mt-12 mb-4">What I Do</h2>

          <p className="text-lg leading-8 text-gray-700 mb-6">
            I focus on what truly matters: helping you grow using honest insights,
            automation, and simple guidance.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">Email & Marketing</h3>
              <p className="text-gray-700">
                Practical guides to help you design campaigns that engage, convert,
                and retain customers.
              </p>
            </div>

            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">Marketing Automation</h3>
              <p className="text-gray-700">
                Learn how to automate workflows using trusted tools like{" "}
                <span className="text-green-700 font-semibold">Brevo</span> — saving
                time while increasing results.
              </p>
            </div>

            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">CRM & Sales</h3>
              <p className="text-gray-700">
                Build stronger customer relationships with data-driven
                personalization and simple CRM strategies.
              </p>
            </div>

            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">Growth Strategies</h3>
              <p className="text-gray-700">
                Actionable, modern strategies to grow your brand consistently — from
                beginner to professional.
              </p>
            </div>
          </div>

          {/* SECTION: Philosophy */}
          <h2 className="text-3xl font-bold mt-12 mb-4">My Philosophy</h2>

          <p className="text-lg leading-8 text-gray-700 mb-10">
            I don’t believe in complexity. I believe in clarity, ethics, and long-term trust.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">Teach, Don’t Sell.</h3>
              <p className="text-gray-700">
                Everything I create is designed to help you learn — not to push products.
              </p>
            </div>

            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">Be Transparent.</h3>
              <p className="text-gray-700">
                I only recommend tools I personally test and trust — especially{" "}
                <span className="text-green-700 font-semibold">Brevo</span>.
              </p>
            </div>

            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">Grow Together.</h3>
              <p className="text-gray-700">
                Marketing is about community, learning, and progress — not
                competition.
              </p>
            </div>
          </div>

          {/* SECTION: Values */}
          <h2 className="text-3xl font-bold mt-12 mb-4">My Values</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">Transparency</h3>
              <p className="text-gray-700">
                I tell things exactly as they are — no sponsored fluff.
              </p>
            </div>

            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">Education</h3>
              <p className="text-gray-700">
                I simplify complex topics with clear, step-by-step lessons.
              </p>
            </div>

            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">Community</h3>
              <p className="text-gray-700">
                I aim to build a global network of learners growing together.
              </p>
            </div>

            <div className="p-6 border border-green-200 rounded-xl bg-white/60">
              <h3 className="font-bold text-xl mb-2">Innovation</h3>
              <p className="text-gray-700">
                I explore automation tools shaping the future of marketing.
              </p>
            </div>
          </div>

          {/* SECTION: Join Our Journey */}
          <h2 className="text-3xl font-bold mt-12 mb-4">Join My Journey</h2>

          <div className="p-6 border border-green-200 rounded-xl bg-white/60 mb-16">
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

          {/* SECTION: FAQ */}
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <ul className="space-y-6">
            <li className="border-b pb-4 text-lg font-medium text-gray-800">
              What is this platform about?
            </li>
            <li className="border-b pb-4 text-lg font-medium text-gray-800">
              What makes this different from other sites?
            </li>
            <li className="border-b pb-4 text-lg font-medium text-gray-800">
              Do you promote affiliate or sponsored tools?
            </li>
            <li className="border-b pb-4 text-lg font-medium text-gray-800">
              Can I trust the reviews and comparisons?
            </li>
            <li className="border-b pb-4 text-lg font-medium text-gray-800">
              Who creates the content?
            </li>
            <li className="border-b pb-4 text-lg font-medium text-gray-800">
              How can I collaborate?
            </li>
            <li className="border-b pb-4 text-lg font-medium text-gray-800">
              What’s the long-term vision?
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
