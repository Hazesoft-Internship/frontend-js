"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Form from "@/components/Form";
import { updateProduct } from "@/app/actions/updateProduct";

const Update = () => {
  const params = useParams();
  const router = useRouter();
  const productID = params.id;
  const [input, setInput] = useState({
    name: "",
    price: 0,
    quantity: 0,
    type: "",
  });

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      updateProduct(input, productID);
      router.push("/read");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/products/${productID}`, {
      method: "GET",
    }).then(async (res) => {
      const data = await res.json();
      setInput({
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        type: data.type,
      });
    });
  }, []);

  return (
    <div>
      <h2>Update Product</h2>
      <Form
        buttonValue="Update"
        value={input}
        setInput={setInput}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Update;
