
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactMe() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
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
      <main className="flex-1">
        <div className="legal-container">

          <h1 className="legal-title">Contact Me</h1>
          <p className="legal-subtitle">
            I’d love to hear from you. Whether you need help with email marketing,
            automation, Brevo setup, or you want to collaborate — feel free to reach out anytime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">

            <section>
              <div className="legal-card">
                <h2>Support & Inquiries</h2>
                <p>
                  For technical issues, learning support, or help with your marketing workflow,
                  you can contact me directly:
                </p>
                <p className="font-semibold text-green-700 my-2">
                  support@emaileducate.online
                </p>
                <p>
                  I normally reply within 24–48 hours. Every message is handled personally —
                  no bots, no scripts.
                </p>
              </div>

              <div className="legal-card">
                <h2>How I Can Help</h2>
                <ul>
                  <li>Understanding email marketing & automation basics</li>
                  <li>Choosing the right tool (especially <span className="text-green-700 font-semibold">Brevo</span>)</li>
                  <li>Reviewing your campaign setup or deliverability issues</li>
                  <li>Learning CRM, segmentation, and workflow automation</li>
                  <li>General guidance for your marketing system or strategy</li>
                </ul>
              </div>

              <div className="legal-card">
                <h2>Collaboration & Projects</h2>
                <p>
                  I collaborate with creators, marketers, and small teams who want guidance
                  on building better systems powered by tools like Brevo.
                </p>
                <p className="font-semibold text-green-700 mt-2">
                  For collaborations: support@emaileducate.online
                </p>
              </div>
            </section>

            <section className="legal-card">
              <h2>Send Me a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and I’ll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" type="text" placeholder="e.g., Automation Help, Brevo Setup"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} placeholder="Tell me how I can help..." />
                </div>
                <Button type="submit" className="w-full text-lg button-animated" size="lg">
                  Send Message
                </Button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
