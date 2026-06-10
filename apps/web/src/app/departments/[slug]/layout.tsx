import { notFound } from "next/navigation";

import { getDepartmentBySlug } from "@/services/department.service";
import { DepartmentLayout } from "@/components/department/department-layout";

interface Props {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export default async function Layout({ children, params }: Props) {
  const { slug } = await params;

  const department = await getDepartmentBySlug(slug);

  if (!department) {
    notFound();
  }

  return (
    <DepartmentLayout department={department}>{children}</DepartmentLayout>
  );
}
