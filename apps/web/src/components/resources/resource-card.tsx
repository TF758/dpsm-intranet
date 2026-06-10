import Link from "next/link";
import {
  FileText,
  FileSpreadsheet,
  FileImage,
  Presentation,
  LinkIcon,
  Star,
  Download,
  Eye,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Resource } from "@/types/resource";
import { cn, getResourceUrl, isPreviewable } from "@/lib/utils";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const fileUrl = getResourceUrl(resource.resource_file);

  const getIcon = () => {
    switch (resource.resource_type) {
      case "pdf":
        return <FileText className="h-5 w-5" />;

      case "word":
        return <FileText className="h-5 w-5" />;

      case "excel":
        return <FileSpreadsheet className="h-5 w-5" />;

      case "powerpoint":
        return <Presentation className="h-5 w-5" />;

      case "link":
        return <LinkIcon className="h-5 w-5" />;

      default:
        return <FileImage className="h-5 w-5" />;
    }
  };

  const typeStyles = {
    pdf: "bg-red-500/10 text-red-600 dark:text-red-400",
    word: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    excel: "bg-green-500/10 text-green-600 dark:text-green-400",
    powerpoint: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    link: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  };

  return (
    <Card
      className="
        h-full
        overflow-hidden
        border-border/60
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-lg
      "
    >
      <CardContent className="flex h-full flex-col p-5">
        <div className="mb-4 flex items-start justify-between">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl",
              typeStyles[resource.resource_type],
            )}
          >
            {getIcon()}
          </div>

          {resource.featured && (
            <Badge
              variant="secondary"
              className="
                border-amber-200
                bg-amber-100
                text-amber-800
                dark:border-amber-900
                dark:bg-amber-950
                dark:text-amber-300
              "
            >
              <Star className="mr-1 h-3 w-3" />
              Featured
            </Badge>
          )}
        </div>

        <div className="flex-1 space-y-3">
          <h3 className="line-clamp-2 text-xl font-semibold leading-tight">
            {resource.title}
          </h3>

          {resource.description && (
            <p className="line-clamp-3 text-md text-muted-foreground">
              {resource.description}
            </p>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {resource.department?.name && (
            <Badge variant="secondary">{resource.department.name}</Badge>
          )}

          <Badge variant="outline" className="font-medium uppercase">
            {resource.resource_type ?? "file"}
          </Badge>
        </div>

        <div className="mt-5 flex items-center gap-4 border-t pt-4">
          {isPreviewable(resource.resource_type) ? (
            <Link
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
        inline-flex
        items-center
        gap-2
        text-sm
        font-medium
        text-primary
      "
            >
              <Eye className="h-4 w-4" />
              Preview
            </Link>
          ) : (
            <Link
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
        inline-flex
        items-center
        gap-2
        text-sm
        font-medium
        text-primary
      "
            >
              Open
            </Link>
          )}

          <a
            href={fileUrl}
            download
            className="
      inline-flex
      items-center
      gap-2
      text-sm
      text-muted-foreground
      hover:text-primary
    "
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
