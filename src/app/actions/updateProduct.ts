"use server";

import { revalidateTag } from "next/cache";
import { ParamValue } from "next/dist/server/request/params";

export const updateProduct = async (data: any, productID: ParamValue) => {
  try {
    const res = await fetch(`http://localhost:3000/products/${productID}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to update product");

    revalidateTag("products");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
