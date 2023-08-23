import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        listFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const { listFilter } = filterSlice.actions;
export default filterSlice.reducer;
