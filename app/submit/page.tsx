import SectionHeader from "@/components/common/section-header";
import ProductForm from "@/components/products/product-form";
import { FormIcon } from "lucide-react";
import React from "react";

export default function SubmitProject() {
  return (
    <div className="wrapper py-12">
      <SectionHeader
        title="Project Details..."
        icon={FormIcon}
        description="Submission will be reviewed before going live."
      />
      <div className="mx-auto max-w-2xl">
        <ProductForm />
      </div>
    </div>
  );
}
