import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin } from "lucide-react";
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
                         <div className="footer-social">
                            <a href="#"><Facebook /></a>
                            <a href="#"><Instagram /></a>
                            <a href="#"><Linkedin /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-heading">Categories</h3>
                        <ul className="footer-links">
                            <li><a href="/articles/brevo-email-campaigns">Email Campaigns</a></li>
                            <li><a href="/articles/brevo-marketing-automation">Marketing Automation</a></li>
                            <li><a href="/articles/brevo-deliverability">Inbox & Deliverability</a></li>
                            <li><a href="/articles/brevo-crm-contacts">CRM & Contacts</a></li>
                            <li><a href="/articles/tools-comparison">Tools Comparison</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-heading">Legal</h3>
                        <ul className="footer-links">
                            <li><a href="/legal/about-us">About Me</a></li>
                            <li><a href="/legal/affiliate-disclosure">Affiliate Disclosure</a></li>
                            <li><a href="/legal/contact-us">Contact Me</a></li>
                            <li><a href="/legal/disclaimer">Disclaimer</a></li>
                            <li><a href="/legal/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/legal/terms-of-service">Terms of Service</a></li>
                            <li>
                              <a href="/legal/cookie-policy" className="footer-links">Cookie Policy</a>
                            </li>
                        </ul>
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

                <div className="footer-expanded">

                  {/* LEARNING HUBS */}
                  <div className="footer-row">
                    <h4 className="footer-title">Learning Hubs</h4>
                    <ul>
                      <li><a href="/blogs">Email Marketing</a></li>
                      <li><a href="/blogs">Automation & Workflows</a></li>
                      <li><a href="/blogs">CRM & Contacts</a></li>
                      <li><a href="/blogs">Inbox & Deliverability</a></li>
                      <li><a href="/blogs">Tools & SaaS</a></li>
                      <li><a href="/blogs">Comparison Hub</a></li>
                    </ul>
                  </div>

                  {/* QUICK RESOURCES */}
                  <div className="footer-row">
                    <h4 className="footer-title">Quick Resources</h4>
                    <ul>
                      <li><a href="/blogs">Email Templates</a></li>
                      <li><a href="/blogs">Automation Flow Examples</a></li>
                      <li><a href="/blogs">Deliverability Checklist</a></li>
                      <li><a href="/blogs">CRM Setup Guides</a></li>
                      <li><a href="/pricing">Pricing Breakdown</a></li>
                      <li><a href="/blogs">Brevo Tutorials Hub</a></li>
                    </ul>
                  </div>

                  {/* TRUST + CONNECT */}
                  <div className="footer-row">
                    <h4 className="footer-title">Trusted By Learners</h4>
                    <ul className="trust-badges">
                      <li>✓ Educational Only</li>
                      <li>✓ Independent Platform</li>
                      <li>✓ Brevo-Focused Guides</li>
                      <li>✓ Ad-Free Learning</li>
                    </ul>
                  </div>

                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} EmailEducate. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
