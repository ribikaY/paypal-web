import type { CryptoDataType } from "@/app/(main)/finances/crypto/page";
import { InvoiceStatus, type Activity, type Deal, type Invoice, type Nav } from "@/types";

export const mainNav: Nav[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Finances",
		href: "/finances/crypto",
	},
	{
		name: "Send and Request",
		href: "/send-and-request",
	},
	{
		name: "Rewards",
		href: "/rewards",
	},
	{
		name: "Wallet",
		href: "/wallet",
	},
	{
		name: "Activity",
		href: "/invoices",
	},
	{
		name: "Help",
		href: "/help",
	},
];

export const financeNav: Nav[] = [
	{
		name: "Crypto",
		href: "/finances/crypto",
	},
	{
		name: "Savings",
		href: "/finances/savings",
	},
];

export const activities: Activity[] = [
	{
		name: "PayPal Giving Fund",
		price: "-$1.00",
		date: "Aug 15",
		message: "Donation",
		additionalRemark:
			"What a worthy cause, I pledge to donate back again after my pay ...",
		status: "inProgress",
		profileImg: "https://github.com/shadcn.png",
	},
	{
		name: "Jane Apothecary",
		price: "+$21.00",
		date: "Aug 15",
		message: "Canceled - Invoice Sent",
		status: "done-canceled",
	},
	{
		name: "Stickyrella",
		price: "+$2.07",
		date: "Aug 15",
		message: "Money Received",
		additionalRemark: "Coffee!",
		status: "done",
		profileImg: "https://github.com/shadcn.png",
	},
	{
		name: "Stickyrella",
		price: "-$2.98 SGD",
		date: "Today, Aug 15",
		message: "Request Received",
		status: "pending",
		profileImg: "https://github.com/shadcn.png",
	},
	{
		name: "Stickyrella",
		price: "-$4.82 SGD",
		date: "Aug 15",
		message: "Money Sent",
		additionalRemark: "A gift for you",
		status: "inProgress",
		profileImg: "https://github.com/shadcn.png",
	},
];

export const popularDeals: Deal[] = [
	{
		logoImg: "adorama",
		name: "Adorama",
		amount: 3,
		type: "Online only",
	},
	{
		logoImg: "39DollarGlasses",
		name: "39DollarGlasses",
		amount: 5,
		type: "Online only",
	},
	{
		logoImg: "mlsStore",
		name: "MLS Store",
		amount: 1.5,
		type: "Online only",
	},
	{
		logoImg: "cupshe",
		name: "Cupshe",
		amount: 2.5,
		type: "Online only",
	},
	{
		logoImg: "walgreens",
		name: "Walgreens",
		amount: 5.4,
		type: "Online only",
	},
	{
		logoImg: "vichy",
		name: "Vichy",
		amount: 2,
		type: "Online only",
	},
	{
		logoImg: "proflowers",
		name: "ProFlowers",
		amount: 4,
		type: "Online only",
	},
];

