import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath } from '../../const';

export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
    const response = await fetch(ApiPath.services);
    return await response.json();
});

const servicesSlice = createSlice({
    name: 'services',
    initialState: { items: [], status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchServices.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default servicesSlice.reducer;
