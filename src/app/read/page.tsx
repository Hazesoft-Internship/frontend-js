"use client";

import React, { useEffect, useState } from "react";
import Table from "@/components/Table";
import Link from "next/link";
import Button from "@/components/Button";
import useApiRequest from "@/hooks/useApiRequest";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
};

const Read = () => {
  const [load, setLoad] = useState(true);
  const { response, loading, handleRequest } = useApiRequest<Item[]>();

  useEffect(() => {
    setLoad(loading);
    const handleFetch = async () => {
      try {
        handleRequest({
          url: "http://localhost:3000/products",
          method: "get",
          data: {},
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    handleFetch();
  }, [handleRequest]);

  if (load) return <div>Loading...</div>;

  return (
    <>
      <Table data={response} />
      <Link href="/create">
        <Button
          value="Go to Create "
          style={{
            marginTop: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        />
      </Link>
    </>
  );
};

export default Read;
