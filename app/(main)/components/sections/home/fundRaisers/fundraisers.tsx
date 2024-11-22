import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { EllipsisVertical } from "lucide-react";
import { FaHandHoldingHeart } from "react-icons/fa";

const Fundraisers = () => {
    return (
        <Card className="w-full py-2">
        <CardHeader className="pb-4">
          <div className="flex justify-between flex-wrap">
            <CardTitle className="text-xl">Fundraisers</CardTitle>
            <EllipsisVertical className="text-gray-500" />
          </div>
        </CardHeader>
        <CardFooter className="flex justify-between flex-wrap gap-4">
          <div className="flex gap-4 flex-wrap">
            <FaHandHoldingHeart className="text-brand-foreground w-6 h-6"/>
            <p>A Doctor for a Life</p>
          </div>
          <div className="text-right">
            <p className="font-medium">$0.00</p>
            <p>Available</p>
          </div>
        </CardFooter>
      </Card>
      
    )
}

export default Fundraisers