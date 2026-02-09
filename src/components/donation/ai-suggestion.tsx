import { suggestDonationAmount } from '@/ai/flows/suggest-donation-amount';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb } from 'lucide-react';

export default async function AiSuggestion() {
  // In a real application, these values would come from a database.
  const monthlyFundingGoal = 5000;
  const currentFundsRaised = 2300;

  const suggestion = await suggestDonationAmount({
    monthlyFundingGoal,
    currentFundsRaised,
  });

  if (!suggestion || !suggestion.suggestedAmount) {
    return (
      <Alert className="mb-8 border-primary/50 bg-primary/10">
        <Lightbulb className="h-4 w-4 !text-primary" />
        <AlertTitle className="text-primary font-bold">We've Reached Our Goal!</AlertTitle>
        <AlertDescription className="text-primary/90">
          Thanks to incredible supporters like you, we've met our funding goal for this month! Any further donations will go towards our next month's efforts.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="mb-8 border-accent-foreground/20 bg-accent/30">
      <Lightbulb className="h-4 w-4" />
      <AlertTitle className="font-bold">AI Donation Suggestion</AlertTitle>
      <AlertDescription>
        {suggestion.reason} How about a donation of{' '}
        <span className="font-bold text-foreground">
          ${suggestion.suggestedAmount.toFixed(2)}
        </span>
        ?
      </AlertDescription>
    </Alert>
  );
}
