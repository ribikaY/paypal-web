import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const PaypalRewards = () => {
    return (
        <Card className="w-full sm:w-4/5 lg:w-3/4 py-2">
            <CardHeader className="pb-4">
                <CardTitle className="text-xl">PayPal Rewards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5">
                <h1 className="text-4xl sm:text-5xl">0 points</h1>
                <p className="text-gray-600">$0.00 cash back</p>
                <p className="text-sm">Available balance</p>
            </CardContent>
            <CardFooter className="text-brand-foreground font-semibold text-lg">
                Ways to earn
            </CardFooter>
        </Card>
    )
}

export default PaypalRewards