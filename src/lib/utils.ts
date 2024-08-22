import { glass } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAvatar(seed: string | undefined) {
  return createAvatar(glass, {
    seed: seed ?? "",
  }).toDataUri();
}

export function formatEpochTime(epochTime: number) {
  const date = new Date(epochTime * 1000);
  return format(date, "MMM d");
}
