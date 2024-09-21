import createSlice from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const exitsItem = state.itemsList.find((item) => item.id == newItem.id);
      if (exitsItem) {
        exitsItem.quantity++;
        exitsItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.cover,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const exitsingItem = state.itemsList.find((item) => item.id == id);
      if (exitsingItem.quantity == 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        exitsingItem.quantity--;
        exitsingItem.totalPrice -= exitsingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice;
