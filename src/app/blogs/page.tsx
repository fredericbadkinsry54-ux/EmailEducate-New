
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { lessons } from "@/lib/lessons";
import Image from "next/image";
import { ArrowRight, BookText } from "lucide-react";

export default function BlogsPage() {
  const categories = [...new Set(lessons.map((lesson) => lesson.category))];

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
                <Link href="/about" className="font-medium text-foreground/80 hover:text-foreground transition-colors">About</Link>
                <Link href="/blogs" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Blogs</Link>
                <Link href="/contact" className="font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
            </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-3 text-primary">
                        Explore Our Lessons
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Explore practical lessons organized into key topics, from campaign creation to automation and analytics. Each category helps you build email marketing skills the smart way.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {categories.map(category => {
                        const categoryLessons = lessons.filter(l => l.category === category);
                        const kebabCaseCategory = category.toLowerCase().replace(/\s+/g, '-');
                        return (
                            <div className="category-section-card" key={category}>
                                <div className="p-6">
                                    <Link href={`/blogs/${kebabCaseCategory}`} className="flex justify-between items-center mb-4 text-primary font-semibold text-xl hover:underline">
                                        <span>Popular in {category}</span>
                                        <ArrowRight className="size-5" />
                                    </Link>
                                    <div className="space-y-4">
                                        {categoryLessons.slice(0, 3).map((lesson, index) => {
                                            const placeholderId = (lesson.id.charCodeAt(0) + index) % 10 + 1;
                                            return (
                                              <Link href={`/blogs/${kebabCaseCategory}/${lesson.slug}`} key={lesson.id} className="category-lesson-item group">
                                                  <Image
                                                      src={`https://picsum.photos/seed/${placeholderId}/100/100`}
                                                      alt={lesson.title}
                                                      width={60}
                                                      height={60}
                                                      className="rounded-lg object-cover"
                                                      data-ai-hint="lesson topic"
                                                  />
                                                  <div className="flex-1">
                                                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{lesson.title}</h4>
                                                      <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                                          <BookText className="size-4" />
                                                          <span>Lesson</span>
                                                      </div>
                                                  </div>
                                              </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