export const cryptoChartData = [
	{ date: "2024-04-01", sellingPrice: 222, buyingPrice: 150 },
	{ date: "2024-04-02", sellingPrice: 97, buyingPrice: 180 },
	{ date: "2024-04-03", sellingPrice: 167, buyingPrice: 120 },
	{ date: "2024-04-04", sellingPrice: 242, buyingPrice: 260 },
	{ date: "2024-04-05", sellingPrice: 373, buyingPrice: 290 },
	{ date: "2024-04-06", sellingPrice: 301, buyingPrice: 340 },
	{ date: "2024-04-07", sellingPrice: 245, buyingPrice: 180 },
	{ date: "2024-04-08", sellingPrice: 409, buyingPrice: 320 },
	{ date: "2024-04-09", sellingPrice: 59, buyingPrice: 110 },
	{ date: "2024-04-10", sellingPrice: 261, buyingPrice: 190 },
	{ date: "2024-04-11", sellingPrice: 327, buyingPrice: 350 },
	{ date: "2024-04-12", sellingPrice: 292, buyingPrice: 210 },
	{ date: "2024-04-13", sellingPrice: 342, buyingPrice: 380 },
	{ date: "2024-04-14", sellingPrice: 137, buyingPrice: 220 },
	{ date: "2024-04-15", sellingPrice: 120, buyingPrice: 170 },
	{ date: "2024-04-16", sellingPrice: 138, buyingPrice: 190 },
	{ date: "2024-04-17", sellingPrice: 446, buyingPrice: 360 },
	{ date: "2024-04-18", sellingPrice: 364, buyingPrice: 410 },
	{ date: "2024-04-19", sellingPrice: 243, buyingPrice: 180 },
	{ date: "2024-04-20", sellingPrice: 89, buyingPrice: 150 },
	{ date: "2024-04-21", sellingPrice: 137, buyingPrice: 200 },
	{ date: "2024-04-22", sellingPrice: 224, buyingPrice: 170 },
	{ date: "2024-04-23", sellingPrice: 138, buyingPrice: 230 },
	{ date: "2024-04-24", sellingPrice: 387, buyingPrice: 290 },
	{ date: "2024-04-25", sellingPrice: 215, buyingPrice: 250 },
	{ date: "2024-04-26", sellingPrice: 75, buyingPrice: 130 },
	{ date: "2024-04-27", sellingPrice: 383, buyingPrice: 420 },
	{ date: "2024-04-28", sellingPrice: 122, buyingPrice: 180 },
	{ date: "2024-04-29", sellingPrice: 315, buyingPrice: 240 },
	{ date: "2024-04-30", sellingPrice: 454, buyingPrice: 380 },
	{ date: "2024-05-01", sellingPrice: 165, buyingPrice: 220 },
	{ date: "2024-05-02", sellingPrice: 293, buyingPrice: 310 },
	{ date: "2024-05-03", sellingPrice: 247, buyingPrice: 190 },
	{ date: "2024-05-04", sellingPrice: 385, buyingPrice: 420 },
	{ date: "2024-05-05", sellingPrice: 481, buyingPrice: 390 },
	{ date: "2024-05-06", sellingPrice: 498, buyingPrice: 520 },
	{ date: "2024-05-07", sellingPrice: 388, buyingPrice: 300 },
	{ date: "2024-05-08", sellingPrice: 149, buyingPrice: 210 },
	{ date: "2024-05-09", sellingPrice: 227, buyingPrice: 180 },
	{ date: "2024-05-10", sellingPrice: 293, buyingPrice: 330 },
	{ date: "2024-05-11", sellingPrice: 335, buyingPrice: 270 },
	{ date: "2024-05-12", sellingPrice: 197, buyingPrice: 240 },
	{ date: "2024-05-13", sellingPrice: 197, buyingPrice: 160 },
	{ date: "2024-05-14", sellingPrice: 448, buyingPrice: 490 },
	{ date: "2024-05-15", sellingPrice: 473, buyingPrice: 380 },
	{ date: "2024-05-16", sellingPrice: 338, buyingPrice: 400 },
	{ date: "2024-05-17", sellingPrice: 499, buyingPrice: 420 },
	{ date: "2024-05-18", sellingPrice: 315, buyingPrice: 350 },
	{ date: "2024-05-19", sellingPrice: 235, buyingPrice: 180 },
	{ date: "2024-05-20", sellingPrice: 177, buyingPrice: 230 },
	{ date: "2024-05-21", sellingPrice: 82, buyingPrice: 140 },
	{ date: "2024-05-22", sellingPrice: 81, buyingPrice: 120 },
	{ date: "2024-05-23", sellingPrice: 252, buyingPrice: 290 },
	{ date: "2024-05-24", sellingPrice: 294, buyingPrice: 220 },
	{ date: "2024-05-25", sellingPrice: 201, buyingPrice: 250 },
	{ date: "2024-05-26", sellingPrice: 213, buyingPrice: 170 },
	{ date: "2024-05-27", sellingPrice: 420, buyingPrice: 460 },
	{ date: "2024-05-28", sellingPrice: 233, buyingPrice: 190 },
	{ date: "2024-05-29", sellingPrice: 78, buyingPrice: 130 },
	{ date: "2024-05-30", sellingPrice: 340, buyingPrice: 280 },
	{ date: "2024-05-31", sellingPrice: 178, buyingPrice: 230 },
	{ date: "2024-06-01", sellingPrice: 178, buyingPrice: 200 },
	{ date: "2024-06-02", sellingPrice: 470, buyingPrice: 410 },
	{ date: "2024-06-03", sellingPrice: 103, buyingPrice: 160 },
	{ date: "2024-06-04", sellingPrice: 439, buyingPrice: 380 },
	{ date: "2024-06-05", sellingPrice: 88, buyingPrice: 140 },
	{ date: "2024-06-06", sellingPrice: 294, buyingPrice: 250 },
	{ date: "2024-06-07", sellingPrice: 323, buyingPrice: 370 },
	{ date: "2024-06-08", sellingPrice: 385, buyingPrice: 320 },
	{ date: "2024-06-09", sellingPrice: 438, buyingPrice: 480 },
	{ date: "2024-06-10", sellingPrice: 155, buyingPrice: 200 },
	{ date: "2024-06-11", sellingPrice: 92, buyingPrice: 150 },
	{ date: "2024-06-12", sellingPrice: 492, buyingPrice: 420 },
	{ date: "2024-06-13", sellingPrice: 81, buyingPrice: 130 },
	{ date: "2024-06-14", sellingPrice: 426, buyingPrice: 380 },
	{ date: "2024-06-15", sellingPrice: 307, buyingPrice: 350 },
	{ date: "2024-06-16", sellingPrice: 371, buyingPrice: 310 },
	{ date: "2024-06-17", sellingPrice: 475, buyingPrice: 520 },
	{ date: "2024-06-18", sellingPrice: 107, buyingPrice: 170 },
	{ date: "2024-06-19", sellingPrice: 341, buyingPrice: 290 },
	{ date: "2024-06-20", sellingPrice: 408, buyingPrice: 450 },
	{ date: "2024-06-21", sellingPrice: 169, buyingPrice: 210 },
	{ date: "2024-06-22", sellingPrice: 317, buyingPrice: 270 },
	{ date: "2024-06-23", sellingPrice: 480, buyingPrice: 530 },
	{ date: "2024-06-24", sellingPrice: 132, buyingPrice: 180 },
	{ date: "2024-06-25", sellingPrice: 141, buyingPrice: 190 },
	{ date: "2024-06-26", sellingPrice: 434, buyingPrice: 380 },
	{ date: "2024-06-27", sellingPrice: 448, buyingPrice: 490 },
	{ date: "2024-06-28", sellingPrice: 149, buyingPrice: 200 },
	{ date: "2024-06-29", sellingPrice: 103, buyingPrice: 160 },
	{ date: "2024-06-30", sellingPrice: 446, buyingPrice: 400 },
];

