import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAvatarName } from "@/lib/utils";
import type { Activity } from "@/types";
import { Clock } from "lucide-react";

const ActivityCard = ({ activity }: { activity: Activity }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:gap-4">
            <div className="flex gap-4">
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={activity.profileImg ? "https://github.com/shadcn.png" : ""} />
                  <AvatarFallback className={`${activity.status.includes("done") ? 'bg-green-600' : 'bg-brand'} text-white`}>
                    {getAvatarName(activity.name)}
                  </AvatarFallback>
                </Avatar>
                {activity.status === "pending" && (
                  <div className="w-6 h-6 bg-white rounded-full absolute -bottom-1 -right-1 flex justify-center items-center">
                    <Clock className="text-orange-500" size={16} />
                  </div>
                )}
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg">{activity.name}</CardTitle>
                <CardDescription className="text-gray-900">
                  {activity.date}
                  <span className="mx-1">.</span>
                  {activity.message}
                </CardDescription>
                {
                  activity.additionalRemark && (
                    <p className="text-sm text-gray-900">&quot;{activity.additionalRemark}&quot;</p>
                  )
                }
              </div>
            </div>
            <p
              className={`font-semibold leading-none text-lg mt-4 ml-14 md:m-0 ${activity.status.startsWith("done") && 'text-green-600'} ${activity.status.includes('canceled') && 'line-through'}`}
            >
              {activity.price}
            </p>
          </div>
        </CardHeader>
      </Card>
    </>
  )
}

export default ActivityCard