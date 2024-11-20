import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Requests = () => {
    return (
        <Card className="w-3/4 h-72 my-10 flex justify-between overflow-hidden">
            <div className="mt-7">
                <CardHeader>
                    <CardTitle className="text-5xl font-medium text-brand-foreground">$2.98 SGD</CardTitle>
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
                    <Button className="bg-brand rounded-full font-semibold text-cyan-50 px-5">
                        Pay Now
                    </Button>
                </CardFooter>
            </div>
            <div className="w-1/2 h-full bg-gray-200" />
        </Card>
    )
}

export default Requests