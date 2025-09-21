// src/lib/sanityClient.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImage } from "../types/sanity"; // Import your SanityImage type

export const sanityClient = createClient({
  // Find these in your sanity.cli.ts file or at manage.sanity.io
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: "2025-09-19", // use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
});

// Create the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Create a helper function to generate URLs
export function urlFor(source: SanityImage) {
  return builder.image(source);
}