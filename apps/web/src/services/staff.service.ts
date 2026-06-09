import { readItems } from "@directus/sdk";

import { directus } from "@/lib/directus";
import { Staff } from "@/types/staff";

export async function getStaff(): Promise<Staff[]> {
  try {
    const staff = await directus.request(
      readItems("staff", {
        sort: ["last_name", "first_name"],
        fields: [
          "id",
          "first_name",
          "last_name",
          "job_title",
          "email",
          "phone",
          "extension",
          "unit",
          "bio",
          "photo",

          {
            department: ["id", "code", "name"],
          },
        ],
      }),
    );

    return staff as Staff[];
  } catch (error) {
    console.error("Failed to fetch staff:", error);
    return [];
  }
}
