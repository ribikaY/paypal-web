"use client";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type {
	DataTableFilterableColumn,
	DataTableSearchableColumn,
} from "@/types";
import {
	type ColumnDef,
	type ColumnFiltersState,
	type PaginationState,
	type SortingState,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
	getPaginationRowModel
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { DataTableFloatingBar } from "./data-table-floating-bar";
import { DataTablePagination } from "./data-table-pagination";

interface DataTableProps<TData, TValue> {
	classname?: string;
	searchableColumn?: string;
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	floatingBarContent?: React.ReactNode | null;
	setPagination?: React.Dispatch<React.SetStateAction<PaginationState>>;
	setColumnFilters?: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;

	pagination?: PaginationState;
	columnFilters?: ColumnFiltersState;
	isPending?: boolean;

	/**
	 * The searchable columns of the table.
	 * @default []
	 * @type {id: keyof TData, title: string}[]
	 * @example searchableColumns={[{ id: "title", title: "titles" }]}
	 */
	searchableColumns?: DataTableSearchableColumn<TData>[];
	pageCount?: number;
	rowCount?: number;
	/**
	 * The filterable columns of the table. When provided, renders dynamic faceted filters, and the advancedFilter prop is ignored.
	 * @default []
	 * @type {id: keyof TData, title: string, options: { label: string, value: string, icon?: React.ComponentType<{ className?: string }> }[]}[]
	 * @example filterableColumns={[{ id: "status", title: "Status", options: ["todo", "in-progress", "done", "canceled"]}]}
	 */
	filterableColumns?: DataTableFilterableColumn<TData>[];
	/**
	 * The link to create a new row, will be rendered as a button.
	 * @default undefined
	 * @type string
	 * @example newRowLink="/tasks/new"
	 */
	newRowLink?: string;
	filterCount?: (count: string[]) => void;

	/**
	 * The action to delete rows, will be rendered as a button.
	 * @default undefined
	 * @type React.MouseEventHandler<HTMLButtonElement> | undefined
	 * @example deleteRowsAction={(event) => deleteSelectedRows(dataTable, event)}
	 */
	deleteRowsAction?: React.MouseEventHandler<HTMLButtonElement>;
}



export function DataTable<TData, TValue>({
	data,
	columns,
	rowCount,
	pageCount,
	filterCount,
	columnFilters,
	// setPagination,
	setColumnFilters,
	floatingBarContent,
	// pagination = { pageIndex: 1, pageSize: 20 },
	isPending,
}: DataTableProps<TData, TValue>) {
	const [rowSelection, setRowSelection] = useState({});
	const [sorting, setSorting] = useState<SortingState>([]);
	// const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	useEffect(() => {
		if (rowSelection && filterCount)
			filterCount(Object.keys(rowSelection) as string[]);
	}, [rowSelection, filterCount]);

	useEffect(() => {
		if (data) setRowSelection({});
	}, [data]);

	const table = useReactTable({
		data,
		columns,
		rowCount: rowCount,
		autoResetAll: false,
		pageCount: pageCount,
		manualFiltering: true,
		manualPagination: false,
		autoResetExpanded: false,
		autoResetPageIndex: false,
		onSortingChange: setSorting,
		// onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		onRowSelectionChange: setRowSelection,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		// getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),

		initialState: {},
		state: {
			sorting,
			columnFilters,
			// rowSelection,
			// pagination,
		},
	});

	return (
		<div className="w-full space-y-2.5 overflow-auto">
			<div className="rounded-md border border-gray-100 bg-white">
				<Table>
					<TableHeader className="bg-brand-neutral">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead className="font-semibold text-primary md:text-base whitespace-nowrap" key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{isPending ? (
							[...Array(10)].map((_, index) => (
								<TableRow
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
								>
									{[...Array(columns.length)].map((_, index) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<TableCell key={index} className="text-sm">
											<Skeleton
												className={`h-3 w-20 rounded-md bg-slate-100 ${index === columns.length - 1 && "w-4 h-2"}`}
											/>
										</TableCell>
									))}
								</TableRow>
							))
						) : table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id} className="text-sm md:text-base h-16 md:h-20">
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="space-y-2.5 pb-10">
				<DataTablePagination table={table} />
				{floatingBarContent ? (
					<DataTableFloatingBar table={table}>
						{floatingBarContent}
					</DataTableFloatingBar>
				) : null}
			</div>
		</div>
	);
}
