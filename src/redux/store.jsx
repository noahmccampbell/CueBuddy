import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial State
const initialUserState = {
    username: '',
    uid: '',
    level: 0,
    streak: 0,

};

// User Slice
const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
            state.uid = action.payload.uid;
            state.level = action.payload.level;
            state.streak = action.payload.streak;
        }
    }
});

// Export Actions
export const { setUser } = userSlice.actions;

// Store
export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

// Export RootState and AppDispatch types
export const getRootState = () => store.getState;
