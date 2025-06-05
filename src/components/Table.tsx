"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";
import "./css/table.css";
import useApiRequest from "@/hooks/useApiRequest";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
};

type TableProps = {
  data: Item[];
  mutate: () => void;
};

const Table = ({ data, mutate }: TableProps) => {
  const { handleRequest } = useApiRequest();

  const handleDelete = async (item: Item) => {
    let confirm = window.confirm(`Do you want to delete ${item.name} ?`);
    if (!confirm) {
      return;
    }
    handleRequest({
      url: `http://localhost:3000/products/${item.id}`,
      method: "delete",
    })
      .then(() => {
        mutate();
      })
      .catch(() => {
        alert("Failed to delete product");
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: Item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.type}</td>

              <td>
                <Link href={`/update/${item.id}`}>
                  {" "}
                  <Button
                    value="Update"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </td>
              <td>
                <Button
                  value="Delete"
                  onClick={() => handleDelete(item)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
