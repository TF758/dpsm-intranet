// components/staff/staff-grid.tsx

import { Staff } from "@/types/staff";
import { StaffCard } from "./staff-card";

interface Props {
  staff: Staff[];
}

export function StaffGrid({ staff }: Props) {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-5
      "
    >
      {staff.map(member => (
        <>
          <StaffCard key={member.id} staff={member} />
          <StaffCard key={member.id} staff={member} />
          <StaffCard key={member.id} staff={member} />
          <StaffCard key={member.id} staff={member} />
          <StaffCard key={member.id} staff={member} />
          <StaffCard key={member.id} staff={member} />
          <StaffCard key={member.id} staff={member} />
          <StaffCard key={member.id} staff={member} />
        </>
      ))}
    </div>
  );
}
