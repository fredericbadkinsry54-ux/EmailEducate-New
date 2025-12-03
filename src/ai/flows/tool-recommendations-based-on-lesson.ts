'use server';

/**
 * @fileOverview AI-driven tool recommendations based on the current email marketing lesson.
 *
 * - `getToolRecommendations`: A function that takes lesson content as input and returns a list of recommended email marketing tools.
 * - `ToolRecommendationsInput`: The input type for the `getToolRecommendations` function, which includes the lesson content.
 * - `ToolRecommendationsOutput`: The output type for the `getToolRecommendations` function, which is a list of recommended tools.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ToolRecommendationsInputSchema = z.object({
  lessonContent: z
    .string()
    .describe('The content of the current email marketing lesson.'),
});
export type ToolRecommendationsInput = z.infer<
  typeof ToolRecommendationsInputSchema
>;

const ToolRecommendationsOutputSchema = z.object({
  recommendedTools: z
    .array(z.string())
    .describe('A list of recommended email marketing tools.'),
});
export type ToolRecommendationsOutput = z.infer<
  typeof ToolRecommendationsOutputSchema
>;

export async function getToolRecommendations(
  input: ToolRecommendationsInput
): Promise<ToolRecommendationsOutput> {
  return toolRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'toolRecommendationsPrompt',
  input: {schema: ToolRecommendationsInputSchema},
  output: {schema: ToolRecommendationsOutputSchema},
  prompt: `Based on the following email marketing lesson content:\n\n{{lessonContent}}\n\nRecommend a list of suitable email marketing tools (e.g., Mailchimp, ConvertKit). Return only tool names.\n\n{{#each recommendedTools}}\n- {{{this}}}\n{{/each}}\n`,
});

const toolRecommendationsFlow = ai.defineFlow(
  {
    name: 'toolRecommendationsFlow',
    inputSchema: ToolRecommendationsInputSchema,
    outputSchema: ToolRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
