import { type ClassValue, clsx } from "clsx";
import moment from "moment";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return moment(date).fromNow();
}
