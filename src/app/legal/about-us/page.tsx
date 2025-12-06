
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
            <ul className="space-y-4">
              <li className="font-medium text-gray-800">What is this platform about?</li>
              <li className="font-medium text-gray-800">What makes this different from other sites?</li>
              <li className="font-medium text-gray-800">Do you promote affiliate or sponsored tools?</li>
              <li className="font-medium text-gray-800">Can I trust the reviews and comparisons?</li>
              <li className="font-medium text-gray-800">Who creates the content?</li>
              <li className="font-medium text-gray-800">How can I collaborate?</li>
              <li className="font-medium text-gray-800">What’s the long-term vision?</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
