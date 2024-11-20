import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import type { Deal } from "@/types";
import { Plus } from "lucide-react";

const DealsCard = ({ deal }: { deal: Deal }) => {
    return (
        <Card className="py-2">
            <CardHeader>
                <div className="w-5 h-5 rounded-md bg-gray-200" />
            </CardHeader>
            <CardContent className="space-y-5">
                <p className="text-gray-600">{deal.name}</p>
                <p className="font-semibold">{deal.amount}% cash back</p>
            </CardContent>
            <CardFooter className="text-gray-600 flex justify-between items-center mt-5">
                {deal.type}
                <Plus className="hover:text-brand-foreground cursor-pointer" />
            </CardFooter>
        </Card>
    )
}

export default DealsCard