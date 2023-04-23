'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface BurgerState {
    value: boolean
}

const initialState: BurgerState = {
    value: false
}

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        active: (state) => { state.value = true },
        disabled: (state) => { state.value = false },
    }
})

export const { active, disabled } = burgerSlice.actions;

export default burgerSlice.reducer;