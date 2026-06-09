import { createDirectus, rest } from "@directus/sdk";
import type { Schema } from "@/types/directus";

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL!;

export const directus = createDirectus<Schema>(directusUrl).with(rest());
