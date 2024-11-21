import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleAlert } from "lucide-react";
import Image from "next/image";

const Preview = () => {
    return (
        <div className="w-1/2">
            <Tabs defaultValue="Email preview" className="w-full">
                <TabsList className="grid grid-cols-3 w-3/4 h-11 mx-auto rounded-full bg-gray-200/50">

                    {
                        ["invoice PDF preview", "Mobile preview", "Email preview"].map((value) => (
                            <TabsTrigger
                                key={value}
                                value={value}
                                className=" ring-transparent ring-offset-2 border border-transparent data-[state=active]:ring-1 data-[state=active]:border-gray-300 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:ring-brand-foreground px-9 h-full rounded-full capitalize"
                            >
                                {value}
                            </TabsTrigger>
                        ))
                    }
                </TabsList>
                <TabsContent value="Email preview" className="py-4">
                    <Card className="w-full rounded-none bg-transparent shadow-md p-3">
                        <CardHeader className="space-y-6">
                            <Image
                                src="/images/logos/paypal-dark.png"
                                alt="paypal"
                                width={25}
                                height={25}
                            />
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            <h1 className="text-4xl text-brand font-semibold">Here&apos;s your invoice</h1>
                            <p>Sam Lee sent you an invoice for $21.00 USD</p>
                            <p>Due date: Aug 23, 2024</p>
                            <div className="bg-white py-3 px-4 space-y-4 text-xs">
                                <h3 className="text-sm">Invoice details</h3>
                                <div className="space-y-2">
                                    <p className="font-semibold">Amount requested</p>
                                    <p>$21.00 USD</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-semibold">Invoice number</p>
                                    <p>0202</p>
                                </div>
                            </div>
                            <Button className="px-6 py-5 font-semibold">View and Pay Invoice</Button>
                            <div>
                                <p className="text-base">Don&apos;t recognize this invoice?</p>
                                <div className="flex items-center text-brand-foreground">
                                    <CircleAlert size={18} />
                                    <Button variant="link" className="text-[13px] text-brand-foreground">Report this invoice</Button>
                                </div>
                            </div>
                            <p>Before paying, make sure you recognize this invoice. If you dont report it. Learn more about common security threats and how to spot them. For example, PayPal would never use an invoice or a money request to ask you for your account credentials.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="invoice PDF preview" className="" >
                    <Card className="w-full h-[591px] rounded-none bg-transparent shadow-md p-3" />
                </TabsContent>
                <TabsContent value="Mobile preview" className="" >
                    <Card className="w-full h-[591px] rounded-none bg-transparent shadow-md p-3" />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Preview