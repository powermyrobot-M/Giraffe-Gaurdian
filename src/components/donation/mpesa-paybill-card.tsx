import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function MpesaPaybillCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donate with M-Pesa PayBill</CardTitle>
        <CardDescription>
          Follow these steps to donate directly from your M-Pesa account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border p-3 bg-background">
          <span className="text-sm text-muted-foreground">PayBill Number</span>
          <span className="font-mono font-semibold">123456</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3 bg-background">
          <span className="text-sm text-muted-foreground">Account Number</span>
          <span className="font-mono font-semibold">IRGCP</span>
        </div>
        <Separator />
        <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Go to your M-Pesa menu</li>
          <li>Select "Lipa na M-Pesa"</li>
          <li>Select "PayBill"</li>
          <li>Enter the Business Number: <strong>123456</strong></li>
          <li>Enter Account Number: <strong>IRGCP</strong></li>
          <li>Enter the amount you wish to donate</li>
          <li>Enter your M-Pesa PIN and confirm</li>
        </ol>
      </CardContent>
    </Card>
  );
}
