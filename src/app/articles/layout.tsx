"use client";
import { ArticleSidebar } from "@/components/layout/ArticleSidebar";
import { usePathname } from "next/navigation";

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Detect current category from URL
    const getCategory = () => {
        if (pathname.includes("brevo-marketing-automation")) return "brevo-marketing-automation";
        if (pathname.includes("brevo-deliverability")) return "brevo-deliverability";
        if (pathname.includes("brevo-crm-contacts")) return "brevo-crm-contacts";
        if (pathname.includes("tools-comparison")) return "tools-comparison";
        return "brevo-email-campaigns";
    };

    // Get current article path
    const currentPath = pathname.split("/").pop() || "";

    // Category pages — no sidebar needed
    const isCategoryPage = [
        "/articles/brevo-email-campaigns",
        "/articles/brevo-marketing-automation",
        "/articles/brevo-deliverability",
        "/articles/brevo-crm-contacts",
        "/articles/tools-comparison",
    ].includes(pathname);

    if (isCategoryPage) {
        return <>{children}</>;
    }

    return (
        <div style={{ background: "#0a1628", minHeight: "100vh" }}>
            <div className="article-layout">
                <div className="article-main">
                    {children}
                </div>
                <div className="article-sidebar">
                    <ArticleSidebar
                        currentCategory={getCategory()}
                        currentPath={currentPath}
                    />
                </div>
            </div>
        </div>
    );
}