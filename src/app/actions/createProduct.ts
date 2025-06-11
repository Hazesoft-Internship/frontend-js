"use server";

import { revalidateTag } from "next/cache";

export const createProduct = async (data: any) => {
  try {
    const res = await fetch(`http://localhost:3000/products`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to create product");

    revalidateTag("products");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
