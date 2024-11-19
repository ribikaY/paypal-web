import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Home() {
    return (
        <main>
            <div className="flex justify-content">
                <div className="w-3/5 bg-[#faf8f4] flex flex-col items-end pr-10 py-10">
                    <Card className="w-3/4 py-2">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-lg">PayPal Rewards</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-1.5">
                            <h1 className="text-5xl">0 points</h1>
                            <p className="text-gray-600">$0.00 cash back</p>
                            <p className="text-sm">Available balance</p>
                        </CardContent>
                        <CardFooter className="text-blue-600 font-semibold text-lg">
                            Ways to earn
                        </CardFooter>
                    </Card>
                    <Card className="w-3/4 h-72 my-10 flex justify-between overflow-hidden">
                        <div className="mt-7">
                            <CardHeader>
                                <CardTitle className="text-5xl font-medium text-blue-600">$2.98 SGD</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg mt-2">You received a request.</p>
                            </CardContent>
                            <CardFooter className="flex items-center gap-2 mt-10">
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>S</AvatarFallback>
                                </Avatar>
                                <p className="text-gray-600">From <span className="text-black">Stickyrella</span></p>
                                <Button className="bg-[#152c8d] rounded-full font-semibold text-cyan-50 px-5">
                                    Pay Now
                                </Button>
                            </CardFooter>
                        </div>
                        <div className="w-1/2 h-full bg-gray-200" />
                    </Card>
                    <div className="space-y-5 w-3/4">
                        <Card className="w-full py-4">
                            <CardContent className="flex items-center gap-4 py-0">
                                <div className="text-blue-600">2/5</div>
                                <div className="space-y-2">
                                    <h3 className="text-lg leading-3">Set up your account</h3>
                                    <p className="text-sm">Make it easier to use PayPal</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full py-6 border-blue-600 bg-blue-600 text-white">
                            <CardContent className="flex justify-between items-center gap-4 py-0">
                                <div className="space-y-2 mt-5">
                                    <p className="text-lg leading-3">Money is waiting for you</p>
                                    <p className="text-5xl pb-2 pt-9">$2.07</p>
                                    <p className="font-semibold">Accept the money</p>
                                </div>
                                <div className="bg-blue-500 h-20 w-32"/>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="w-2/5 pl-10">
                    right
                </div>
            </div>
        </main>
    );
}
