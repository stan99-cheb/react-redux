import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: 'idle',
};

const fetchCount = (amount = 1) => {
    return new Promise((resolve) =>
        setTimeout(() =>
            resolve({ data: amount }), 2000)
    );
};

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount) => {
        const response = await fetchCount(amount);
        return response.data;
    }
);

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.value = state.value + 1 },
        decrement: (state) => { state.value = state.value - 1 },
        incrementAmount: (state, actions) => { state.value = state.value + actions.payload },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(incrementAsync.fulfilled, (state, actions) => {
                state.status = 'idle';
                state.value = state.value + actions.payload;
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export const { increment, decrement, incrementAmount } = counterSlice.actions;
export default counterSlice.reducer;
