import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { CreditCard, Heart, Search } from "lucide-react";
import Actions from "./components/sections/home/actions/actions";
import AdditionalInfo from "./components/sections/home/components/additionalInfo";
import Fundraisers from "./components/sections/home/fundRaisers/fundraisers";
import PaypalRewards from "./components/sections/home/paypalRewards/paypalRewards";
import PopularDeals from "./components/sections/home/popularDeals/popularDeals";
import RecentActivity from "./components/sections/home/recentActivity/recentActivity";
import Requests from "./components/sections/home/requests/requests";

export default function Home() {
    return (
        <main>
            <div className="flex">
                <div className="w-3/5 bg-brand-neutral flex flex-col items-end pr-10 pt-10 pb-28">
                    <PaypalRewards />
                    <Requests />
                    <div className="space-y-5 w-3/4">
                        <Card className="w-full py-4">
                            <CardContent className="flex items-center gap-4 py-0">
                                <div className="text-brand-foreground">2/5</div>
                                <div className="space-y-2">
                                    <h3 className="text-lg leading-3">Set up your account</h3>
                                    <p className="text-sm">Make it easier to use PayPal</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full border-brand-foreground overflow-hidden">
                            <CardContent className="flex justify-between items-center gap-4 py-6 bg-brand-foreground text-white">
                                <div className="space-y-2 mt-5">
                                    <p className="text-lg leading-3">Money is waiting for you</p>
                                    <p className="text-5xl pb-2 pt-9">$2.07</p>
                                    <p className="font-semibold">Accept the money</p>
                                </div>
                                <div className="bg-blue-500 h-20 w-32" />
                            </CardContent>
                            <CardFooter className="flex items-start gap-4 pt-5 pb-4">
                                <CreditCard />
                                <div>
                                    <p>Use a debit card to shop in stores with your PayPal balance.</p>
                                    <Button variant="link" className="text-brand-foreground font-semibold p-0 text-base">Get a PayPal Debit Card</Button>
                                </div>
                            </CardFooter>
                        </Card>
                        <Fundraisers />
                        <RecentActivity />
                        <PopularDeals />
                    </div>
                </div>
                <div className="w-2/5 p-10 pt-12">
                    <div className="w-3/5">
                        <div className="flex gap-4">
                            <Button className="font-semibold w-1/2 py-6 text-lg">Send</Button>
                            <Button className="font-semibold w-1/2 py-6 text-lg">Request</Button>
                        </div>
                        <Actions />
                        <AdditionalInfo title="Send again">
                            <div className="flex gap-6">
                                <div className="space-y-3 w-16">
                                    <div className="w-full h-16 bg-white rounded-full flex justify-center items-center border">
                                        <Heart />
                                    </div>
                                    <p className="bg-red text-center text-sm font-medium">Stickyrella</p>
                                </div>
                                <div className="space-y-3 w-16">
                                    <div className="w-full h-16 bg-brand rounded-full flex justify-center items-center">
                                        <Search className="text-white" size={26} />
                                    </div>
                                    <p className="text-center text-sm font-medium">Search</p>
                                </div>
                            </div>
                        </AdditionalInfo>

                        <AdditionalInfo title="Banks and cards">
                            <div className="space-y-3 w-16" />
                        </AdditionalInfo>

                        <AdditionalInfo title="Your favorite charities">
                            <div className="space-y-3 w-16" />
                        </AdditionalInfo>
                    </div>
                </div>
            </div>
        </main>
    );
}
