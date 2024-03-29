import { createClient } from "@sanity/client";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.PREVIEW == "true" ? false : true,
  token: process.env.SANITY_API_TOKEN,
  perspective: process.env.PREVIEW == "true" ? "previewDrafts" : "published",
};

// Set up the client for fetching data in the getProps page functions
export const client = createClient(config);

export default client;
