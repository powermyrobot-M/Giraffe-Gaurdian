import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeatureSection } from "@/components/sections/feature-section";
import { Gallery } from "@/components/sections/gallery";
import { Cta } from "@/components/sections/cta";
import { HeartHandshake, ShieldCheck, Users, BookOpen } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  {
    icon: <HeartHandshake className="h-10 w-10" />,
    title: "Our Mission",
    description: "To ensure the long-term survival of the reticulated giraffe by fostering a peaceful coexistence between wildlife and people in Isiolo County through community-led conservation efforts.",
    image: PlaceHolderImages.find(img => img.id === 'gallery2'),
    imagePosition: "right" as const
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Protection Efforts",
    description: "Our dedicated teams conduct daily patrols and monitoring to deter poaching, remove snares, and provide a protective presence for giraffe populations across their range.",
    image: PlaceHolderImages.find(img => img.id === 'gallery3'),
    imagePosition: "left" as const
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Community Engagement",
    description: "We work hand-in-hand with local communities, providing alternative livelihood support and conservation incentives to reduce dependency on activities that harm giraffe habitats.",
    image: PlaceHolderImages.find(img => img.id === 'gallery4'),
    imagePosition: "right" as const
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Education Programs",
    description: "Through school outreach and community workshops, we raise awareness about the importance of giraffe conservation, inspiring the next generation of wildlife guardians.",
    image: PlaceHolderImages.find(img => img.id === 'gallery5'),
    imagePosition: "left" as const
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container space-y-24 py-16 md:py-24">
          {features.map((feature, index) => (
            <FeatureSection 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              imagePosition={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
        <Gallery />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
