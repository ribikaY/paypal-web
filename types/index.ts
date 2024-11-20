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
    additionalRemark?:string;
	status: string;
	profileImg?: string;
}

export interface Deal {
    logoImg:string;
	name:string;
	amount: number;
	type:string;
}
