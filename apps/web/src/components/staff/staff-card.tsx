import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Mail, Phone } from "lucide-react";

import { Staff } from "@/types/staff";
import { getAssetUrl } from "@/lib/media";

interface StaffCardProps {
  staff: Staff;
}

function getInitials(firstName: string, lastName: string) {
  return `${firstName[0]}${lastName[0]}`.toUpperCase();
}

export function StaffCard({ staff }: StaffCardProps) {
  return (
    <div
      className="
      rounded-xl
      border
      bg-card
      p-6
      transition-all
      duration-200
      hover:-translate-y-1
      hover:shadow-lg
    "
    >
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}

        <Avatar
          className="
          h-32
          w-32
          border-4
          border-background
          shadow-md
        "
        >
          <AvatarImage
            src={getAssetUrl(staff.photo) ?? undefined}
            alt={`${staff.first_name} ${staff.last_name}`}
            className="object-cover"
          />

          <AvatarFallback
            className="
            bg-[#0B2A63]
            text-white
            text-3xl
            font-bold
          "
          >
            {getInitials(staff.first_name, staff.last_name)}
          </AvatarFallback>
        </Avatar>

        {/* Name & Title */}

        <div className="mt-5">
          <h3
            className="
            text-xl
            font-semibold
            tracking-tight
          "
          >
            {staff.first_name} {staff.last_name}
          </h3>

          <p
            className="
            mt-1
            text-md
            text-muted-foreground
          "
          >
            {staff.job_title}
          </p>
        </div>

        {/* Department & Unit */}

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {staff.department && (
            <span
              className="
              inline-flex
              items-center
              rounded-full
              bg-[#0B2A63]
              px-3
              py-1
              text-sm
              font-medium
              text-white
            "
            >
              {staff.department.code}
            </span>
          )}

          {staff.unit && (
            <span
              className="
              inline-flex
              items-center
              rounded-full
              border
              px-3
              py-1
              text-sm
              font-medium
            "
            >
              {staff.unit}
            </span>
          )}
        </div>

        {/* Contact Information */}

        <div
          className="
          mt-5
          w-full
          border-t
          pt-4
          space-y-3
        "
        >
          <div
            className="
            flex
            items-center
            justify-center
            gap-2
            text-sm
          "
          >
            <Mail className="h-4 w-4 text-muted-foreground" />

            <span className="truncate">{staff.email}</span>
          </div>

          {staff.phone && (
            <div
              className="
              flex
              items-center
              justify-center
              gap-2
              text-sm
            "
            >
              <Phone className="h-4 w-4 text-muted-foreground" />

              <span>{staff.phone}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
