import React from "react";
import { useItems } from "../contexts/context.app";
import { IconButton } from "@mui/material";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ItemsQty({ item }) {
  const { increaseQty, decreaseQty } = useItems();

  return (
    <div className="flex items-center">
      <IconButton
        size="small"
        disabled={item.amount < 1 || item.check}
        onClick={() => decreaseQty(item)}
        color={`${item.amount > 1 ? "info" : "error"}`}
      >
        <FiChevronLeft />
      </IconButton>
      <div>
        <span className={` ${item.check ? "text-stone-400" : ""} `}>
          {item.amount}
        </span>
      </div>
      <IconButton
        size="small"
        disabled={item.check}
        onClick={() => increaseQty(item)}
        color="info"
      >
        <FiChevronRight />
      </IconButton>
    </div>
  );
}

export default ItemsQty;
