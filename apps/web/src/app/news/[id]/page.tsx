import { notFound } from "next/navigation";
import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";

import { getNewsById, getRelatedNews } from "@/services/news.service";

import { NewsTypeBadge } from "@/components/news/news-type-badge";
import { Badge } from "@/components/ui/badge";
import { getAssetUrl } from "@/lib/utils";
import { RelatedNews } from "@/components/news/related-new";

interface NewsDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;

  const article = await getNewsById(id);

  if (!article) {
    notFound();
  }

  const relatedNews = await getRelatedNews(article.department.code, article.id);

  const imageUrl = getAssetUrl(article.featured_image);

  return (
    <PageContainer className="max-w-4xl">
      <article className="space-y-8">
        {imageUrl && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={imageUrl}
              alt={article.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <NewsTypeBadge type={article.type} />

            {article.department && (
              <Badge variant="outline">{article.department.name}</Badge>
            )}
          </div>

          <h1 className="text-4xl font-bold tracking-tight">{article.title}</h1>

          <p className="text-lg text-muted-foreground">{article.summary}</p>

          {article.date_created && (
            <p className="text-sm text-muted-foreground">
              Published {new Date(article.date_created).toLocaleDateString()}
            </p>
          )}
        </div>

        {article.content && (
          <div
            className="prose prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />
        )}
      </article>
      <RelatedNews news={relatedNews} />
    </PageContainer>
  );
}
