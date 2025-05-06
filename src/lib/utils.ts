import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(":");
  return `${hours?.padStart(2, "0")}:${minutes?.padStart(2, "0")}:00`; // Add seconds if required
};
