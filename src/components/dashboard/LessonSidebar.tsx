
"use client";

import * as React from "react";
import type { Lesson } from "@/lib/types";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  Store,
  Briefcase,
  BookCopy,
  Target,
  Mail,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

interface LessonSidebarProps {
  lessons: Lesson[];
  activeLessonId: string | null;
  onSelectLesson: (id: string) => void;
  completedLessons: string[];
}

const categoryIcons: { [key: string]: React.ElementType } = {
  "Email Campaign Creation": Mail,
  Fundamentals: Lightbulb,
  "Content & Design": BookOpen,
  Advanced: Target,
  "E-commerce": Store,
  "Small Business": Briefcase,
  Tutorials: BookCopy,
};

export function LessonSidebar({
  lessons,
  activeLessonId,
  onSelectLesson,
  completedLessons,
}: LessonSidebarProps) {
  const progress =
    lessons.length > 0
      ? (completedLessons.length / lessons.length) * 100
      : 0;

  const lessonsByCategory = lessons.reduce((acc, lesson) => {
    (acc[lesson.category] = acc[lesson.category] || []).push(lesson);
    return acc;
  }, {} as Record<string, Lesson[]>);

  // Ensure consistent category order
  const categoryOrder = [
    "Email Campaign Creation",
    "Fundamentals",
    "Content & Design",
    "E-commerce",
    "Small Business",
    "Tutorials",
    "Advanced",
  ];

  const sortedCategories = Object.keys(lessonsByCategory).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });


  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Logo className="size-8 text-primary" />
          <span className="text-lg font-semibold">EmailEducate</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        {sortedCategories.map((category) => {
          const categoryLessons = lessonsByCategory[category];
          const CategoryIcon = categoryIcons[category] || BookOpen;
          return (
            <Collapsible key={category} defaultOpen={true} className="mb-4">
              <CollapsibleTrigger className="flex w-full items-center justify-between px-2 py-1 text-sm font-semibold text-muted-foreground hover:text-foreground [&[data-state=open]>svg:last-child]:rotate-90">
                <div className="flex items-center gap-2">
                  <CategoryIcon className="size-4" />
                  <span>{category}</span>
                </div>
                <ChevronRight className="size-4 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenu className="mt-2">
                  {categoryLessons.map((lesson) => (
                    <SidebarMenuItem key={lesson.id}>
                      <SidebarMenuButton
                        onClick={() => onSelectLesson(lesson.id)}
                        isActive={activeLessonId === lesson.id}
                        className="justify-start"
                      >
                        <CheckCircle2
                          className={cn(
                            "size-4 shrink-0 transition-colors",
                            completedLessons.includes(lesson.id)
                              ? "text-primary"
                              : "text-muted-foreground/30"
                          )}
                        />
                        <span className="truncate">{lesson.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 space-y-2">
          <span className="text-sm font-medium">
            {completedLessons.length} of {lessons.length} lessons completed
          </span>
          <Progress value={progress} aria-label={`${Math.round(progress)}% complete`} />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
