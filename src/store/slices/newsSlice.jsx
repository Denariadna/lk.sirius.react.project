import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath } from '../../const';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const response = await fetch(ApiPath.news);
    return await response.json();
});

const newsSlice = createSlice({
    name: 'news',
    initialState: { items: [], status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchNews.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default newsSlice.reducer;
