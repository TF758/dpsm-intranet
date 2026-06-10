// app/departments/[slug]/layout.tsx

import { ReactNode } from "react";

import { DepartmentLayout } from "@/components/department/department-layout";

import { getDepartmentBySlug } from "@/services/department.service";

interface Props {
  children: ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export default async function Layout({ children, params }: Props) {
  const { slug } = await params;

  const department = await getDepartmentBySlug(slug);

  return (
    <DepartmentLayout department={department}>{children}</DepartmentLayout>
  );
}
