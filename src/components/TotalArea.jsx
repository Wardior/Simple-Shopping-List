import React from "react";
import { useItems } from "../contexts/context.app";

function TotalArea() {
  const { itemsTotal } = useItems();

  return (
    <div className=" bg-blue-300 rounded-b-md py-2 px-6 flex justify-end ">
      <p className="font-normal">
        Total: <span className="font-medium">{itemsTotal}</span> product(s)
      </p>
    </div>
  );
}

export default TotalArea;
