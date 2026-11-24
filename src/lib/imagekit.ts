import type { IKImage } from "~/types/api";

/**
 * ImageKit helpers. Folders are listed at build time (pages are prerendered),
 * so new uploads appear after the next deploy.
 */

const IK_FILES_API = "https://api.imagekit.io/v1/files";

/** Widths offered in every srcset. ImageKit resizes on the fly and caches each one. */
const WIDTHS = [320, 480, 640, 800, 1080, 1440, 1920, 2560, 3200];

export type Photo = {
  name: string;
  url: string;
  width: number;
  height: number;
  /** width / height */
  ratio: number;
  alt: string;
  createdAt: string;
};

const cache = new Map<string, Promise<Photo[]>>();

/** All images in an ImageKit folder (not its subfolders), newest first. */
export function listPhotos(folder: string): Promise<Photo[]> {
  if (!cache.has(folder)) cache.set(folder, fetchFolder(folder));
  return cache.get(folder)!;
}

/** One image by file name, e.g. getPhoto("me", "anthony"). */
export async function getPhoto(folder: string, name: string): Promise<Photo> {
  const photo = (await listPhotos(folder)).find((p) => p.name === name);
  if (!photo) throw new Error(`ImageKit: no file named "${name}" in "${folder}".`);
  return photo;
}

async function fetchFolder(folder: string): Promise<Photo[]> {
  const key = import.meta.env.IK_PRIVATE_KEY;
  if (!key) {
    throw new Error("IK_PRIVATE_KEY is not set. Add it to .env (see .env.example).");
  }
  const query = new URLSearchParams({ path: folder, type: "file", limit: "1000" });
  const res = await fetch(`${IK_FILES_API}?${query}`, {
    headers: { Authorization: `Basic ${btoa(key + ":")}` },
  });
  if (!res.ok) {
    throw new Error(`ImageKit request for "${folder}" failed (${res.status}): ${await res.text()}`);
  }
  const files: IKImage[] = await res.json();
  return files
    .filter((f) => f.width > 0 && f.height > 0)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .map((f) => ({
      name: f.name,
      url: f.url,
      width: f.width,
      height: f.height,
      ratio: f.width / f.height,
      // Set an "alt" custom metadata field in ImageKit to describe a photo.
      alt: typeof f.customMetadata?.alt === "string" ? f.customMetadata.alt : "",
      createdAt: f.createdAt,
    }));
}

/**
 * Adds an ImageKit transformation to a URL. Newer uploads already carry a query
 * string (e.g. `?updatedAt=…`, which also busts the CDN cache on re-upload).
 */
function transform(url: string, tr: string): string {
  return `${url}${url.includes("?") ? "&" : "?"}tr=${tr}`;
}

/** URL for the photo resized to `width` (never upscaled past the original). */
export function sized(photo: Photo, width: number): string {
  return transform(photo.url, `w-${Math.min(width, photo.width)}`);
}

/** srcset with every standard width up to the original's width. */
export function srcset(photo: Photo): string {
  const widths = WIDTHS.filter((w) => w < photo.width);
  return [
    ...widths.map((w) => `${transform(photo.url, `w-${w}`)} ${w}w`),
    `${photo.url} ${photo.width}w`,
  ].join(", ");
}

/** Tiny blurred version, shown as a background while the real image loads. */
export function placeholder(photo: Photo): string {
  return transform(photo.url, "w-24,bl-6,q-40");
}
