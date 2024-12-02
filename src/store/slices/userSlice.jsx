import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isAuth = true;
        },
        setToken(state, action) {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
            state.isAuth = false;
        },
    },
});

export const { setUser, setToken, logout } = userSlice.actions;
export default userSlice.reducer;
