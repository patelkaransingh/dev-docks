"use client";

import {
  productFormSchema,
  ProductFromValues,
} from "@/components/products/product-form-schema";
import FormField from "@/components/forms/form-field";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";

export default function ProductForm() {
  const form = useForm<ProductFromValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      slug: "",
      tagline: "",
      description: "",
      websiteUrl: "",
      tags: "",
    },
  });

  function onSubmit(data: ProductFromValues) {
    console.log(data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
        control={form.control}
        name="name"
        label="Product Name"
        placeholder="your product name here"
        required
      />
      <FormField
        control={form.control}
        name="slug"
        label="Slug"
        placeholder="my-awesome-product"
        description="URL-friendly version of your product name"
        required
      />
      <FormField
        control={form.control}
        name="tagline"
        label="Tagline"
        placeholder="A brief description"
        required
      />
      <FormField
        control={form.control}
        name="description"
        label="Description"
        placeholder="Tell us more about your product..."
        textarea
      />
      <FormField
        control={form.control}
        name="websiteUrl"
        label="Websit URL"
        placeholder="https://your-product-url.com"
        required
      />
      <FormField
        control={form.control}
        name="tags"
        label="Tags"
        placeholder="AI,SaaS,Productivity"
        description="Tags describes a product and help in organize, search and categorize"
        required
      />

      <Button type="submit" size="lg" className="w-full">
        Submit Product <CircleArrowRight />
      </Button>
    </form>
  );
}
