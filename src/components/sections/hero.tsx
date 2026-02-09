import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  if (!heroImage) return null;

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div className="container max-w-4xl space-y-6">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            Protecting Reticulated Giraffes in Isiolo County, Kenya
          </h1>
          <h2 className="text-xl font-semibold md:text-2xl text-primary-foreground/80">
            Join the Isiolo Reticulated Giraffe Conservation Program (IRGCP)
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Join us in conserving the iconic reticulated giraffe population through community-based initiatives addressing habitat loss, poaching, and human-wildlife conflict.
          </p>
          <Button size="lg" asChild>
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
