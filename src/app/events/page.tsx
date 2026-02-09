import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CalendarCheck, MapPin } from "lucide-react";
import Image from "next/image";

const events = [
    {
        date: "March 15, 2026",
        title: "School Conservation Workshop",
        description: "An interactive workshop for local students to learn about giraffe conservation and the importance of their local ecosystem.",
        location: "Isiolo Primary School, Isiolo"
    },
    {
        date: "April 10, 2026",
        title: "Community Anti-Poaching Awareness Day",
        description: "A community-wide event to discuss the threats of poaching and how we can work together to protect our wildlife.",
        location: "Isiolo Town Center"
    },
    {
        date: "May 22, 2026",
        title: "Giraffe Monitoring Patrol Training",
        description: "Training session for new volunteers and community rangers on giraffe identification, data collection, and patrol techniques.",
        location: "IRGCP Field Office"
    }
];

export default function EventsPage() {
  const pageImage = PlaceHolderImages.find(img => img.id === 'events');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="container py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Events & Calendar
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay updated on our community outreaches, workshops, patrols, education programs, and special events happening in and around Isiolo County.
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

          <div className="mx-auto mt-12 max-w-3xl space-y-8">
            <h2 className="font-headline text-3xl font-bold text-center">Upcoming Activities</h2>
            {events.map((event) => (
              <Card key={event.title} className="flex flex-col md:flex-row">
                <CardHeader className="flex-shrink-0 md:w-1/4">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CalendarCheck className="h-5 w-5" />
                    <span>{event.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 md:w-3/4">
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                   <Button variant="outline" className="mt-4">RSVP / Contact</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground bg-background p-4 rounded-lg max-w-3xl mx-auto">
            <p><strong>Note:</strong> We are working on a dynamic calendar to make it even easier to stay up to date. For now, please check back here for updates.</p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
