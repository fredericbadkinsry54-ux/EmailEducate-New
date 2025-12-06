
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
        <div className="max-w-6xl mx-auto py-16 px-6">

          {/* Heading */}
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg text-gray-700 max-w-2xl leading-8 mb-10">
            I’d love to hear from you. Whether you need help with email marketing,
            automation, Brevo setup, or you want to collaborate — feel free to reach out anytime.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left Section */}
            <section>

              {/* Support & Inquiries */}
              <h2 className="text-2xl font-bold mb-3">Support & Inquiries</h2>
              <p className="text-lg text-gray-700 leading-7 mb-4">
                For technical issues, learning support, or help with your marketing workflow,
                you can contact me directly:
              </p>

              <p className="text-lg font-semibold text-green-700 mb-4">
                support@emaileducate.online
              </p>

              <p className="text-gray-600 mb-10 text-lg leading-7">
                I normally reply within 24–48 hours. Every message is handled personally —
                no bots, no scripts.
              </p>

              {/* How I Can Help */}
              <h2 className="text-2xl font-bold mb-3">How I Can Help</h2>
              <ul className="list-disc pl-6 text-lg text-gray-700 leading-8 mb-10">
                <li>Understanding email marketing & automation basics</li>
                <li>Choosing the right tool (especially <span className="text-green-700 font-semibold">Brevo</span>)</li>
                <li>Reviewing your campaign setup or deliverability issues</li>
                <li>Learning CRM, segmentation, and workflow automation</li>
                <li>General guidance for your marketing system or strategy</li>
              </ul>

              {/* Collaboration */}
              <h2 className="text-2xl font-bold mb-3">Collaboration & Projects</h2>
              <p className="text-lg text-gray-700 leading-7 mb-4">
                I collaborate with creators, marketers, and small teams who want guidance
                on building better systems powered by tools like Brevo.
              </p>

              <p className="text-lg font-semibold text-green-700">
                For collaborations: support@emaileducate.online
              </p>
            </section>

            {/* Right Section: Form */}
            <section className="bg-white border border-gray-200 rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <p className="text-gray-600 text-lg mb-6">
                Fill out the form below and I’ll get back to you as soon as possible.
              </p>

              <form className="space-y-6">

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="e.g., Automation Help, Brevo Setup"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me how I can help..."
                  />
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  className="w-full text-lg button-animated"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </section>
          </div>

          <p className="text-sm text-gray-500 mt-12 italic">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </main>
    </div>
  );
}
