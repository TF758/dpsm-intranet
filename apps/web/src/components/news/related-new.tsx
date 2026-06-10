import { News } from "@/types/news";
import { NewsGrid } from "./news-grid";

interface RelatedNewsProps {
  news: News[];
}

export function RelatedNews({ news }: RelatedNewsProps) {
  if (!news.length) return null;

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">More From This Department</h2>

        <p className="text-muted-foreground">
          Related articles you may find useful.
        </p>
      </div>

      <NewsGrid news={news} />
    </section>
  );
}
