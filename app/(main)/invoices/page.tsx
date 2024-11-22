import { DataTable } from "@/components/data-table/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { invoices } from "@/lib/data";
import type { Invoice } from "@/types";
import { Search, Download, MoreVertical } from "lucide-react";
import { IoIosSettings } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { columns } from "./components/sections/invoices/columns";
import { PiSlidersHorizontalFill } from "react-icons/pi";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

async function getInvoiceData(): Promise<Invoice[]> {
    return invoices
}

const Invoices = async () => {
    const data = await getInvoiceData();

    return (
        <div className="bg-brand-neutral">
            <div className="px-4 sm:px-8 md:px-16 lg:px-14 xl:px-20 2xl:px-36 pb-10 pt-10 sm:pt-16">
                <div className="flex flex-wrap gap-6 justify-between pb-6 sm:pb-14">
                    <h1 className="text-3xl sm:text-4xl font-medium">Invoicing</h1>
                    <div className="hidden sm:flex gap-3">
                        <Button variant="outline" className="sm:border-2 bg-transparent font-semibold md:text-base md:px-8 py-5 sm:py-6">
                            <IoIosSettings />
                            Settings
                        </Button>
                        <Button className="sm:border-2 px-6 font-semibold md:text-base md:px-8 py-5 sm:py-6">
                            Create New
                            <IoChevronDown />
                        </Button>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild className="sm:hidden">
                            <Button variant="outline" size="icon" className="hover:bg-neutral-100 hover:text-brand"><MoreVertical /></Button>
                        </SheetTrigger>
                        <SheetContent side="bottom">
                            <SheetHeader>
                                <SheetTitle>Actions</SheetTitle>
                            </SheetHeader>
                            <div className="space-y-3 mt-8 border-b pb-6 mb-6">
                                <Button variant="outline" className="bg-transparent font-semibold w-full py-5">
                                    <IoIosSettings />
                                    Settings
                                </Button>
                                <Button className="px-6 font-semibold w-full py-5">
                                    Create New
                                    <IoChevronDown />
                                </Button>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex gap-3">
                                    <p className="text-lg font-semibold">Filters</p>
                                    <Badge className="text-brand bg-brand-foreground/20 rounded-full text-xs ">1</Badge>
                                </div>
                                <Button variant="outline" size="icon" className="text-base border-2 font-semibold rounded-full duration-300 w-9 h-9">
                                    <Download size={40} />
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <div>
                    <Tabs defaultValue="Invoices" className="overflow-scroll">
                        <TabsList className="h-11 rounded-full bg-transparent">
                            {
                                ["Invoices", "Estimates", "Recurring series"].map((value) => (
                                    <TabsTrigger key={value} value={value} className="data-[state=active]:shadow-md data-[state=active]:text-brand data-[state=active]:bg-transparent font-semibold sm:text-lg h-full rounded-full capitalize sm:mx-3 sm:p-5">{value}</TabsTrigger>
                                ))
                            }
                        </TabsList>
                        <TabsContent value="Invoices" className="pt-5 sm:pt-10 pb-4">
                            <div className="flex items-center flex-wrap justify-between">
                                <div className="flex gap-4 w-full sm:w-auto md:w-3/5 xl:w-3/4">
                                    <Select
                                        defaultValue="all"
                                    >
                                        <SelectTrigger className="w-20 md:w-32 lg:w-48 bg-white h-14 md:h-16 text-base">
                                            <SelectValue placeholder="Search By" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel className="font-medium">
                                                    Search By
                                                </SelectLabel>
                                                <SelectItem value="all">All</SelectItem>
                                                <SelectItem value="name">Name</SelectItem>
                                                <SelectItem value="invoice">Invoice No.</SelectItem>
                                                <SelectItem value="status">Status</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>

                                    <div className="relative w-full sm:w-auto md:w-full">
                                        <Search
                                            size={20}
                                            className="absolute left-3 top-4 md:top-6 text-muted-foreground"
                                        />
                                        <Input
                                            autoFocus
                                            placeholder="Search"
                                            className="md:w-full h-14 md:h-16 pl-12 bg-white text-base placeholder:text-base"
                                        />
                                    </div>
                                </div>
                                <div className="hidden sm:flex gap-4">
                                    <Button variant="outline" className="text-base border-2 md:px-10 font-semibold py-0 rounded-full h-12 duration-300">
                                        <PiSlidersHorizontalFill />
                                        Filters
                                        <div className="p-0.5 px-1.5 text-xs rounded-full bg-brand-foreground text-white">1</div>
                                    </Button>
                                    <Button variant="outline" size="icon" className="text-base border-2 font-semibold rounded-full duration-300 w-12 h-12">
                                        <Download size={40} />
                                    </Button>
                                </div>
                            </div>

                            <div className="mt-7 relative pb-10">
                                <DataTable
                                    data={data || []}
                                    columns={columns}
                                    searchableColumn="name"
                                />
                            </div>

                        </TabsContent>
                        <TabsContent value="Estimates" className="pt-5 sm:pt-10 pb-4 min-h-[45vh] text-center font-semibold">
                            Estimated data will be displayed here.
                        </TabsContent>
                        <TabsContent value="Recurring series" className="pt-5 sm:pt-10 pb-4 min-h-[45vh] text-center font-semibold">
                            Recurring sales here.
                        </TabsContent>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default Invoices;