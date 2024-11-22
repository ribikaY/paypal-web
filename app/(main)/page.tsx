import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Search } from "lucide-react";
import Image from "next/image";
import { FaCreditCard } from "react-icons/fa6";
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
            <div className="flex flex-row gap-4 lg:hidden bg-brand-neutral pt-10 container px-4 sm:px-8">
                <Button className="font-semibold w-1/2 py-5 sm:py-6 sm:text-lg">Send</Button>
                <Button className="font-semibold w-1/2 py-5 sm:py-6 sm:text-lg">Request</Button>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-1/2 xl:w-3/5 bg-brand-neutral flex flex-col items-center lg:items-end px-4 sm:px-6 lg:pr-10 pt-6 sm:pt-10 pb-14 sm:pb-28 space-y-10">
                    <PaypalRewards />
                    <Requests />
                    <div className="space-y-5 w-full sm:w-4/5 lg:w-3/4">
                        <Card className="w-full py-4">
                            <CardContent className="flex items-center gap-4 py-0">
                                <div className="text-brand-foreground rounded-full border-2 p-4">2/5</div>
                                <div className="space-y-2">
                                    <h3 className="text-lg leading-3">Set up your account</h3>
                                    <p className="text-sm">Make it easier to use PayPal</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full border-brand-foreground overflow-hidden">
                            <CardContent className="flex flex-wrap justify-between items-center gap-4 py-6 bg-brand-foreground text-white">
                                <div className="space-y-2 mt-5">
                                    <p className="text-lg leading-3">Money is waiting for you</p>
                                    <p className="text-4xl sm:text-5xl pb-2 pt-9">$2.07</p>
                                    <p className="font-semibold">Accept the money</p>
                                </div>
                                {/* <div className="bg-blue-500 h-20 w-32" /> */}
                                <Image
                                    src="/illustrations/money.png"
                                    alt="paypal"
                                    placeholder="blur"
                                    blurDataURL="/illustrations/money.png"
                                    priority={true}
                                    width={204}
                                    height={96}
                                    className="w-32 h-20 sm:w-40 sm:h-28  object-cover"
                                />
                            </CardContent>
                            <CardFooter className="flex-col sm:flex-row items-start gap-4 pt-5 pb-4">
                                <FaCreditCard className="w-6 h-6" />
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
                <div className="w-full lg:w-1/2 xl:w-2/5 p-10 lg:pt-12">
                    <div className="w-full sm:w-5/6 xl:w-[411px] mx-auto lg:mx-0">
                        <div className="hidden lg:flex flex-col sm:flex-row gap-4">
                            <Button className="font-semibold sm:w-1/2 py-6 sm:text-lg">Send</Button>
                            <Button className="font-semibold sm:w-1/2 py-6 sm:text-lg">Request</Button>
                        </div>
                        <Actions />
                        <AdditionalInfo title="Send again">
                            <div className="flex items-center gap-6">
                                <div className="space-y-3 w-16">
                                    <Avatar className="w-16 h-16">
                                        <AvatarImage src="/images/home/profile.png" />
                                        <AvatarFallback className="bg-brand text-white">
                                            S
                                        </AvatarFallback>
                                    </Avatar>
                                    <p className="bg-red text-center text-sm font-medium">Stickyrella</p>
                                </div>
                                <div className="space-y-3 w-16">
                                    <div className="w-full h-16 bg-brand rounded-full flex justify-center items-center hover:bg-brand/90">
                                        <Search className="text-white" size={26} />
                                    </div>
                                    <p className="text-center text-sm font-medium">Search</p>
                                </div>
                            </div>
                        </AdditionalInfo>

                        <AdditionalInfo title="Banks and cards">
                            <div className="flex gap-6">
                                <div className="w-20 bg-primary rounded-md">
                                    <Image
                                        src="/images/logos/visa.png"
                                        alt="visa"
                                        placeholder="blur"
                                        blurDataURL="/images/logos/visa.png"
                                        priority={true}
                                        width={45}
                                        height={30}
                                        className="object-contain mx-auto"
                                    />
                                </div>
                                <div className="">
                                    <p className="text-base sm:text-xl">Visa</p>
                                    <p className="text-base">Debit **0687</p>
                                </div>
                            </div>
                        </AdditionalInfo>

                        <AdditionalInfo title="Your favorite charities">
                            <div className="space-y-3">
                                <div className="flex gap-4">
                                    <Avatar className="w-20 h-20">
                                        <AvatarImage src="/images/home/doctors-without-borders.jpg" />
                                        <AvatarFallback className="bg-brand text-white">
                                            D
                                        </AvatarFallback>
                                    </Avatar>
                                    <p className="text-base sm:text-xl">Doctors Without Borders</p>
                                </div>
                                <Button variant="link" className="text-brand-foreground font-semibold p-0 text-base sm:text-lg">Donate Now</Button>
                            </div>
                        </AdditionalInfo>
                    </div>
                </div>
            </div>
        </main>

    );
}



