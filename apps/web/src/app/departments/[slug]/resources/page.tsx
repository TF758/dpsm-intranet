import { ResourceDirectory } from "@/components/resources/resource-directory";
import { getResourcesByDepartmentCode } from "@/services/resource.service";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DepartmentResourcesPage({ params }: Props) {
  const { slug } = await params;

  const resources = await getResourcesByDepartmentCode(slug);

  return <ResourceDirectory resources={resources} />;
}
