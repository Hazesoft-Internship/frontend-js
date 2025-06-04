"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "next/navigation";

const Update = () => {
  const params = useParams();
  const productId = params.update?.[1];

  const [input, setInput] = useState({
    id: "",
    name: "",
    price: "",
    quantity: "",
    type: "",
  });

  const [trigger, setTrigger] = useState(false);

  const { response, loading, error } = useFetch({
    url: `http://localhost:3000/products/${productId}`,
    method: "get",
    data: {},
    trigger: true,
  });

  const { apiRes, load, err } = useFetch({
    url: `http://localhost:3000/products/${productId}`,
    method: "put",
    data: input,
    trigger: trigger,
  });

  useEffect(() => {
    if (response) {
      setInput({
        id: response.id || "",
        name: response.name || "",
        price: response.price?.toString() || "",
        quantity: response.quantity?.toString() || "",
        type: response.type || "",
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

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTrigger(true);
    window.location.href = "/read";
  };

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const labelStyle = {
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };
  return (
    <div>
      <h2>Update Product</h2>

      <form onSubmit={handleFormSubmit} style={formStyle}>
        <label style={labelStyle}>ID: </label>
        <input
          name="id"
          type="text"
          value={input.id}
          disabled
          onChange={handleChange}
          style={inputStyle}
        />
        <label style={labelStyle}>Name: </label>
        <input
          name="name"
          type="text"
          value={input.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <label style={labelStyle}>Price: </label>
        <input
          name="price"
          type="number"
          value={input.price}
          onChange={handleChange}
          style={inputStyle}
        />
        <label style={labelStyle}>Quantity: </label>
        <input
          name="quantity"
          type="number"
          value={input.quantity}
          onChange={handleChange}
          style={inputStyle}
        />
        <label style={labelStyle}>Type: </label>
        <select name="type" onChange={handleChange} style={inputStyle}>
          <option value="">Select</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
