import { IMAGE_BASE_URL } from "@/components/constants/image";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const imageSize = {
  poster: "w500",
  backdrop: "original",
  profile: "w185",
} as const;

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// TODO: Add utility functions for image URLs
// Hint: TMDB returns relative paths, you need to construct full image URLs
// Reference: https://developer.themoviedb.org/docs/image-basics

export function getImageUrl(
  path: string | null,
  size: string = "original"
) {
  if (!path) {
    return "";
  }

  return `${IMAGE_BASE_URL}/${size}${path}`;
}

export function getPosterUrl(path: string | null) {
  return getImageUrl(path, imageSize.poster);
}

export function getBackdropUrl(path: string | null) {
  return getImageUrl(path, imageSize.backdrop);
}

export function getProfileUrl(path: string | null) {
  return getImageUrl(path, imageSize.profile);
}



// TODO: Add more utility functions as needed
// Examples: formatDate, formatRuntime, etc.
// lib → berisi library atau konfigurasi yang digunakan di seluruh project.
// services → berisi fungsi untuk mengambil data.
// hooks → menghubungkan React Query dengan service.
// utils.ts → menyimpan fungsi umum yang bisa dipakai di banyak tempat, misalnya menggabungkan class Tailwind atau membangun URL gambar.
