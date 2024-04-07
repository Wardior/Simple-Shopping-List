import React from "react";
import { useDate } from "../hooks/cus.date";

function DateArea() {
  const currentDay = useDate();

  return (
    <div className="p-1 text-center absolute top-0 left-0">
      <span className="capitalize text-xs text-blue-500 italic">
        {currentDay}
      </span>
    </div>
  );
}

export default DateArea;
