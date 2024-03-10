import { createContext, useContext, useReducer } from "react";
import { itemsReducer } from "./reducer";

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemsReducer, {
    items: [],
    current: "",
  });

  const itemsTotal =
    state.items.length > 0
      ? state.items.map((item) => item.amount).reduce((id1, id2) => id1 + id2)
      : 0;

  const addItem = () => {
    dispatch({ type: "ADD_ITEM" });
  };

  const deleteItem = (item) => {
    dispatch({ type: "DELETE_ITEM", payload: item });
  };

  const inputHandler = () => {
    dispatch({ type: "INPUT" });
  };

  const increaseQty = (item) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item });
  };

  const decreaseQty = (item) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: item });
  };

  const checkItem = (item) => {
    dispatch({ type: "CHECK_ITEM", payload: item });
  };

  return (
    <ShoppingContext.Provider
      value={{
        state,
        itemsTotal,
        inputHandler,
        addItem,
        deleteItem,
        increaseQty,
        decreaseQty,
        checkItem,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export const useItems = () => useContext(ShoppingContext);
