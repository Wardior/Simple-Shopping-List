import React from "react";
import { useItems } from "../contexts/context.app";

function InputArea() {
  const { inputHandler, addItem, state } = useItems();

  return (
    <form
      onSubmit={addItem}
      className=" flex justify-center gap-2 b-slate-300/100 p-1 rounded-lg "
    >
      <input
        type="search"
        className=" rounded-md p-2 text-sm text-stone-600 bg-slate-50 border-2 focus:border-blue-400 outline-none  w-2/3 "
        value={state.current}
        onChange={inputHandler}
        minLength={3}
        maxLength={15}
        required
        placeholder="What to buy today ?"
      />
      <button
        className="bg-blue-400 hover:font-medium hover:scale-105 hover:bg-blue-500 duration-200 text-white text-xs font-semiBold rounded-md p-2 w-1/3 focus:bg-blue-700"
        type="submit"
      >
        Add to list
      </button>
    </form>
  );
}

export default InputArea;
