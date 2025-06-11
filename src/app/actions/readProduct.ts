const readProduct = async () => {
  try {
    const res = await fetch("http://localhost:3000/products", {
      cache: "force-cache",
      next: { tags: ["products"] },
    });

    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default readProduct;
