import { ChangeEvent, FormEvent } from "react";
import Button from "./Button";
import "./css/form.css";

type FormProps = {
  value?: {
    name: string;
    price: number;
    quantity: number;
  };
  buttonValue: string;
  handleFormSubmit: (event: FormEvent) => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const Form = ({
  value,
  handleFormSubmit,
  handleChange,
  buttonValue,
}: FormProps) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <label>Name: </label>
      <input
        name="name"
        value={value?.name ?? ""}
        type="text"
        onChange={handleChange}
      />
      <label>Price: </label>
      <input
        name="price"
        value={value?.price ?? 0}
        type="number"
        onChange={handleChange}
      />
      <label>Quantity: </label>
      <input
        name="quantity"
        value={value?.quantity ?? 0}
        type="number"
        onChange={handleChange}
      />
      <label>Type: </label>
      <select name="type" onChange={handleChange}>
        <option value="">Select</option>
        <option value="Physical">Physical</option>
        <option value="Digital">Digital</option>
      </select>
      <Button
        value={buttonValue}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      />
    </form>
  );
};

export default Form;
