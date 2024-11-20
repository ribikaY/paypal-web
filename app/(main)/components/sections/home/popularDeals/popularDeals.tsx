import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { popularDeals } from "@/lib/data"
import DealsCard from "./dealsCard"

const PopularDeals = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Popular Cash Back deals</h2>
        <Button variant="link" className="px-0 text-brand-foreground font-semibold text-lg h-0">
          More
        </Button>
      </div>
      <Carousel className="w-full mt-8">
        <CarouselContent className="pl-2">
          {popularDeals.map(deal => (
            <CarouselItem key={deal.name} className="basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <DealsCard deal={deal} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  )
}

export default PopularDeals