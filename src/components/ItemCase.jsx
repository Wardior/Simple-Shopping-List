import React from "react";
import ItemsQty from "./ItemsQty";
import { useItems } from "../contexts/context.app";

function ItemCase({ item }) {
  const { checkItem, deleteItem } = useItems();

  return (
    <div className=" bg-slate-100 hover:bg-slate-50 duration-300 rounded-md p-2 flex justify-between items-center ">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={item.check}
          onChange={() => checkItem(item)}
          className="accent-blue-200"
        />
        <hr className="w-0.5 h-8 bg-blue-300 mx-2" />
        <span
          className={` ${item.check ? "line-through text-stone-400" : ""} `}
        >
          {item.id}
        </span>
      </div>
      <ItemsQty item={item} />
    </div>
  );
}

export default ItemCase;
