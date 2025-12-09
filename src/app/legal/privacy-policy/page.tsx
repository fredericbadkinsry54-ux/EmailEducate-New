
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
      
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">Your privacy is important to us.</p>

          <div className="legal-card">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              Information We Collect
            </h2>
            <p>At EmailEducate, your privacy matters. We are committed to keeping your personal information secure, transparent, and confidential.</p>
            <ul>
              <li>Your name and email address (when you subscribe or contact us).</li>
              <li>Any preferences or feedback you voluntarily share with us.</li>
            </ul>
          </div>

          <div className="legal-card">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              How We Use Your Information
            </h2>
            <ul>
              <li>Sharing marketing insights, newsletters, and helpful updates.</li>
              <li>Improving our content and overall site experience.</li>
              <li>Responding to your inquiries and communication requests.</li>
            </ul>
          </div>

          <div className="legal-card">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              Data Retention & Security
            </h2>
            <ul>
              <li>
                We retain your information only as long as necessary to provide our services 
                or comply with legal requirements.
              </li>
              <li>
                Your data is stored securely, and we take all reasonable measures to prevent 
                unauthorized access or misuse.
              </li>
            </ul>
          </div>

          <div className="legal-card">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">Your Rights</h2>
            <ul>
              <li>You have full control over your personal information.</li>
              <li>
                You may request access, correction, deletion, or withdrawal of communication 
                consent at any time.
              </li>
            </ul>
          </div>

          <div className="legal-card">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, feel free to contact us at:{' '}
              <span className="font-semibold text-green-700">support@emaileducate.online</span>
            </p>
          </div>

          <div className="legal-card">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">Policy Updates</h2>
            <p>
              We may update this Privacy Policy as needed to reflect changes in our practices 
              or for legal compliance.
            </p>
            <p className="mt-2 text-gray-600 text-sm">Last updated: December 2025</p>
          </div>

        </div>
      </main>
    </div>
  );
}
