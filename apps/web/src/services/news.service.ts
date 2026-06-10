// src/services/news.service.ts

import { readItems } from "@directus/sdk";

import { directus } from "@/lib/directus";
import { News } from "@/types/news";

const NEWS_FIELDS = [
  "*",
  {
    department: ["id", "name", "code"],
  },
] as const;

export async function getNews(): Promise<News[]> {
  try {
    return await directus.request(
      readItems("news", {
        fields: NEWS_FIELDS,
        sort: ["-date_created"],
      }),
    );
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
}

export async function getNewsByDepartmentCode(
  departmentCode: string,
): Promise<News[]> {
  const news = await getNews();

  return news.filter(article => article.department?.code === departmentCode);
}
export async function getNewsById(id: string): Promise<News | null> {
  try {
    const items = await directus.request(
      readItems("news", {
        fields: NEWS_FIELDS,
        filter: {
          id: {
            _eq: id,
          },
        },
        limit: 1,
      }),
    );

    return items[0] ?? null;
  } catch (error) {
    console.error("Failed to fetch news article:", error);
    return null;
  }
}
export async function getFeaturedNews(): Promise<News[]> {
  try {
    return await directus.request(
      readItems("news", {
        fields: NEWS_FIELDS,
        filter: {
          featured: {
            _eq: true,
          },
        },
        sort: ["-date_created"],
      }),
    );
  } catch (error) {
    console.error("Failed to fetch featured news:", error);
    return [];
  }
}

export async function getPinnedNews(): Promise<News[]> {
  try {
    return await directus.request(
      readItems("news", {
        fields: NEWS_FIELDS,
        filter: {
          pinned: {
            _eq: true,
          },
        },
        sort: ["-date_created"],
      }),
    );
  } catch (error) {
    console.error("Failed to fetch pinned news:", error);
    return [];
  }
}

export async function getRelatedNews(
  departmentCode: string,
  currentId: string,
  limit = 3,
): Promise<News[]> {
  const news = await getNewsByDepartmentCode(departmentCode);

  return news.filter(article => article.id !== currentId).slice(0, limit);
}
