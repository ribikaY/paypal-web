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
        <>
            <Card className="w-full sm:w-4/5 lg:w-3/4 2xl:h-72 my-10 flex flex-wrap lg:flex-nowrap justify-between overflow-hidden">
                <div className="mt-7">
                    <CardHeader>
                        <CardTitle className="text-4xl sm:text-5xl font-medium text-brand-foreground">$2.98 SGD</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg mt-2">You received a request.</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap items-center gap-2 mt-10">
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
                <div className="w-full lg:w-1/2 h-52 lg:h-full bg-gray-200" />
            </Card>

            {/* <Card className="w-full lg:w-3/4 h-auto lg:h-72 my-10 flex flex-wrap lg:flex-nowrap justify-between overflow-hidden">
  <div className="w-full lg:w-1/2 px-4 pt-7 pb-4 lg:py-0">
    <CardHeader>
      <CardTitle className="text-3xl sm:text-sm:4xl lg:text-5xl font-medium text-brand-foreground">
        $2.98 SGD
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-base sm:text-lg mt-2">You received a request.</p>
    </CardContent>
    <CardFooter className="flex flex-wrap items-center gap-2 mt-6 sm:mt-10">
      <Avatar className="w-6 h-6">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <p className="text-sm sm:text-base text-gray-600">
        From <span className="text-black font-medium">Stickyrella</span>
      </p>
      <Button className="bg-brand rounded-full font-semibold text-cyan-50 px-4 py-2 text-sm sm:px-5 sm:text-base">
        Pay Now
      </Button>
    </CardFooter>
  </div>

  <div className="w-full lg:w-1/2 h-40 lg:h-full bg-gray-200" />
</Card> */}

        </>
    )
}

export default Requests