// components/news/news-card.tsx

import Link from "next/link";
import Image from "next/image";

import { Pin } from "lucide-react";

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
      <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
        {imageUrl && (
          <div className="relative aspect-[16/9]">
            <Image
              src={imageUrl}
              alt={news.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        )}

        <CardContent className="space-y-3 p-4">
          <div className="flex flex-wrap gap-2">
            {news.type && <Badge variant="secondary">{news.type}</Badge>}

            {news.pinned && (
              <Badge>
                <Pin className="mr-1 h-3 w-3" />
                Pinned
              </Badge>
            )}
          </div>

          <h3 className="line-clamp-2 font-semibold">{news.title}</h3>

          <p className="line-clamp-3 text-sm text-muted-foreground">
            {news.summary}
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{news.department?.name}</span>

            {news.date_created && <span>{formatDate(news.date_created)}</span>}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
