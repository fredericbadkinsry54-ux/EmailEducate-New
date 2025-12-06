
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
      <main className="flex-1">
        <div className="page">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>

          <p className="text-lg leading-8 text-gray-700 mb-6">
            Welcome. My mission is simple — to make email marketing, automation, and
            digital growth easy, ethical, and effective for everyone.
          </p>

          <p className="text-lg leading-8 text-gray-700 mb-6">
            I help individuals, creators, and small teams understand email
            automation, CRM, segmentation, and deliverability using clear,
            experience-based guidance. My focus is on tools you can actually trust,
            especially <span className="text-green-700 font-semibold">Brevo</span>
            , along with other supportive marketing platforms.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">What I Do</h2>

          <p className="text-lg leading-8 text-gray-700 mb-4">
            I focus on practical, honest insights that help you grow without
            complexity or confusion.
          </p>

          <ul className="list-disc ml-6 space-y-3 text-lg text-gray-700 mb-10">
            <li>
              <strong>Email & Marketing:</strong> Practical guides to help you
              design campaigns that engage, convert, and retain customers.
            </li>
            <li>
              <strong>Marketing Automation:</strong> Step-by-step help for
              automating workflows using trusted tools like{" "}
              <span className="text-green-700 font-semibold">Brevo</span>.
            </li>
            <li>
              <strong>CRM & Sales:</strong> Learn simple, effective ways to manage
              customer relationships.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
