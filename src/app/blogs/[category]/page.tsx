
import { lessons } from "@/lib/lessons";
import { Lesson } from "@/lib/types";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import Image from "next/image";
import { notFound } from 'next/navigation';
import { BookText } from "lucide-react";

type CategoryPageParams = {
  params: {
    category: string;
  };
};

function getCategoryName(slug: string): string {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export default function CategoryPage({ params }: CategoryPageParams) {
  const categoryName = getCategoryName(params.category);
  const categoryLessons = lessons.filter(
    (lesson) => lesson.category === categoryName
  );

  if (categoryLessons.length === 0) {
    notFound();
  }

  const kebabCaseCategory = categoryName.toLowerCase().replace(/\s+/g, '-');

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

      <main className="flex-1">
        <header className="bg-primary text-primary-foreground py-12 text-center">
            <h1 className="text-4xl font-bold">{categoryName}</h1>
            <p className="text-lg mt-2 max-w-2xl mx-auto">Explore all {categoryLessons.length} lessons on {categoryName.toLowerCase()}.</p>
        </header>

        <section className="max-w-4xl mx-auto p-4 md:p-6">
            <div className="space-y-6">
                {categoryLessons.map((lesson, index) => {
                    const placeholderId = (lesson.id.charCodeAt(0) + index) % 10 + 1;
                    return (
                        <Link href={`/blogs/${kebabCaseCategory}/${lesson.slug}`} key={lesson.id} className="category-lesson-item large group bg-card p-4 rounded-xl border-2 border-transparent hover:border-primary/30 hover:bg-card">
                            <Image
                                src={`https://picsum.photos/seed/${placeholderId}/150/150`}
                                alt={lesson.title}
                                width={100}
                                height={100}
                                className="rounded-lg object-cover"
                                data-ai-hint="lesson topic"
                            />
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{lesson.title}</h2>
                                <div className="text-md text-muted-foreground flex items-center gap-2 mt-2">
                                    <BookText className="size-5 text-primary" />
                                    <span>Lesson</span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
      </main>
    </div>
  );
}
