"use client";
import { Button } from "@/components/ui/button";
import { CircleHelp, Pencil, Plus, X } from "lucide-react";
import Image from "next/image";
import BillingCard from "./billingCard";

const RecipientAction = () => {
    const handleEditRecipient = () => console.log("Edit recipient");
    const handleDeleteRecipient = () => console.log("Delete recipient");
    const handleAddRecipient = () => console.log("Add recipient");

    return (
        <BillingCard
            icon={<Image src="/icons/people.png" alt="Recipient" width={24} height={24} />}
            title="Who are you billing?"
        >
            <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between border border-gray-400/70 rounded-lg py-3 px-4">
                    <div>
                        <p className="text-sm font-medium">Abigail Smith; Jane Apothecary</p>
                        <p className="text-xs text-muted-foreground leading-8 sm:leading-normal">jdoe@content-mobbin.com</p>
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" onClick={handleEditRecipient}>
                            <Pencil size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleDeleteRecipient} className="hover:text-red-700">
                            <X size={16} />
                        </Button>
                    </div>
                </div>
                <Button variant="link" onClick={handleAddRecipient} className="gap-3 p-0 font-semibold text-brand-foreground hover:no-underline hover:text-brand">
                    <Plus /> Add more recipients <CircleHelp className="w-4 h-4 bg-brand rounded-full text-white" />
                </Button>
            </div>
        </BillingCard>
    );
};

export default RecipientAction;
