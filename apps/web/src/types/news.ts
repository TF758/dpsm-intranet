// src/types/news.ts

import { Department } from "./department";

export type NewsType = "announcement" | "notice" | "update" | "general";

export interface News {
  id: string;
  title: string;
  summary: string;
  content: string;

  featured_image?: string;

  department: Department;

  type?: NewsType;

  pinned?: boolean;
  featured?: boolean;

  expiry_date?: string;
  external_link?: string;

  user_created?: string;
  user_updated?: string;
  date_created?: string;
  date_updated?: string;
}
