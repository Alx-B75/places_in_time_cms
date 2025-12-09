import type { SanityDocument } from "sanity";

const baseUrl = "https://www.places-in-time.com";

export function resolveProductionUrl(doc: SanityDocument | null | undefined) {
  if (!doc || doc._type !== "homepage") {
    return null;
  }

  const url = new URL(baseUrl);
  url.searchParams.set("preview", "1");
  url.searchParams.set("docId", doc._id || "");
  return url.toString();
}
