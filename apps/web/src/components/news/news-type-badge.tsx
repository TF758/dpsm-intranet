import { Badge } from "@/components/ui/badge";

import { NewsType } from "@/types/news";

interface NewsTypeBadgeProps {
  type?: NewsType;
}

export function NewsTypeBadge({ type }: NewsTypeBadgeProps) {
  if (!type) return null;

  switch (type) {
    case "announcement":
      return <Badge>Announcement</Badge>;

    case "notice":
      return <Badge variant="destructive">Notice</Badge>;

    case "update":
      return <Badge variant="secondary">Update</Badge>;

    case "general":
    default:
      return <Badge variant="outline">General</Badge>;
  }
}
