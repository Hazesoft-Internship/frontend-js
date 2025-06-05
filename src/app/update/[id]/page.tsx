"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Form from "@/components/Form";
import useApiRequest from "../../../hooks/useApiRequest";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
};

const Update = () => {
  const params = useParams();
  const productID = params.id;

  const [input, setInput] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  const [load, setLoad] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { response, loading, handleRequest } = useApiRequest<Item>();

  useEffect(() => {
    try {
      setLoad(loading);
      handleRequest({
        url: `http://localhost:3000/products/${productID}`,
        method: "get",
        data: {},
      });
    } catch (err) {
      setError("Failed to fetch product data");
    } finally {
      setLoad(false);
    }
  }, [productID, handleRequest]);

  useEffect(() => {
    if (response && !Array.isArray(response)) {
      setInput({
        name: response?.name || "",
        price: Number(response?.price) || 0,
        quantity: Number(response?.quantity) || 0,
      });
    }
  }, [response]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      handleRequest({
        url: `http://localhost:3000/products/${productID}`,
        method: "put",
        data: input,
      });
      window.location.href = "/read";
    } catch (err) {
      setError("Failed to update product");
    }
  };

  if (load) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Update Product</h2>
      <Form
        buttonValue="Update"
        value={input}
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Update;
