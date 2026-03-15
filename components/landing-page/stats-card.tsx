import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

export default function StatsCard({
  icon: Icon,
  value,
  lable,
  hasBorder,
}: {
  icon: LucideIcon;
  value: string;
  lable: string;
  hasBorder?: boolean;
}) {
  return (
    <div
      className={cn(
        "space-y-2",
        hasBorder && "sm:border-x sm:border-border/50",
      )}
    >
      <div className={`flex items-center justify-center gap-2`}>
        <Icon className="size-5 text-primary/80" />
        <p className="text-3xl sm:text-4xl font-medium">{value}</p>
      </div>
      <p className="text-sm text-muted-foreground">{lable}</p>
    </div>
  );
}
