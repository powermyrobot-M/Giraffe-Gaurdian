import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Cta() {
  return (
    <section className="py-16 md:py-24">
      <div className="container text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Your Donation Makes a Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every contribution helps protect reticulated giraffes and supports local communities. Together, we can secure a future for these magnificent animals.
          </p>
          <Button size="lg" asChild className="mt-8">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
