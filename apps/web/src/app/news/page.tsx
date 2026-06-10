import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";

import { NewsDirectory } from "@/components/news/news-directory";
import { NewsFeatured } from "@/components/news/news-featured";

import { getNews } from "@/services/news.service";

export default async function NewsPage() {
  const news = await getNews();

  const featuredNews = news.find(article => article.featured);

  return (
    <PageContainer>
      <PageHeader
        title="News"
        description="Latest announcements, notices and updates from DPSM."
      />

      <div className="space-y-8">
        {featuredNews && <NewsFeatured news={featuredNews} />}

        <NewsDirectory news={news} />
      </div>
    </PageContainer>
  );
}
