import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Logo className="size-8 text-primary" />
                            <span className="font-bold text-xl text-foreground">EmailEducate</span>
                        </div>
                        <p className="text-sm">Bite-sized email marketing lessons to grow your skills and business.</p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="size-5" />
                            </Link>
                             <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="size-5" />
                            </Link>
                             <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="size-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Platform</h3>
                        <Link href="/blogs" className="footer-link">Blogs</Link>
                        <Link href="/legal/about-us" className="footer-link">About Us</Link>
                        <Link href="/legal/contact-us" className="footer-link">Contact</Link>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Legal</h3>
                        <Link href="/legal/about-us" className="footer-link">About Me</Link>
                        <Link href="/legal/affiliate-disclosure" className="footer-link">Affiliate Disclosure</Link>
                        <Link href="/legal/contact-us" className="footer-link">Contact Me</Link>
                        <Link href="/legal/disclaimer" className="footer-link">Disclaimer</Link>
                        <Link href="/legal/privacy-policy" className="footer-link">Privacy Policy</Link>
                        <Link href="/legal/terms-of-service" className="footer-link">Terms of Service</Link>
                    </div>

                    <div>
                        <h3 className="footer-heading">Stay Updated</h3>
                        <p className="text-sm mb-3">Get weekly lessons and tutorials in your inbox.</p>
                        <form className="flex">
                            <Input type="email" placeholder="Enter your email" className="rounded-r-none focus:!ring-0 text-foreground bg-background" required />
                            <Button type="submit" variant="secondary" className="rounded-l-none button-animated"><span>Subscribe</span></Button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} EmailEducate. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
