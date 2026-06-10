import Link from "next/link";
import Image from "next/image";

import { ArrowRight, Pin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { News } from "@/types/news";

import { NewsTypeBadge } from "./news-type-badge";
import { getAssetUrl } from "@/lib/utils";

interface NewsFeaturedProps {
  news: News;
}

export function NewsFeatured({ news }: NewsFeaturedProps) {
  const imageUrl = getAssetUrl(news.featured_image);

  return (
    <div className="grid overflow-hidden rounded-xl border lg:grid-cols-2">
      <div className="relative aspect-[16/9] lg:aspect-auto">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={news.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted">
            No Image
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center gap-4 p-8">
        <div className="flex flex-wrap gap-2">
          <NewsTypeBadge type={news.type} />

          {news.pinned && (
            <Badge variant="outline">
              <Pin className="mr-1 h-3 w-3" />
              Pinned
            </Badge>
          )}
        </div>
        {news.department && (
          <p className="text-sm font-medium text-primary">
            {news.department.name}
          </p>
        )}

        <h2 className="text-3xl font-bold tracking-tight">{news.title}</h2>

        <p className="text-muted-foreground">{news.summary}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{news.department?.name}</span>

          {news.date_created && (
            <span>{new Date(news.date_created).toLocaleDateString()}</span>
          )}
        </div>

        <Button asChild className="w-fit">
          <Link href={`/news/${news.id}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
