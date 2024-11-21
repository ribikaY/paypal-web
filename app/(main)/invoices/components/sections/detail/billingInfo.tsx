import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import ItemsAction from "../../itemsAction";
import RecepientAction from "../../recepientAction";

const BillingInfo = () => {

    return (
        <Card className="w-full max-w-3xl mx-auto bg-white px-6 py-4 shadow-lg">
            <CardContent className="space-y-7">
                <RecepientAction />
                <ItemsAction />
            </CardContent>

            <CardContent>
                <div className="flex items-center space-x-2 my-4">
                    <Switch id="ship-items" />
                    <Label htmlFor="ship-items">Ship items</Label>
                </div>
            </CardContent>

            <CardFooter>
                <div className="flex justify-between w-full">
                    <div className="space-y-2">
                        <p className="text-sm font-medium">Subtotal</p>
                        <Button
                            variant="link"
                            className="text-brand-foreground text-sm font-medium p-0"
                        >
                            Add other charges
                        </Button>
                    </div>
                    <p className="text-lg font-medium">$30.00</p>
                </div>
            </CardFooter>
        </Card>
    );
};

export default BillingInfo;
