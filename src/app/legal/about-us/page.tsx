
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function AboutPage() {
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
          <h1>About Me</h1>
          <p>I’m an independent creator sharing email marketing knowledge, tutorials, and practical tools. I’m not a company or agency — just one person building useful resources for others.</p>
        </div>
      </main>
    </div>
  );
}
