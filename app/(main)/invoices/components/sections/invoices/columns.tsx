"use client";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { type Invoice, InvoiceStatus } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { EllipsisVertical, Eye, PencilIcon } from "lucide-react";
import Link from "next/link";
import { GoCheckCircleFill, GoClockFill } from "react-icons/go";

export const columns: ColumnDef<Invoice>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="text-white ml-4 w-5 h-5"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="text-white ml-4 w-5 h-5"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: "Customer",
        cell: ({ row }) => {
            const customer = row.original.name;
            return (
                <p className="whitespace-nowrap">
                    {customer}
                </p>
            );
        },
    },

    {
        accessorKey: "invoiceNo",
        header: "Invoice no.",
        cell: ({ row }) => {
            const invoiceNo = row.original.invoiceNo;
            return (
                <p className="whitespace-nowrap text-brand-foreground font-semibold tracking-wide">
                    {invoiceNo}
                </p>
            );
        },
    },

    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created" />
        ),
        cell: ({ row }) => {
            const createdAt = row.original.createdAt;
            return <p className="whitespace-nowrap">{format(createdAt, "MMM dd, yyyy")}</p>;
        },
    },

    {
        accessorKey: "dueDate",
        header: "Due",
        cell: ({ row }) => {
            const dueDate = row.original.dueDate;
            return <p className="whitespace-nowrap">{format(dueDate, "MMM dd, yyyy")}</p>;
        },
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status;
            return (
                <Badge
                    className={`text-sm bg-transparent ${status === InvoiceStatus.DRAFT && 'bg-gray-200/80 border-transparent'} border border-input/90 text-gray-800 shadow-none font-normal py-1 flex gap-2 capitalize justify-center tracking-wide hover:bg-inherit max-w-20`}
                >
                    {
                        status === InvoiceStatus.DUE ? (
                            <GoClockFill className="text-purple-500" />
                        ) :
                            status === InvoiceStatus.PAID && (
                                <GoCheckCircleFill className="text-green-500" />
                            )
                    }
                    {status}
                </Badge>
            );
        },
    },

    {
        accessorKey: "view",
        header: "Viewed",
        cell: ({ row }) => {
            const viewed = row.original.viewed;
            return (
                <p className={`${viewed ? 'text-green-700' : 'text-red-700'}`}>{viewed === true ? "yes" : "no"}</p>
            );
        },
    },

    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            const amount = row.original.amount;
            return <p className="whitespace-nowrap">$ {(amount)?.toLocaleString()} USD</p>;
        },
    },

    {
        id: "actions",
        cell: ({ row }) => {
            const invoice = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                            <span className="sr-only">Open menu</span>
                            <EllipsisVertical className="h-4 w-4 text-gray-600" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="min-w-[10rem]">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="cursor-pointer flex gap-2 focus:bg-gray-100/50 focus:text-primary"
                        >
                            <PencilIcon size={10} />
                            Edit
                        </DropdownMenuItem>
                        <Link
                            href={`/invoices/${invoice.invoiceNo}`}
                            className="w-full cursor-pointer flex items-center gap-2 py-1.5 px-2 text-sm hover:bg-gray-100/50 focus:bg-gray-100/50 focus:text-primary"
                        >
                            <Eye size={14} />
                            View
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
]