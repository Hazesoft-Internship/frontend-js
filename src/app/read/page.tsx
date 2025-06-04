"use client";

import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Table from "@/components/Table";

const Read = () => {
  const [data, setResponse] = useState([]);
  const { response, loading, error } = useFetch({
    url: "http://localhost:3000/products",
    method: "get",
    data: {},
    trigger: true,
  });

  useEffect(() => {
    setResponse(response);
  }, [response]);

  return <Table data={data} />;
};

export default Read;
