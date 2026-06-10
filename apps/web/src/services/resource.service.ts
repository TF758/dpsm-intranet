import { readItems } from "@directus/sdk";

import { directus } from "@/lib/directus";
import { Resource } from "@/types/resource";

export async function getResources(): Promise<Resource[]> {
  try {
    return await directus.request(
      readItems("resources", {
        sort: ["-date_created"],
        fields: [
          "*",
          {
            department: ["*"],
          },
        ],
      }),
    );
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return [];
  }
}

export async function getResourcesByDepartmentCode(
  slug: string,
): Promise<Resource[]> {
  const resources = await getResources();

  return resources.filter(resource => resource.department?.code === slug);
}
