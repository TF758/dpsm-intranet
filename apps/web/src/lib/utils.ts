import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getResourceUrl(fileId: string) {
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${fileId}`;
}

export function isPreviewable(type?: string) {
  return ["pdf"].includes(type ?? "");
}
