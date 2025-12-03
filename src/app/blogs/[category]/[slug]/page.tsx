
import { lessons } from "@/lib/lessons";
import { notFound } from "next/navigation";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import Image from "next/image";


type ArticlePageParams = {
  params: {
    category: string;
    slug: string;
  };
};

export default function ArticlePage({ params }: ArticlePageParams) {
  const lesson = lessons.find((l) => l.slug === params.slug);

  if (!lesson) {
    notFound();
  }

  const relatedLessons = lessons
    .filter((l) => l.category === lesson.category && l.id !== lesson.id)
    .slice(0, 3);

  const kebabCaseCategory = lesson.category.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col min-h-screen bg-[#e8f5ec]">
      <header className="bg-[#f5fdf8] py-12 px-4 text-center border-b border-[#d1fae5]">
        <div className="inline-block bg-[#dcfce7] text-[#065f46] px-3 py-1 rounded-lg text-sm font-semibold mb-3">
            <Link href={`/blogs/${kebabCaseCategory}`}>{lesson.category}</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-2">{lesson.title}</h1>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-3">
                <Image src="https://picsum.photos/seed/author/45/45" alt="Author" width={45} height={45} className="rounded-full" data-ai-hint="author photo"/>
                <div>
                    <span className="font-semibold text-[#1e293b]">Jane Doe</span>
                    <p className="text-xs">Updated June 12, 2024</p>
                </div>
            </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-10">
                  <div
                    className="prose prose-lg dark:prose-invert max-w-none text-[#1e293b]
                    prose-h2:text-[#047857]
                    prose-p:leading-relaxed prose-a:text-primary
                    prose-strong:text-foreground prose-ul:list-disc prose-ul:pl-6 prose-li:my-1
                    prose-blockquote:border-[#10b981] prose-blockquote:bg-[#ecfdf5] prose-blockquote:text-[#065f46] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: lesson.content }}
                  />
                </CardContent>
              </Card>
            </div>

            <aside className="lg:col-span-1 space-y-6 h-max lg:sticky lg:top-24">
              {relatedLessons.length > 0 && (
                <Card className="bg-[#f5fdf8] shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-[#047857] mb-4 flex items-center gap-2">
                      Related Articles
                    </h3>
                    <ul className="space-y-3">
                      {relatedLessons.map((related) => {
                        const relatedKebabCaseCategory = related.category.toLowerCase().replace(/\s+/g, '-');
                        return (
                          <li key={related.id}>
                            <Link href={`/blogs/${relatedKebabCaseCategory}/${related.slug}`} className="font-medium text-[#065f46] hover:underline transition-colors leading-snug">
                              {related.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </CardContent>
                </Card>
              )}
              <Card className="bg-[#f5fdf8] shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#047857] mb-4">Quote of the Day</h3>
                  <blockquote className="text-[#065f46] border-l-4 border-[#10b981] pl-4 italic">
                    Teach before you pitch — that’s true email marketing.
                  </blockquote>
                </CardContent>
              </Card>
              <Card className="bg-[#f5fdf8] shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#047857] mb-4">Key Takeaways</h3>
                  <ul className="space-y-2 list-disc list-inside text-[#065f46]">
                    <li>Segment your audience for more relevant content.</li>
                    <li>Start with a simple welcome series to build trust.</li>
                    <li>Use analytics to track your campaign performance.</li>
                  </ul>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
