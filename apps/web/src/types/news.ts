// src/types/news.ts

import { Department } from "./department";

export type NewsPriority = "normal" | "important" | "urgent";

export type NewsType =
  | "announcement"
  | "department_update"
  | "campaign_update"
  | "event_notice"
  | "achievement"
  | "general_news";

export interface News {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  featuredImage?: string;
  department: Department;
  type: NewsType;
  priority: NewsPriority;
  featured?: boolean;
  pinned?: boolean;
  expiryDate?: string;
  externalLink?: string;
  publishedAt?: string;
}