export const cryptos: CryptoDataType[] = [
	{
		name: "PayPal USD",
		icon: "paypal-usd",
		price: 0.98,
		fluctuation: {
			status: "decrease",
			amount: 0.02,
			percentage: 2.04,
		},
		date: "Past 24 hours",
	},
	{
		name: "Bitcoin",
		icon: "bitcoin",
		price: 58892.69,
		fluctuation: {
			status: "increase",
			amount: 1995.41,
			percentage: 3.27,
		},
		date: "Past 24 hours",
	},
	{
		name: "Ethereum",
		icon: "ethereum",
		price: 1846.13,
		fluctuation: {
			status: "increase",
			amount: 35.5,
			percentage: 1.96,
		},
		date: "Past 24 hours",
	},
	{
		name: "Litecoin",
		icon: "litecoin",
		price: 91.47,
		fluctuation: {
			status: "decrease",
			amount: 3.26,
			percentage: 3.43,
		},
		date: "Past 24 hours",
	},
	{
		name: "Bitcoin Cash",
		icon: "bitcoin-cash",
		price: 223.56,
		fluctuation: {
			status: "increase",
			amount: 6.14,
			percentage: 2.81,
		},
		date: "Past 24 hours",
	},
];

export const invoices: Invoice[] =  [
	{
		name: "Abebe Kebede",
		invoiceNo: "INV001",
		createdAt: new Date("2024-11-01"),
		dueDate: new Date("2024-12-01"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 1500,
	  },
	  {
		name: "Hana Alemayehu",
		invoiceNo: "INV002",
		createdAt: new Date("2024-10-20"),
		dueDate: new Date("2024-11-20"),
		status: InvoiceStatus.DUE,
		viewed: false,
		amount: 2000,
	  },
	  {
		name: "Tsegaye Mekonnen",
		invoiceNo: "INV003",
		createdAt: new Date("2024-11-15"),
		dueDate: new Date("2024-12-15"),
		status: InvoiceStatus.DRAFT,
		viewed: true,
		amount: 750,
	  },
	  {
		name: "Alem Teshome",
		invoiceNo: "INV004",
		createdAt: new Date("2024-09-01"),
		dueDate: new Date("2024-10-01"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 3200,
	  },
	  {
		name: "Kidist Asfaw",
		invoiceNo: "INV005",
		createdAt: new Date("2024-10-10"),
		dueDate: new Date("2024-11-10"),
		status: InvoiceStatus.DUE,
		viewed: false,
		amount: 1800,
	  },
	  {
		name: "Mekdes Tesfaye",
		invoiceNo: "INV006",
		createdAt: new Date("2024-11-05"),
		dueDate: new Date("2024-12-05"),
		status: InvoiceStatus.DRAFT,
		viewed: false,
		amount: 1350,
	  },
	  {
		name: "Biruk Demeke",
		invoiceNo: "INV007",
		createdAt: new Date("2024-09-15"),
		dueDate: new Date("2024-10-15"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 2500,
	  },
	  {
		name: "Yordanos Abate",
		invoiceNo: "INV008",
		createdAt: new Date("2024-10-25"),
		dueDate: new Date("2024-11-25"),
		status: InvoiceStatus.DUE,
		viewed: false,
		amount: 1650,
	  },
	  {
		name: "Tesfaye Hailu",
		invoiceNo: "INV009",
		createdAt: new Date("2024-08-30"),
		dueDate: new Date("2024-09-30"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 4100,
	  },
	  {
		name: "Sara Yohannes",
		invoiceNo: "INV010",
		createdAt: new Date("2024-11-20"),
		dueDate: new Date("2024-12-20"),
		status: InvoiceStatus.DRAFT,
		viewed: false,
		amount: 2900,
	  },
	  {
		name: "Getachew Fikre",
		invoiceNo: "INV011",
		createdAt: new Date("2024-10-05"),
		dueDate: new Date("2024-11-05"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 2750,
	  },
	  {
		name: "Almaz Worku",
		invoiceNo: "INV012",
		createdAt: new Date("2024-11-10"),
		dueDate: new Date("2024-12-10"),
		status: InvoiceStatus.DUE,
		viewed: false,
		amount: 3400,
	  },
	  {
		name: "Dereje Haile",
		invoiceNo: "INV013",
		createdAt: new Date("2024-09-20"),
		dueDate: new Date("2024-10-20"),
		status: InvoiceStatus.DRAFT,
		viewed: true,
		amount: 1800,
	  },
	  {
		name: "Birtukan Negash",
		invoiceNo: "INV014",
		createdAt: new Date("2024-11-01"),
		dueDate: new Date("2024-12-01"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 2250,
	  },
	  {
		name: "Solomon Abera",
		invoiceNo: "INV015",
		createdAt: new Date("2024-10-15"),
		dueDate: new Date("2024-11-15"),
		status: InvoiceStatus.DUE,
		viewed: false,
		amount: 3100,
	  },
	  {
		name: "Rahel Tesfaye",
		invoiceNo: "INV016",
		createdAt: new Date("2024-08-28"),
		dueDate: new Date("2024-09-28"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 1450,
	  },
	  {
		name: "Kassahun Desta",
		invoiceNo: "INV017",
		createdAt: new Date("2024-09-18"),
		dueDate: new Date("2024-10-18"),
		status: InvoiceStatus.DRAFT,
		viewed: false,
		amount: 2150,
	  },
	  {
		name: "Meseret Gebremariam",
		invoiceNo: "INV018",
		createdAt: new Date("2024-11-12"),
		dueDate: new Date("2024-12-12"),
		status: InvoiceStatus.DUE,
		viewed: false,
		amount: 2700,
	  },
	  {
		name: "Eyob Wolde",
		invoiceNo: "INV019",
		createdAt: new Date("2024-10-08"),
		dueDate: new Date("2024-11-08"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 3850,
	  },
	  {
		name: "Tigist Asnake",
		invoiceNo: "INV020",
		createdAt: new Date("2024-09-25"),
		dueDate: new Date("2024-10-25"),
		status: InvoiceStatus.DRAFT,
		viewed: false,
		amount: 3200,
	  },
	  {
		name: "Dereje Alemu",
		invoiceNo: "INV021",
		createdAt: new Date("2024-10-18"),
		dueDate: new Date("2024-11-18"),
		status: InvoiceStatus.DUE,
		viewed: false,
		amount: 2400,
	  },
	  {
		name: "Mulu Tesfaye",
		invoiceNo: "INV022",
		createdAt: new Date("2024-09-30"),
		dueDate: new Date("2024-10-30"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 3200,
	  },
	  {
		name: "Fikadu Zewde",
		invoiceNo: "INV023",
		createdAt: new Date("2024-11-05"),
		dueDate: new Date("2024-12-05"),
		status: InvoiceStatus.DRAFT,
		viewed: false,
		amount: 1100,
	  },
	  {
		name: "Martha Bekele",
		invoiceNo: "INV024",
		createdAt: new Date("2024-08-20"),
		dueDate: new Date("2024-09-20"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 4500,
	  },
	  {
		name: "Yohannes Abebe",
		invoiceNo: "INV025",
		createdAt: new Date("2024-11-12"),
		dueDate: new Date("2024-12-12"),
		status: InvoiceStatus.DUE,
		viewed: false,
		amount: 2100,
	  },
	  {
		name: "Tadesse Hailu",
		invoiceNo: "INV026",
		createdAt: new Date("2024-09-10"),
		dueDate: new Date("2024-10-10"),
		status: InvoiceStatus.DRAFT,
		viewed: true,
		amount: 3000,
	  },
	  {
		name: "Aster Mengistu",
		invoiceNo: "INV027",
		createdAt: new Date("2024-10-22"),
		dueDate: new Date("2024-11-22"),
		status: InvoiceStatus.DUE,
		viewed: false,
		amount: 1800,
	  },
	  {
		name: "Wondwossen Getachew",
		invoiceNo: "INV028",
		createdAt: new Date("2024-08-25"),
		dueDate: new Date("2024-09-25"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 3700,
	  },
	  {
		name: "Selamawit Tesfaye",
		invoiceNo: "INV029",
		createdAt: new Date("2024-11-01"),
		dueDate: new Date("2024-12-01"),
		status: InvoiceStatus.DRAFT,
		viewed: false,
		amount: 2750,
	  },
	  {
		name: "Dawit Assefa",
		invoiceNo: "INV030",
		createdAt: new Date("2024-09-18"),
		dueDate: new Date("2024-10-18"),
		status: InvoiceStatus.PAID,
		viewed: true,
		amount: 4000,
	  },
  ];