import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Requests = () => {
  return (
    <>
      <Card className="w-full sm:w-4/5 lg:w-3/4 h-auto xl:h-80 my-10 flex flex-wrap lg:flex-nowrap justify-between overflow-hidden">
        <div className="mt-7">
          <CardHeader>
            <CardTitle className="text-4xl sm:text-5xl font-medium text-brand-foreground">$2.98 SGD</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mt-2">You received a request.</p>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center gap-2 mt-10 xl:mt-4 2xl:mt-16">
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
        <Image
          src="/illustrations/coin-toss.png"
          alt="paypal"
          placeholder="blur"
          blurDataURL="/illustrations/coin-toss.png"
          priority={true}
          width={328}
          height={208}
          className="w-full xl:w-80 h-72 lg:h-full object-cover"
        />
      </Card>
    </>
  )
}

export default Requests