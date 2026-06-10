import { notFound } from "next/navigation";

import { getStaff, getStaffByDepartment } from "@/services/staff.service";

import { StaffDirectory } from "@/components/staff/staff-directory";
import { getDepartmentBySlug } from "@/services/department.service";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DepartmentStaffPage({ params }: Props) {
  const { slug } = await params;

  const department = await getDepartmentBySlug(slug);
  //   console.log("Department", department);
  if (!department) {
    notFound();
  }

  //   const staff = await getStaffByDepartment(department.id);

  const staff = await getStaffByDepartment(department.id);
  console.log(staff.filter(member => member.department?.id === department.id));

  return (
    <StaffDirectory
      staff={staff}
      showDepartmentFilter={false}
      showUnitFilter={false}
    />
  );
}
