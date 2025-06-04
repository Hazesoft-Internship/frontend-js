"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import useFetch from "../hooks/useFetch";

const Create = () => {
  const [input, setInput] = useState({});
  const [trigger, setTrigger] = useState(false);
  const [res, setRes] = useState<any>(null);

  const { response, loading, error } = useFetch({
    url: "http://localhost:3000/products",
    method: "post",
    data: JSON.stringify(input),
    trigger: trigger,
  });

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTrigger(true);
    setRes(response);
    window.location.href = "/read";
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    <>
      <form onSubmit={handleFormSubmit} style={formStyle}>
        <label style={labelStyle}>ID: </label>
        <input
          name="id"
          type="text"
          onChange={handleChange}
          style={inputStyle}
        />
        <label style={labelStyle}>Name: </label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          style={inputStyle}
        />
        <label style={labelStyle}>Price: </label>
        <input
          name="price"
          type="number"
          onChange={handleChange}
          style={inputStyle}
        />
        <label style={labelStyle}>Quantity: </label>
        <input
          name="quantity"
          type="number"
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
      {res && <p>Form Submitted Successfully</p>}
    </>
  );
};

export default Create;
