import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allDeserts: [],
  ordered: [],
  orderTotal: 0,
  totalPrice: 0,
};

export const dessertSlice = createSlice({
  name: "dessert",
  initialState,
  reducers: {
    addAllDesert: (state, { payload }) => {
      state.allDeserts = payload;
    },
    incrementOrder: (state, { payload }) => {
      const item = state.allDeserts.find((dessert) => dessert.id == payload);

      if (!item.amout) {
        item.amout = 1;
      } else {
        item.amout += 1;
      }
      dessertSlice.caseReducers.calculateTotal(state);
    },
    decrementOrder: (state, { payload }) => {
      const item = state.allDeserts.find((dessert) => dessert.id == payload);

      if (!item.amout) {
        item.amout = 1;
      } else {
        item.amout -= 1;
      }
      dessertSlice.caseReducers.calculateTotal(state);
    },

    deleteOrder: (state, { payload }) => {
      const item = state.allDeserts.find((dessert) => dessert.id == payload);
      if (item) {
        item.amout = 0;
      }
      dessertSlice.caseReducers.calculateTotal(state);
    },

    calculateTotal: (state) => {
      state.ordered = state.allDeserts.filter((dessert) => dessert.amout);
      let allOrderTotal = 0;
      let allOrderPrice = 0;
      state.ordered.forEach((order) => {
        allOrderTotal += order.amout;
        allOrderPrice += order.amout * order.price;
      });

      state.orderTotal = allOrderTotal;
      state.totalPrice = allOrderPrice;
    },
  },
});

export const {
  clearOrder,
  incrementOrder,
  remuveOrder,
  decrementOrder,
  addAllDesert,
  deleteOrder,
} = dessertSlice.actions;

export default dessertSlice.reducer;
