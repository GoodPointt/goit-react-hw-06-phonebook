import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
