import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function MchangaCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donate via M-Changa</CardTitle>
        <CardDescription>
          Use M-Changa for secure donations via M-Pesa, Airtel Money, cards, and more.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Support us on M-Changa, Africa's most trusted fundraising platform. Your contribution can be made from anywhere in the world. Click the link below to visit our campaign page.
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="https://mchanga.africa/your-campaign" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Go to M-Changa Fundraiser
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
