import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind + clsx ka combinator
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
