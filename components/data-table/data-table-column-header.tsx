import type { Column } from "@tanstack/react-table";
import {
	ArrowDownIcon,
	ArrowDownUp,
	ArrowUpIcon,
	EyeOffIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface DataTableColumnHeaderProps<TData, TValue>
	extends React.HTMLAttributes<HTMLDivElement> {
	column: Column<TData, TValue>;
	title: string;
}

export function DataTableColumnHeader<TData, TValue>({
	column,
	title,
	className,
}: DataTableColumnHeaderProps<TData, TValue>) {
	if (!column.getCanSort()) {
		return <div className={cn(className)}>{title}</div>;
	}

	return (
		<div className={cn("flex items-center space-x-2", className)}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="font-semibold text-primary text-sm md:text-base -ml-3 h-8 hover:bg-transparent hover:text-muted-foreground data-[state=open]:bg-muted "
					>
						<span>{title}</span>
						<div className="border border-brand/45 text-brand ml-2 p-1.5 rounded-full">
							{column.getIsSorted() === "desc" ? (
								<ArrowDownIcon className="h-4 w-4" />
							) : column.getIsSorted() === "asc" ? (
								<ArrowUpIcon className="h-4 w-4" />
							) : (
								<ArrowDownUp className="h-4 w-4" />
							)}
						</div>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuItem onClick={() => column.toggleSorting(false)}>
						<ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
						Asc
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => column.toggleSorting(true)}>
						<ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
						Desc
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
						<EyeOffIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
						Hide
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
