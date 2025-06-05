"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Form from "@/components/Form";
import useApiRequest from "../../hooks/useApiRequest";

const Create = () => {
  const [input, setInput] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  const { handleRequest } = useApiRequest();

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();
    handleRequest({
      url: "http://localhost:3000/products",
      method: "post",
      data: JSON.stringify(input),
    });

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

  return (
    <>
      <Form
        buttonValue="Create"
        value={input}
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Create;
