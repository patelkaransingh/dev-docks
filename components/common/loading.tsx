import { Spinner } from "@/components/ui/spinner";
import React from "react";

export default function Loading({ message }: { message?: string }) {
  return (
    <div className="flex gap-2 items-center">
      <Spinner />
      <span>{message}</span>
    </div>
  );
}
