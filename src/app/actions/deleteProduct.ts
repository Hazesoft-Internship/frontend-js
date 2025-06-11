"use server";

import { revalidateTag } from "next/cache";

export const deleteProduct = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete product");

    revalidateTag("products");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
