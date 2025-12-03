
"use client";

import * as React from "react";
import type { Lesson } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ToolRecommendations } from "./ToolRecommendations";
import { Check, BookOpen } from "lucide-react";
import Link from "next/link";

interface LessonContentProps {
  lesson: Lesson;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
  allLessons: Lesson[];
  onSelectLesson: (id: string) => void;
}

export function LessonContent({
  lesson,
  isCompleted,
  onToggleComplete,
  allLessons,
  onSelectLesson,
}: LessonContentProps) {
  const [showCheck, setShowCheck] = React.useState(isCompleted);

  const handleCompleteClick = () => {
    onToggleComplete(lesson.id);
    if (!isCompleted) {
      setShowCheck(true);
    }
  };

  React.useEffect(() => {
    setShowCheck(isCompleted);
  }, [isCompleted]);

  const relatedLessons = allLessons
    .filter((l) => l.category === lesson.category && l.id !== lesson.id)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
          {lesson.title}
        </h1>
        <p className="text-muted-foreground">
          In category: <Link href={`/blogs/${lesson.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">{lesson.category}</Link>
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div
                className="prose prose-lg dark:prose-invert max-w-none text-foreground/90
                prose-headings:text-foreground prose-p:leading-relaxed prose-a:text-primary
                prose-strong:text-foreground prose-ul:list-disc prose-ul:pl-6 prose-li:my-1
                prose-blockquote:border-primary prose-blockquote:bg-accent/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-md"
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />

              <div className="mt-8 pt-8 border-t">
                <Button onClick={handleCompleteClick} size="lg" disabled={isCompleted}>
                  {showCheck ? (
                    <div className="flex items-center">
                      <Check className="mr-2 h-5 w-5 animate-check-pop" />
                      Completed
                    </div>
                  ) : (
                    "Mark as Complete"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
          <ToolRecommendations lessonContent={lesson.content} />
        </div>

        <aside className="lg:col-span-1 space-y-6 h-max lg:sticky lg:top-24">
           {relatedLessons.length > 0 && (
            <Card>
                <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                        <BookOpen className="size-5 text-primary"/>
                        Related Lessons
                    </h3>
                    <ul className="space-y-3">
                        {relatedLessons.map(related => (
                             <li key={related.id}>
                                <Link href="#" onClick={(e) => { e.preventDefault(); onSelectLesson(related.id); }} className="font-medium text-muted-foreground hover:text-primary transition-colors leading-snug">
                                    {related.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
           )}
           <Card>
                <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-4">Key Takeaways</h3>
                     <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Start small—clarity beats volume.</li>
                        <li>Personalize your approach.</li>
                        <li>Track your results and keep iterating.</li>
                    </ul>
                </CardContent>
            </Card>
        </aside>
      </div>
    </div>
  );
}
