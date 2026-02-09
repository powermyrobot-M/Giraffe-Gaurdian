'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  phone: z.string().regex(/^254\d{9}$/, "Phone number must be in the format 254xxxxxxxxx."),
  amount: z.coerce.number().min(10, "Amount must be at least KES 10."),
})

export function MpesaStkCard() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "254",
      amount: 50,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      // Mock API call to trigger STK push
      console.log("Triggering STK push for:", values);
      setTimeout(() => {
        toast({
          title: "Check your phone!",
          description: `An M-Pesa payment prompt for KES ${values.amount} has been sent to ${values.phone}.`,
        });
      }, 1500);
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Donate with M-Pesa Express</CardTitle>
        <CardDescription>
          Enter your phone number and amount. You'll receive a payment prompt on your phone instantly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount (KES)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>M-Pesa Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="254712345678" {...field} />
                  </FormControl>
                  <FormDescription>
                    Format: 254xxxxxxxxx
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Donate with M-Pesa
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
