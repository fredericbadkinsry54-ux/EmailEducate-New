"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getToolRecommendationsAction } from "@/app/actions";
import { Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ToolRecommendationsProps {
  lessonContent: string;
}

export function ToolRecommendations({ lessonContent }: ToolRecommendationsProps) {
  const [recommendations, setRecommendations] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchRecommendations() {
      try {
        setLoading(true);
        const result = await getToolRecommendationsAction({ lessonContent });
        if (result && result.recommendedTools.length > 0) {
          setRecommendations(result.recommendedTools);
        }
      } catch (error) {
        console.error("Failed to fetch tool recommendations:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecommendations();
  }, [lessonContent]);

  if (loading) {
    return (
      <Card className="mt-8 bg-accent/20 border-accent/50">
        <CardHeader>
            <div className="flex items-center gap-3">
                <div className="p-2 bg-accent rounded-md">
                    <Wrench className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                    <CardTitle className="text-xl">AI Tool Recommendations</CardTitle>
                    <CardDescription>Finding the best tools for you...</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-32 rounded-full" />
          <Skeleton className="h-8 w-28 rounded-full" />
        </CardContent>
      </Card>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8 bg-accent/20 border-accent/50 animate-in fade-in-50 duration-500">
      <CardHeader>
        <div className="flex items-center gap-3">
            <div className="p-2 bg-accent rounded-md">
                <Wrench className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
                <CardTitle className="text-xl">AI Tool Recommendations</CardTitle>
                <CardDescription>Based on this lesson, you might find these tools helpful.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {recommendations.map((tool) => (
            <Badge key={tool} variant="outline" className="text-base px-4 py-1 bg-background border-accent text-accent-foreground shadow-sm">
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
