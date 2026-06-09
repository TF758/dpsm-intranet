import { readItems } from "@directus/sdk";
import { directus } from "@/lib/directus";
import type { Department } from "@/types/department";

export async function getDepartments(): Promise<Department[]> {
  try {
    return await directus.request(
      readItems("departments", {
        sort: ["name"],
      }),
    );
  } catch (error) {
    console.error("Failed to fetch departments:", error);
    return [];
  }
}
