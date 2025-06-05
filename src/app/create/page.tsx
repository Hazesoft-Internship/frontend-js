"use client";

import { FormEvent, useState } from "react";
import Form from "@/components/Form";
import useApiRequest from "../../hooks/useApiRequest";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();
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
    })
      .then(() => {
        router.push("/read");
      })
      .catch(() => {
        alert("Failed to create product");
      });
  };

  return (
    <>
      <Form
        buttonValue="Create"
        value={input}
        setInput={setInput}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Create;
