
"use client";

import * as React from "react";
import type { Lesson } from "@/lib/types";
import { AppHeader } from "@/components/layout/AppHeader";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { LessonSidebar } from "@/components/dashboard/LessonSidebar";
import { LessonContent } from "@/components/dashboard/LessonContent";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useSearchParams, useRouter } from "next/navigation";

interface DashboardClientProps {
  lessons: Lesson[];
}

export function DashboardClient({ lessons }: DashboardClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lessonIdFromUrl = searchParams.get("lesson");

  const [activeLessonId, setActiveLessonId] = React.useState<string | null>(
    () => {
      if (lessonIdFromUrl && lessons.find(l => l.id === lessonIdFromUrl)) {
        return lessonIdFromUrl;
      }
      return lessons[0]?.id ?? null;
    }
  );

  const [completedLessons, setCompletedLessons] = useLocalStorage<string[]>(
    "completedLessons",
    []
  );

  React.useEffect(() => {
    if (lessonIdFromUrl && lessons.find(l => l.id === lessonIdFromUrl)) {
      setActiveLessonId(lessonIdFromUrl);
    }
  }, [lessonIdFromUrl, lessons]);

  const handleSelectLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    // Update URL without reloading the page
    router.push(`/dashboard?lesson=${lessonId}`, { scroll: false });
  };


  const activeLesson = React.useMemo(
    () => lessons.find((lesson) => lesson.id === activeLessonId) || null,
    [activeLessonId, lessons]
  );

  const isCompleted = React.useCallback(
    (lessonId: string) => completedLessons.includes(lessonId),
    [completedLessons]
  );

  const handleToggleComplete = (lessonId: string) => {
    setCompletedLessons((prev) => {
      if (prev.includes(lessonId)) {
        return prev.filter((id) => id !== lessonId);
      } else {
        const nextLessonIndex = lessons.findIndex(l => l.id === lessonId) + 1;
        if (nextLessonIndex < lessons.length) {
          const nextLessonId = lessons[nextLessonIndex].id;
          handleSelectLesson(nextLessonId);
        }
        return [...prev, lessonId];
      }
    });
  };

  return (
    <SidebarProvider>
      <LessonSidebar
        lessons={lessons}
        activeLessonId={activeLessonId}
        onSelectLesson={handleSelectLesson}
        completedLessons={completedLessons}
      />
      <SidebarInset>
        <AppHeader />
        <main className="p-4 sm:p-6 lg:p-8">
          {activeLesson ? (
            <LessonContent
              key={activeLesson.id}
              lesson={activeLesson}
              isCompleted={isCompleted(activeLesson.id)}
              onToggleComplete={handleToggleComplete}
              allLessons={lessons}
              onSelectLesson={handleSelectLesson}
            />
          ) : (
            <div className="flex h-[80vh] items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold">Welcome to EmailEducate</h2>
                <p className="mt-2 text-muted-foreground">
                  Select a lesson from the sidebar to get started.
                </p>
              </div>
            </div>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
