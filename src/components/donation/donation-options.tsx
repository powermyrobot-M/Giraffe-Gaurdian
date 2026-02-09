import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MchangaCard } from "@/components/donation/mchanga-card";
import { MpesaPaybillCard } from "@/components/donation/mpesa-paybill-card";
import { MpesaStkCard } from "@/components/donation/mpesa-stk-card";

export function DonationOptions() {
  return (
    <Tabs defaultValue="mpesa-stk" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="mpesa-stk">M-Pesa Express</TabsTrigger>
        <TabsTrigger value="mchanga">M-Changa</TabsTrigger>
        <TabsTrigger value="mpesa-paybill">M-Pesa PayBill</TabsTrigger>
      </TabsList>
      <TabsContent value="mpesa-stk">
        <MpesaStkCard />
      </TabsContent>
      <TabsContent value="mchanga">
        <MchangaCard />
      </TabsContent>
      <TabsContent value="mpesa-paybill">
        <MpesaPaybillCard />
      </TabsContent>
    </Tabs>
  )
}
