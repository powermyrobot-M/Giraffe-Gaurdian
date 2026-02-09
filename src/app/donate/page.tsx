import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DonationOptions } from "@/components/donation/donation-options";
import AiSuggestion from "@/components/donation/ai-suggestion";

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="container py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Support Our Cause
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your generosity is vital for our conservation work. Choose your preferred way to contribute and help us protect Kenya's giraffes.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
             <AiSuggestion />
             <DonationOptions />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
