// components/news/news-card.tsx

import Link from "next/link";
import Image from "next/image";

import { Newspaper, Pin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { News } from "@/types/news";
import { getAssetUrl } from "@/lib/media";
import { formatDate } from "@/lib/date";

interface NewsCardProps {
  news: News;
}

export function NewsCard({ news }: NewsCardProps) {
  const imageUrl = getAssetUrl(news.featured_image);

  return (
    <Link href={`/news/${news.id}`}>
      <Card
        className="
          h-full
          overflow-hidden
      
          transition-all
          duration-200
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        <div className="relative h-60 overflow-hidden border-b bg-muted">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={news.title}
              fill
              unoptimized
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2">
              <Newspaper className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                No image available
              </span>
            </div>
          )}
        </div>

        <CardContent className="flex h-[calc(100%-9rem)] flex-col p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {news.type && <Badge variant="secondary">{news.type}</Badge>}

            {news.pinned && (
              <Badge>
                <Pin className="mr-1 h-3 w-3" />
                Pinned
              </Badge>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="line-clamp-2 text-xl font-semibold leading-tight">
              {news.title}
            </h3>

            <p className="line-clamp-3 text-base text-muted-foreground">
              {news.summary}
            </p>
          </div>

          <div className="mt-auto border-t pt-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span className="truncate">{news.department?.name}</span>

              {news.date_created && (
                <span>{formatDate(news.date_created)}</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
