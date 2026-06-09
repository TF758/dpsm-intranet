import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";

import { StaffDirectory } from "@/components/staff/staff-directory";
import { getStaff } from "@/services/staff.service";

export default async function StaffPage() {
  const staff = await getStaff();

  return (
    <PageContainer>
      <PageHeader
        title="Staff Directory"
        description="Search and browse DPSM staff members across departments and units."
      />

      <StaffDirectory staff={staff} />
    </PageContainer>
  );
}
