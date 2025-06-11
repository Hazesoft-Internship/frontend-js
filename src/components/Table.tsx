"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";
import "./css/table.css";
import { deleteProduct } from "@/app/actions/deleteProduct";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
};

type TableProps = {
  data: Item[];
};

const Table = ({ data }: TableProps) => {
  const handleDelete = async (item: Item) => {
    const confirmDelete = window.confirm(`Do you want to delete ${item.name}?`);
    if (!confirmDelete) return;

    try {
      deleteProduct(item.id);
    } catch (error) {
      alert(error);
    }
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
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.type}</td>
              <td>
                <Link href={`/update/${item.id}`}>
                  <Button
                    value="Update"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
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
