import { createClient } from "next-sanity";

const projectId = "pawvhzt8";
const dataset = "production";
const apiVersion = "2023-01-01";

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
