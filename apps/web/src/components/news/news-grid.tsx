// components/news/news-grid.tsx

import { News } from "@/types/news";

import { NewsCard } from "./news-card";

interface NewsGridProps {
  news: News[];
}

export function NewsGrid({ news }: NewsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {news.map(article => (
        <NewsCard key={article.id} news={article} />
      ))}
    </div>
  );
}
