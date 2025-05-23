import { type TRPCClientErrorLike } from "@trpc/client";
import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { type AppRouter } from "~/server/api/root";

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

export const registrationDeadlineText = (
  registration_deadline_date: string,
) => {
  const currentDate = new Date();
  const registrationDate = new Date(registration_deadline_date);
  const timeDiff = registrationDate.getTime() - currentDate.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days

  if (daysDiff > 0) {
    return `Registration ends in ${daysDiff} days`;
  } else if (daysDiff === 0) {
    return "Registration ends today";
  } else {
    return "Registration has ended";
  }
};

export const activityStatusText = (
  registration_deadline_date: string,
  start_date: string,
  end_date: string,
) => {
  const currentDate = new Date();
  const registrationDate = new Date(registration_deadline_date);
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  if (currentDate < registrationDate) {
    return "Terbuka untuk pendaftaran";
  } else if (currentDate >= registrationDate && currentDate < startDate) {
    return "Pendaftaran ditutup";
  } else if (currentDate >= startDate && currentDate <= endDate) {
    return "Sedang berlangsung";
  } else {
    return "Telah berakhir";
  }
};

export const isBeforeOrSameDate = (date1: Date, date2: Date) => {
  // Compare only the date portion (year, month, day)
  return (
    (date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()) ||
    date1 < date2
  );
};

export const userActivityStatusText = (
  status: string,
  start_date: string,
  end_date: string,
) => {
  const currentDate = new Date();
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  if (status === "Diterima" && currentDate < startDate) {
    return "Diterima, menunggu kegiatan dimulai";
  }
  if (
    status === "Diterima" &&
    currentDate >= startDate &&
    currentDate <= endDate
  ) {
    return "Diterima, sedang berlangsung";
  }
  if (status === "Diterima" && currentDate > endDate) {
    return "Diterima, telah berakhir";
  }
  return status;
};
