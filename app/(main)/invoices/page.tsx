import { DataTable } from "@/components/data-table/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { invoices } from "@/lib/data";
import type { Invoice } from "@/types";
import { Plus, Search } from "lucide-react";
import { IoIosSettings } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { columns } from "./components/sections/invoices/columns"

async function getInvoiceData(): Promise<Invoice[]> {
    return invoices
}

const Invoices = async () => {
    const data = await getInvoiceData();

    return (
        <div className="bg-brand-neutral">
            <div className="px-4 sm:px-8 md:px-16 lg:px-14 xl:px-20 2xl:px-36 pb-10 pt-16">
                <div className="flex justify-between pb-14">
                    <h1 className="text-4xl font-medium">Invoicing</h1>
                    <div className="flex gap-3">
                        <Button variant="outline" className="bg-transparent font-semibold md:text-base md:px-6 py-5">
                            <IoIosSettings />
                            Settings
                        </Button>
                        <Button className="px-6 font-semibold md:text-base md:px-6 py-5">
                            Create New
                            <IoChevronDown />
                        </Button>
                    </div>
                </div>
                <div>
                    <Tabs defaultValue="Invoices">
                        <TabsList className="h-11 rounded-full bg-transparent">
                            {
                                ["Invoices", "Estimates", "Recurring series"].map((value) => (
                                    <TabsTrigger key={value} value={value} className="data-[state=active]:shadow-md data-[state=active]:text-brand data-[state=active]:bg-transparent font-semibold text-lg h-full rounded-full capitalize px-10 py-5">{value}</TabsTrigger>
                                ))
                            }
                        </TabsList>
                        <TabsContent value="Invoices" className="pt-10 pb-4">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-4">
                                    <Select
                                        defaultValue="all"
                                    >
                                        <SelectTrigger className="w-48 bg-white h-16 text-base">
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

                                    <div className="relative lg:w-full">
                                        <Search
                                            size={20}
                                            className="absolute left-3 top-6 text-muted-foreground"
                                        />
                                        <Input
                                            autoFocus
                                            placeholder="Search"
                                            className="lg:w-full h-16 pl-12 bg-white text-base placeholder:text-base"
                                        />
                                    </div>
                                </div>
                                {/* <Link to="/user/agency/listings/add"> */}
                                <Button className="text-sm font-normal py-0 rounded-md bg-accent-muted text-accent hover:bg-accent hover:text-white h-10 duration-300">
                                    <Plus size={17} className="mr-2" />
                                    Add New Property
                                </Button>
                                {/* </Link> */}
                            </div>

                            <div className="mt-7 relative pb-10">
                                <DataTable
                                    data={data || []}
                                    columns={columns}
                                    searchableColumn="name"
                                />
                            </div>

                        </TabsContent>
                        <TabsContent value="Estimates" className="pt-10 pb-4 min-h-[45vh] text-center font-semibold">
                            Estimated data will be displayed here.
                        </TabsContent>
                        <TabsContent value="Recurring series" className="pt-10 pb-4 min-h-[45vh] text-center font-semibold">
                            Recurring sales here.
                        </TabsContent>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default Invoices;