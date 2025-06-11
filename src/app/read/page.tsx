import Table from "@/components/Table";
import Link from "next/link";
import Button from "@/components/Button";
import readProduct from "../actions/readProduct";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
};

const Read = async () => {
  let data: Item[] = [];
  try {
    data = await readProduct();
  } catch (error) {
    return error;
  }

  return (
    <>
      <Table data={data} />
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
