'use server';

/**
 * @fileOverview A flow to suggest a donation amount based on the current funding needs of the IRGCP.
 *
 * - suggestDonationAmount - A function that suggests a donation amount.
 * - SuggestDonationAmountInput - The input type for the suggestDonationAmount function.
 * - SuggestDonationAmountOutput - The return type for the suggestDonationAmount function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDonationAmountInputSchema = z.object({
  monthlyFundingGoal: z
    .number()
    .describe('The monthly funding goal of the IRGCP in USD.'),
  currentFundsRaised: z
    .number()
    .describe('The current amount of funds raised this month in USD.'),
});
export type SuggestDonationAmountInput = z.infer<
  typeof SuggestDonationAmountInputSchema
>;

const SuggestDonationAmountOutputSchema = z.object({
  suggestedAmount: z
    .number()
    .nullable()
    .describe(
      'A suggested donation amount in USD, or null if no suggestion is needed.'
    ),
  reason: z
    .string()
    .nullable()
    .describe(
      'The reason for the suggested amount, or null if no suggestion is needed.'
    ),
});
export type SuggestDonationAmountOutput = z.infer<
  typeof SuggestDonationAmountOutputSchema
>;

export async function suggestDonationAmount(
  input: SuggestDonationAmountInput
): Promise<SuggestDonationAmountOutput> {
  return suggestDonationAmountFlow(input);
}

const suggestDonationAmountPrompt = ai.definePrompt({
  name: 'suggestDonationAmountPrompt',
  input: {schema: SuggestDonationAmountInputSchema},
  output: {schema: SuggestDonationAmountOutputSchema},
  prompt: `You are a donation suggestion AI assistant for the Isiolo Reticulated Giraffe Conservation Program (IRGCP).\
\
You will be given the monthly funding goal and the current funds raised. Your task is to suggest a donation amount to the user based on the current funding needs. If the funding goal is already met, return null for both suggestedAmount and reason.\
\
Consider suggesting an amount that would help the IRGCP reach its funding goal, while also being a reasonable amount for an individual to donate. Consider suggesting recurring donation amounts, if appropriate.\
\
Monthly Funding Goal: {{{monthlyFundingGoal}}}
Current Funds Raised: {{{currentFundsRaised}}}\
\
Output your response in JSON format. If no suggestion is needed, set suggestedAmount and reason to null.
`,
});

const suggestDonationAmountFlow = ai.defineFlow(
  {
    name: 'suggestDonationAmountFlow',
    inputSchema: SuggestDonationAmountInputSchema,
    outputSchema: SuggestDonationAmountOutputSchema,
  },
  async input => {
    if (input.currentFundsRaised >= input.monthlyFundingGoal) {
      return {
        suggestedAmount: null,
        reason: 'The funding goal has already been met.',
      };
    }

    const {output} = await suggestDonationAmountPrompt(input);
    return output!;
  }
);
