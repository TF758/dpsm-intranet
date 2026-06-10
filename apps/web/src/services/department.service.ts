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

export async function getDepartmentBySlug(slug: string): Promise<Department> {
  const departments = await directus.request(
    readItems("departments", {
      filter: {
        code: {
          _eq: slug,
        },
      },
      limit: 1,
    }),
  );

  const department = departments[0];

  if (!department) {
    throw new Error(`Department not found: ${slug}`);
  }

  return department;
}
