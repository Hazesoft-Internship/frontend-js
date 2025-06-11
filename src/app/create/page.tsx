"use client";

import { FormEvent, useState } from "react";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";
import { createProduct } from "../actions/createProduct";

const Create = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    name: "",
    price: 0,
    quantity: 0,
    type: "",
  });

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();
    try {
      createProduct(input);
      router.push("/read");
    } catch (error) {
      alert(error);
    }
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
