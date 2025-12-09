
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function DisclaimerPage() {
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
                <Link href="/legal/contact-us" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
            </nav>
        </div>
      </header>
      <main className="flex-1 bg-muted/20">
        <div className="legal-container">
          <h1 className="legal-title">Disclaimer</h1>
          <p className="legal-subtitle">
            The content on EmailEducate is for educational and informational purposes only.
          </p>

          <div className="legal-card">
            <h2>
              📘 Educational & Informational Content
            </h2>
            <p>
              The content on EmailEducate is created for educational and informational purposes only.
              All tutorials, reviews, and marketing insights are designed to guide and educate readers —
              not to replace professional advice.
            </p>
          </div>

          <div className="legal-card">
            <h2>
              📊 No Guarantees of Results
            </h2>
            <p>
              While we aim to provide honest strategies and useful reviews, marketing and automation
              results vary based on your implementation, effort, and experience.  
              EmailEducate does not guarantee earnings, business growth, or any specific outcomes.
            </p>
          </div>

          <div className="legal-card">
            <h2>
              🔗 External Links and Third-Party Tools
            </h2>
            <p>
              Our articles may include links to third-party tools such as Brevo, Systeme.io, Mailchimp,
              or other platforms.  
              We do not control these websites and are not responsible for their content, policies, or services.
            </p>
          </div>

          <div className="legal-card">
            <h2>
              ⚖️ Financial & Legal Disclaimer
            </h2>
            <p>
              EmailEducate is not a financial, legal, or professional advisory platform.
              For any financial or legal decisions, always consult a licensed professional before acting
              on information shared on this website.
            </p>
          </div>

          <div className="legal-card">
            <h2>
              ⚠️ Your Responsibility
            </h2>
            <p>
              By using this website, you acknowledge that you are responsible for your own actions,
              decisions, and outcomes.  
              EmailEducate shall not be held liable for any direct or indirect damages arising from the
              use of our content or recommendations.
            </p>
          </div>

          <div className="legal-card">
            <h2>
              🕒 Last Updated
            </h2>
            <p>
              This disclaimer was last updated on December 6, 2025.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
