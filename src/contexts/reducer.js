export const itemsReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        current: event.target.value,
      };

    case "ADD_ITEM":
      event.preventDefault();
      return {
        ...state,
        items: [...state.items, { id: state.current, amount: 1, check: false }],
        current: "",
      };

    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item === action.payload ? { ...item, amount: item.amount + 1 } : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item === action.payload
              ? { ...item, amount: item.amount - 1 }
              : item
          )
          .filter((item) => item.amount > 0),
      };

    case "CHECK_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item === action.payload ? { ...item, check: !item.check } : item
        ),
      };

    default:
      return state;
  }
};
