import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";

import { ResourceDirectory } from "@/components/resources/resource-directory";
import { getResources } from "@/services/resource.service";

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <PageContainer>
      <PageHeader
        title="Resource Centre"
        description="Access policies, forms, manuals, templates and departmental resources."
      />

      <ResourceDirectory resources={resources} />
    </PageContainer>
  );
}
