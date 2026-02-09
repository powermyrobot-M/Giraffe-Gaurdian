import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Microscope, Users, CalendarDays, FileText, CheckCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function InternshipsPage() {
  const pageImage = PlaceHolderImages.find(img => img.id === 'internships');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="container py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Internships & Opportunities
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Gain hands-on experience in wildlife conservation while contributing to reticulated giraffe protection in Kenya. Our internships are ideal for students, recent graduates, or anyone passionate about conservation.
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

          <div className="mx-auto mt-12 grid max-w-4xl gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Available Roles</CardTitle>
                <CardDescription>We offer a range of opportunities to get involved.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Microscope className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Field Monitoring & Research</h3>
                    <p className="text-sm text-muted-foreground">Track giraffe populations, collect data, and assist with field research.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Community Education</h3>
                    <p className="text-sm text-muted-foreground">Engage with local communities and schools to promote conservation awareness.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Data Analysis</h3>
                    <p className="text-sm text-muted-foreground">Help process and analyze field data to inform our conservation strategies.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Anti-Poaching Support</h3>
                    <p className="text-sm text-muted-foreground">Support our ranger teams with logistics and monitoring activities.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> A strong passion for wildlife conservation.</p>
                  <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Basic physical fitness for fieldwork.</p>
                  <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> An interest in community-based conservation.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Duration & Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3 mb-4">
                     <CalendarDays className="h-6 w-6 text-primary mt-1" />
                     <div>
                      <h3 className="font-semibold">Placement Duration</h3>
                      <p className="text-sm text-muted-foreground">We offer short-term (a few weeks/months) and longer-term placements.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-3">
                     <FileText className="h-6 w-6 text-primary mt-1" />
                     <div>
                      <h3 className="font-semibold">How to Apply</h3>
                      <p className="text-sm text-muted-foreground">Send your CV and a motivation letter to internships@giraffeguardians.org.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
           <div className="mt-12 text-center text-sm text-muted-foreground bg-background p-4 rounded-lg max-w-4xl mx-auto">
            <p><strong>Please Note:</strong> Opportunities may be volunteer-based or include a stipend, depending on project funding and availability.</p>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="default">Apply Now</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
