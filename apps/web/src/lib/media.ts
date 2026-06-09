const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

export function getAssetUrl(fileId?: string | null) {
  if (!fileId) return null;

  return `${DIRECTUS_URL}/assets/${fileId}`;
}
