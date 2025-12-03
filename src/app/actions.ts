"use server";

import {
  getToolRecommendations,
  type ToolRecommendationsInput,
} from "@/ai/flows/tool-recommendations-based-on-lesson";

export async function getToolRecommendationsAction(
  input: ToolRecommendationsInput
) {
  return await getToolRecommendations(input);
}
