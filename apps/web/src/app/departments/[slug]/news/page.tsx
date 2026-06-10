import { notFound } from "next/navigation";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";

import { NewsDirectory } from "@/components/news/news-directory";
import { NewsFeatured } from "@/components/news/news-featured";

import { getNewsByDepartmentCode } from "@/services/news.service";
import { getDepartmentBySlug } from "@/services/department.service";

interface DepartmentNewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DepartmentNewsPage({
  params,
}: DepartmentNewsPageProps) {
  const { slug } = await params;

  const department = await getDepartmentBySlug(slug);

  if (!department) {
    notFound();
  }

  const news = await getNewsByDepartmentCode(slug);

  const featuredNews = news.find(article => article.featured);

  return (
    <PageContainer>
      <PageHeader
        title={`${department.name} News`}
        description={`Latest news and announcements from ${department.name}.`}
      />

      <div className="space-y-8">
        {featuredNews && <NewsFeatured news={featuredNews} />}

        <NewsDirectory news={news} />
      </div>
    </PageContainer>
  );
}
