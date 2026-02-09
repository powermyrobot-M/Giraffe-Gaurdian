import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { HeartHandshake, Megaphone, Share2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GetInvolvedPage() {
  const pageImage = PlaceHolderImages.find(img => img.id === 'get-involved');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="container py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Get Involved – Join the Fight to Protect Reticulated Giraffes
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              There are many ways to support the Isiolo Reticulated Giraffe Conservation Program. Whether through volunteering, advocacy, spreading awareness, or other actions, your help makes a real difference in conserving reticulated giraffes from habitat loss, poaching, and human-wildlife conflict.
            </p>
          </div>

          {pageImage && (
            <div className="mx-auto mt-12 max-w-4xl">
              <Image
                src={pageImage.imageUrl}
                alt={pageImage.description}
                width={1200}
                height={600}
                className="rounded-lg object-cover aspect-[2/1] shadow-lg"
                data-ai-hint={pageImage.imageHint}
              />
            </div>
          )}

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                  <CardTitle>Volunteer with Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join our teams on the ground. Opportunities include community patrols, education outreach, and habitat monitoring.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                  <CardTitle>Donate</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your financial support is crucial. Every contribution goes directly towards our conservation efforts.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Share2 className="h-8 w-8 text-primary" />
                  <CardTitle>Spread the Word</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Follow us on social media, share our stories, and host your own awareness events to amplify our message.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Megaphone className="h-8 w-8 text-primary" />
                  <CardTitle>Advocate for Giraffes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Support policies and legislation that protect wildlife and their habitats in Kenya. Your voice matters.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-headline text-3xl font-bold">Ready to help?</h2>
            <p className="mt-2 text-lg text-muted-foreground">Contact us today to learn more or explore other pages to see how you can contribute.</p>
            <Button size="lg" className="mt-6">Contact Us</Button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
