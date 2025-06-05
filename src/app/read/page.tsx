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
  const [data, setData] = useState<Item[]>([]);
  const { loading, handleRequest } = useApiRequest();

  const handleFetch = () => {
    handleRequest({
      url: "http://localhost:3000/products",
      method: "get",
      data: {},
    })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    handleFetch();
  }, [handleRequest]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {data && <Table data={data} mutate={handleFetch} />}
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
