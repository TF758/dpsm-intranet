import { Building2 } from "lucide-react";

import { Department } from "@/types/department";

interface DepartmentHeaderProps {
  department: Department;
}

export function DepartmentHeader({ department }: DepartmentHeaderProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        bg-primary
        text-primary-foreground
      "
    >
      <div
        className="
          px-8
          py-8
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-lg
              bg-white/15
            "
          >
            <Building2 className="h-6 w-6" />
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-widest
                text-primary-foreground/80
              "
            >
              Department Portal
            </p>

            <h1
              className="
                text-3xl
                font-bold
              "
            >
              {department.name}
            </h1>
          </div>
        </div>

        {department.mission && (
          <p
            className="
              mt-6
              max-w-4xl
              text-primary-foreground/90
            "
          >
            {department.mission}
          </p>
        )}
      </div>
    </div>
  );
}
