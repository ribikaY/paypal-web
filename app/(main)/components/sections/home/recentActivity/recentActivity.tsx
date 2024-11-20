import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { activities } from "@/lib/data";
import ActivityCard from "./activityCard";

const RecentActivity = () => {
    return (
        <Card className="py-">
            <CardHeader className="pb-4">
                <CardTitle className="text-xl">Recent activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {
                    activities.map(activity => (
                        <ActivityCard activity={activity} key={activity.name} />
                    ))
                }
            </CardContent>
            <CardFooter className="mt-2">
                <Button variant="link" className="px-0 text-brand-foreground font-semibold text-lg h-0">
                    Show all
                </Button>
            </CardFooter>
        </Card>
    )
}

export default RecentActivity