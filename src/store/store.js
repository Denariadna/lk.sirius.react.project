import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import newsReducer from './slices/newsSlice';
import servicesReducer from './slices/servicesSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        news: newsReducer,
        services: servicesReducer,
    },
});

export default store;
