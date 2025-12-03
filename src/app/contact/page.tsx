
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/50">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <div className="flex items-center gap-2">
          <Logo className="size-7 text-primary" />
          <h1 className="text-xl font-semibold tracking-tight">EmailEducate</h1>
        </div>
        <div className="flex w-full items-center justify-end gap-4">
            <nav className="hidden md:flex gap-6">
                <Link href="/" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Home</Link>
                <Link href="/about" className="font-medium text-foreground/80 hover:text-foreground transition-colors">About</Link>
                <Link href="/blogs" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Blogs</Link>
                <Link href="/contact" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
            </nav>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12 px-4 relative">
         <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>
        <Card className="w-full max-w-lg z-10">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl">Contact Us</CardTitle>
                <CardDescription>Have questions? We'd love to hear from you.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message..." />
                    </div>
                    <Button type="submit" className="w-full button-animated"><span>Send Message</span></Button>
                </form>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
