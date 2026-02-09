import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Building, Globe, Handshake, Users } from "lucide-react";
import Image from "next/image";

export default function PartnershipsPage() {
  const pageImage = PlaceHolderImages.find(img => img.id === 'partnerships');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="container py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Partnerships – Collaborating for Lasting Conservation
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe in the power of collaboration. The IRGCP works with local communities, government agencies, other NGOs, researchers, and private partners to protect reticulated giraffes sustainably.
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
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle>Community Partners</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our work is rooted in collaboration with local Isiolo community groups and rangers who are the frontline guardians of the giraffes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Globe className="h-8 w-8 text-primary" />
                  <CardTitle>Organizational Partners</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We partner with national and international wildlife NGOs and research institutions to leverage expertise and resources.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Building className="h-8 w-8 text-primary" />
                  <CardTitle>Corporate & Institutional Partners</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We welcome partnerships with businesses, universities, and other institutions interested in corporate social responsibility and conservation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Handshake className="h-8 w-8 text-primary" />
                  <CardTitle>Benefits of Partnering</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Partnerships lead to shared resources, joint conservation projects, and a greater collective impact for giraffe protection.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="font-headline text-3xl font-bold">Interested in partnering with us?</h2>
            <p className="mt-2 text-lg text-muted-foreground">Reach out via our contact form or email us at partnerships@giraffeguardians.org.</p>
            <Button size="lg" className="mt-6">Contact Us</Button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
