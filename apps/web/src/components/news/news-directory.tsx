// components/news/news-directory.tsx

import { News } from "@/types/news";

import { Card, CardContent } from "@/components/ui/card";

import { NewsGrid } from "./news-grid";

interface NewsDirectoryProps {
  news: News[];
}

export function NewsDirectory({ news }: NewsDirectoryProps) {
  if (news.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">No news articles found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Showing {news.length} article
        {news.length !== 1 ? "s" : ""}
      </p>

      <NewsGrid news={news} />
    </div>
  );
}
