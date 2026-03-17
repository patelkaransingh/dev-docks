"use server";

import { productFormSchema } from "@/components/products/product-form-schema";
import { db } from "@/db";
import { products } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";

type FormState = {
  success: boolean;
  message: string;
};

export const addProductAction = async (
  prevState: FormState,
  formData: FormData,
) => {
  console.log(formData);

  try {
    // user auth validattion
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "Please Sign-in to submit the product.",
      };
    }

    //getting user mail id
    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress || "Anonymous";

    // getting raw data from fromData
    const rawdata = Object.fromEntries(formData.entries());

    // parsing data to its type using zod parse
    const { name, slug, tagline, description, websiteUrl, tags } =
      productFormSchema.parse(rawdata);

    //  getting tags string to tags[]
    const tagsArray =
      typeof tags === "string"
        ? tags.split(",").map((tag) => tag.trim().toLowerCase())
        : [];

    // transfor data for db product table
    await db.insert(products).values({
      name,
      slug,
      tagline,
      description,
      websiteUrl,
      tags: tagsArray,
      status: "pending",
      submittedBy: userEmail,
      userId,
    });

    return {
      success: true,
      message: "Product submitted successfully, it will be reviewed shortly.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "failed to submit product.",
    };
  }
};
