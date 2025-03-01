import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial State
const initialUserState = {
    username: '',
    uid: ''
};

// User Slice
const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
            state.uid = action.payload.uid;
        }
    }
});

// Export Actions
export const { setUser } = userSlice.actions;

// Store
const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export default store;
// Export RootState and AppDispatch types
export const RootState = store.getState;
export const AppDispatch = store.dispatch;