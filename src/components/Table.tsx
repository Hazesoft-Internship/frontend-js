"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

type TableProps = {
  data: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    type: string;
  }[];
};

const Table = ({ data }: TableProps) => {
  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        marginTop: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              backgroundColor: "#f4f4f4",
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "left",
            }}
          >
            ID
          </th>
          <th
            style={{
              backgroundColor: "#f4f4f4",
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "left",
            }}
          >
            Name
          </th>
          <th
            style={{
              backgroundColor: "#f4f4f4",
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "left",
            }}
          >
            Price
          </th>
          <th
            style={{
              backgroundColor: "#f4f4f4",
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "left",
            }}
          >
            Quantity
          </th>
          <th
            style={{
              backgroundColor: "#f4f4f4",
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "left",
            }}
          >
            Type
          </th>
          <th
            style={{
              backgroundColor: "#f4f4f4",
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "left",
            }}
          >
            Update
          </th>
          <th
            style={{
              backgroundColor: "#f4f4f4",
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "left",
            }}
          >
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              {item.id}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              {item.name}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              {item.price}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              {item.quantity}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              {item.type}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Link href={`/update/${item.id}`}>
                {" "}
                <Button
                  value="Update"
                  onClick={() => {}}
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
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Button
                value="Delete"
                onClick={async () => {
                  try {
                    await fetch(`http://localhost:3000/products/${item.id}`, {
                      method: "DELETE",
                    });
                    window.location.reload();
                  } catch (err) {
                    console.error("Failed to delete:", err);
                  }
                }}
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
  );
};

export default Table;
