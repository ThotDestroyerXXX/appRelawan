import { TRPCClientErrorLike } from "@trpc/client";
import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { AppRouter } from "~/server/api/root";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(":");
  return `${hours?.padStart(2, "0")}:${minutes?.padStart(2, "0")}:00`; // Add seconds if required
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};

export const formatTimeDisplay = (time: string): string => {
  const [hours, minutes] = time.split(":");
  return `${hours?.padStart(2, "0")}:${minutes?.padStart(2, "0")}`; // Add seconds if required
};

export function showErrorMessage(
  error: TRPCClientErrorLike<AppRouter> | z.ZodError,
) {
  if (error instanceof z.ZodError) {
    const errorMessages = error.errors.map((err) => err.message);
    errorMessages.forEach((msg) => toast.error(msg));
  } else {
    const errorMessages = error.data?.zodError?.fieldErrors
      ? Object.values(error.data.zodError.fieldErrors).flat()
      : [error.message];
    errorMessages.forEach((msg) => toast.error(msg));
  }
}
