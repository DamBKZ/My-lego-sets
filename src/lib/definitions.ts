export type LegoSet = {
	id: number;
	name: string;
	category: string;
	year: number;
	description: string;
	image: string;
	serialNumber: number;
	pieces: number;
};

export type Category = "Castle" | "Space" | "Aquazone";
