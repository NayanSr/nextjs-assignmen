const { createSlice } = require("@reduxjs/toolkit");

const pcBuildSlice = createSlice({
  name: "cp",
  initialState: {
    pcComponents: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.pcComponents.push(action.payload);
    },
    removeItem: (state, action) => {
      // Find the index of the item to remove
      const index = state.pcComponents.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        // Remove the item at the found index
        state.pcComponents.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = pcBuildSlice.actions;
export default pcBuildSlice.reducer;
