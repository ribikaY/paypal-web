import { Button } from "@/components/ui/button"
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList } from "@/components/ui/tabs"
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs"
import { Clock, Heart } from "lucide-react";
import Image from "next/image";
import Header from "./components/header";

const Fundraisers = () => {
  const actions = ["Edit", "Show Fundraiser", "Share", "Donate"];
  return (
    <div>
      <Header />
      <div className="bg-brand-neutral">
        <div className="px-44 mx-auto py-10">
          <div className="flex justify-between">
            <h1 className="text-4xl font-medium">Your fundraisers</h1>
            <Button variant="outline" className="bg-transparent">Start a new fundraiser</Button>
          </div>
        </div>
        <div className="bg-white flex">
          <div className="w-2/5 pl-44 pr-10 py-8">
            <div className="max-w-full mx-auto">
              <Tabs defaultValue="open" className="w-full">
                <TabsList className="grid grid-cols-2 w-full h-11 rounded-full">

                  {
                    ["open", "closed"].map((value) => (
                      <TabsTrigger key={value} value={value} className="data-[state=active]:bg-white data-[state=active]:text-brand h-full rounded-full capitalize">{value}</TabsTrigger>
                    ))
                  }
                </TabsList>
                <TabsContent value="open" className="py-4">
                  <Card className="w-full h-64 flex justify-between overflow-hidden border-2 border-brand-foreground shadow-md shadow-brand-foreground/15">
                    <div className="w-3/5 space-y-20">
                      <CardHeader className="inline-block">
                        <CardTitle className="flex gap-2 items-center py-1 px-1.5 rounded-lg font-medium bg-orange-300 text-xs">
                          <Clock size={17} />
                          Ends on 9/7/24
                        </CardTitle>
                      </CardHeader>
                      <CardFooter className="mt- flex flex-col items-start gap-3 ">
                        <div className="flex items-center gap-2 text-primary text-sm">
                          <Heart size={20} />
                          <p>A Doctor for a Life</p>
                        </div>
                        <Separator className="block w-full h-1.5 bg-gray-100 rounded-full" />
                        <p className="text-xs text-muted-foreground"><span className="text-primary">$0.00</span> of $2,000</p>
                      </CardFooter>
                    </div>
                    <div className="w-2/5 h-full bg-gray-100" />
                  </Card>
                </TabsContent>
                <TabsContent value="closed" className="py-4">
                  <Card className="w-full h-64 flex justify-between overflow-hidden border-2 border-brand-foreground shadow-md shadow-brand-foreground/15">
                    <div className="w-3/5 pb-4">
                      <CardHeader className="inline-block">
                        <CardTitle className="flex gap-2 items-center py-1 px-1.5 rounded-lg font-medium bg-red-300 text-xs">
                          <Clock size={17} />
                          Closed on 9/7/24
                        </CardTitle>
                      </CardHeader>
                    </div>
                    <div className="w-2/5 h-full bg-gray-100" />
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <Separator orientation="vertical" className="w-2.5 min-h-[80vh] self-center bg-gray-100 drop-shadow-md mt-5" />
          <div className="w-3/5 py-8 pr-44 pl-10">
            <h1 className="text-4xl font-medium">A Doctor for a Life</h1>
            <div className="flex items-center gap-2 text-primary text-sm mt-3 mb-10">
              <Heart size={20} className="text-brand-foreground" />
              <p>Doctors Without Borders</p>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2 items-center py-1 px-1.5 rounded-lg font-medium bg-orange-300 text-xs">
                <Clock size={17} />
                Ends on 9/7/24
              </div>
              <div className="py-1 px-1.5 rounded-lg bg-purple-800 text-white text-xs">
                International
              </div>
            </div>
            <div className="mt- flex flex-col items-start gap-3 mt-12">
              <h1 className="text-4xl">$0.00</h1>
              <Separator className="block w-full h-2 bg-gray-100 rounded-full" />
              <p className="text-sm text-muted-foreground"><span className="text-primary">$0.00</span> raised of $2,000</p>
            </div>
            <div className="flex gap-16 px-6 mt-20">
              {
                actions.map(action => (

                  <div key={action} className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-brand-neutral rounded-full flex justify-center items-center">
                      <Heart size={18} className="text-brand" />
                    </div>
                    <p className="text-center text-sm font-medium">{action}</p>
                  </div>
                ))
              }
            </div>
            <div>
              <h2 className="text-2xl my-12">Updates</h2>
              <div className="flex justify-between items-center px-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/icons/megaphone.png"
                    alt="speaker"
                    width={80}
                    height={80}
                  />
                  <p>Keep donors up to date on how your fundraiser is going.</p>
                </div>
                <Button className="px-8">Post an update</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Fundraisers