"use client";

import { Resource } from "@/types/resource";

import { ResourceGrid } from "./resource-grid";

interface ResourceDirectoryProps {
  resources: Resource[];
}

export function ResourceDirectory({ resources }: ResourceDirectoryProps) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">
          {resources.length} resources found
        </p>
      </div>

      <ResourceGrid resources={resources} />
    </div>
  );
}
