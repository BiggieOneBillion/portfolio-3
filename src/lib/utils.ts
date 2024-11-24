import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sendEmail(recipient: string, subject: string, body: string) {
  // Construct the mailto link
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Create a temporary anchor element
  const link = document.createElement("a");
  link.href = mailtoLink;

  // Programmatically trigger a click on the anchor
  link.click();
}
