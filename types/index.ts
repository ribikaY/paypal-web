export interface SearchParams {
	[key: string]: string | string[] | undefined;
}

export type Option = {
	label: string;
	value: string;
	icon?: React.ComponentType<{ className?: string }>;
};

export interface DataTableFilterOption<TData> {
	id?: string;
	label: string;
	value: keyof TData | string;
	items: Option[];
	isMulti?: boolean;
}

export interface DataTableSearchableColumn<TData> {
	id: keyof TData;
	placeholder?: string;
}

export interface DataTableFilterableColumn<TData> {
	id: keyof TData;
	title: string;
	options: Option[];
}

// Nav type
export interface Nav {
	name: string;
	href: string;
}

//type for recent activities on home page
export interface Activity {
	name: string;
	price: string;
	date: string;
	message: string;
	additionalRemark?: string;
	status: string;
	profileImg?: string;
}

//type for deals card on home page
export interface Deal {
	logoImg: string;
	name: string;
	amount: number;
	type: string;
}

//enum values for invoiceStatus
export enum InvoiceStatus {
	DUE = "Due",
	DRAFT = "Draft",
	PAID = "Paid",
}

//type for invoice data
export interface Invoice {
	name: string;
	invoiceNo: string;
	createdAt: Date;
	dueDate: Date;
	status: InvoiceStatus;
	viewed: boolean;
	amount: number;
}
