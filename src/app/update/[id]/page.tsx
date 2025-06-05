"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Form from "@/components/Form";
import useApiRequest from "../../../hooks/useApiRequest";

const Update = () => {
  const params = useParams();
  const router = useRouter();
  const { loading, handleRequest } = useApiRequest();

  const productID = params.id;
  const [input, setInput] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  useEffect(() => {
    handleRequest({
      url: `http://localhost:3000/products/${productID}`,
      method: "get",
      data: {},
    }).then((res) => {
      setInput({
        name: res.name,
        price: res?.price,
        quantity: res?.quantity,
      });
    });
  }, [productID, handleRequest]);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    handleRequest({
      url: `http://localhost:3000/products/${productID}`,
      method: "put",
      data: input,
    })
      .then(() => {
        router.push("/read");
      })
      .catch(() => {
        alert("Failed to update products");
      });
  };

  if (loading) return <div>Loading...</div>;

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
