"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, ShoppingCart, X } from "lucide-react";
import BillingCard from "./billingCard";

const ItemsAction = () => {
    const handleEditItem = () => console.log("Edit item");
    const handleDeleteItem = () => console.log("Delete item");
    const handleAddItem = () => console.log("Add item");

    return (
        <BillingCard
            icon={<div className="text-purple-600"><ShoppingCart size={24} /></div>}
            title="What are they paying for?"
        >
            <div className="space-y-4">
                <div className="flex items-start justify-start gap-8 border border-gray-400/70 rounded-lg py-3 px-4">
                    <div className="border border-gray-300 rounded-sm py-2 pl-2 pr-6 space-y-1">
                        <p className="text-xs text-muted-foreground">Hours</p>
                        <p className="text-sm">3</p>
                    </div>
                    <div className="w-5/6 space-y-2">
                        <div className="flex justify-between">
                            <p className="text-sm font-medium">$10.00 Product Design - Figma</p>
                            <p className="text-sm font-semibold tracking-wide">$30.00</p>
                        </div>
                        <div className="flex justify-between">
                            <Badge variant="outline" className="text-gray-700 bg-gray-100 h-7">30% OFF</Badge>
                            <div className="flex space-x-2">
                                <Button variant="ghost" size="icon" onClick={handleEditItem}>
                                    <Pencil size={16} />
                                </Button>
                                <Button variant="ghost" size="icon" onClick={handleDeleteItem} className="hover:text-red-700">
                                    <X size={16} />
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex gap-3">
                            <div>
                                <p className="text-sm font-medium">$10.00 Product Design - Figma</p>
                                <p className="text-sm font-semibold">$30.00</p>
                            </div>
                        </div> */}
                    {/* <div>
                        <p className="text-sm text-muted-foreground">Hours: 3</p>
                        <p className="text-sm font-medium">$10.00 Product Design - Figma</p>
                    </div> */}
                    {/* <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="text-gray-700 bg-gray-200">30% OFF</Badge>
                        <p className="text-sm font-medium">$30.00</p>
                        <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" onClick={handleEditItem}>
                                <Pencil size={16} />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={handleDeleteItem} className="hover:text-red-700">
                                <X size={16} />
                            </Button>
                        </div>
                    </div> */}
                </div>
                <Button variant="link" onClick={handleAddItem} className="gap-3 p-0 font-semibold text-brand-foreground hover:no-underline hover:text-brand">
                    <Plus /> Add more items
                </Button>
            </div>
        </BillingCard>
    )
}

export default ItemsAction