import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getAvatarName = (name: string | null | undefined) => {
	if (!name) return;

	if (name.split(" ").length === 2) {
		return `${name?.split(" ")[0].slice(0, 1).toLocaleUpperCase()}${name
			?.split(" ")[1]
			.slice(0, 1)
			.toLocaleUpperCase()}`;
	}
	if (name.split(" ").length === 1) {
		return name?.slice(0, 2).toLocaleUpperCase();
	}
};
