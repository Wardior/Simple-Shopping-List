import { createContext, useContext, useReducer } from "react";
import { itemsReducer } from "./reducer";

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemsReducer, {
    items: [],
    current: "",
  });

  // total amounts of items
  const itemsTotal =
    state.items.length > 0
      ? state.items.map((item) => item.amount).reduce((id1, id2) => id1 + id2)
      : 0;

  // add item to the list
  const addItem = () => {
    dispatch({ type: "ADD_ITEM" });
  };

  // remove item from the list
  const deleteItem = (item) => {
    dispatch({ type: "DELETE_ITEM", payload: item });
  };

  // get user's input value
  const inputHandler = () => {
    dispatch({ type: "INPUT" });
  };

  // increase a specific item's quantity
  const increaseQty = (item) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item });
  };

  // decrease a specific item's quantity
  const decreaseQty = (item) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: item });
  };

  // check / uncheck an item
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
