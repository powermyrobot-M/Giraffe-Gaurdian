import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: ImagePlaceholder;
  imagePosition?: "left" | "right";
}

export function FeatureSection({
  icon,
  title,
  description,
  image,
  imagePosition = "left",
}: FeatureSectionProps) {
  if (!image) {
    return null;
  }
  return (
    <section className="items-center gap-12 lg:grid lg:grid-cols-2 lg:gap-24">
      <div className={cn("mb-8 lg:mb-0", {
        "lg:order-last": imagePosition === "left",
      })}>
        <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
          {icon}
        </div>
        <h2 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className={cn("flex justify-center", {
        "lg:order-first": imagePosition === "left",
      })}>
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <Image
              src={image.imageUrl}
              alt={image.description}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
