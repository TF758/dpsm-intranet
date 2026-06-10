import { Newspaper } from "lucide-react";

export function NewsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Newspaper className="mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-lg font-semibold">No News Available</h3>

      <p className="text-muted-foreground">
        There are currently no news articles to display.
      </p>
    </div>
  );
}
