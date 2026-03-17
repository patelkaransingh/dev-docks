import { z } from "zod";

export const productFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name can not be less than 3 chars.")
    .max(120, "Name can not be more than 120 chars."),

  slug: z
    .string()
    .min(3)
    .max(140)
    .regex(
      /^[a-z0-9-]+$/,
      "Slug must contain lowercase letters, numbers or hyphens",
    ),

  tagline: z
    .string()
    .min(10, "A brief description of at least 30 characters.")
    .max(200),

  description: z.string().max(2000).optional(),

  websiteUrl: z
    .string()
    .trim()
    .min(1, "Url can't be blank")
    .regex(
      /^https?:\/\/([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/,
      "Please put valid url",
    ),

  tags: z.string().refine(
    (val) =>
      val
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean).length >= 2,
    {
      message: "Enter at least 2 tags separated by commas",
    },
  ),
});

export type ProductFromValues = z.infer<typeof productFormSchema>;
