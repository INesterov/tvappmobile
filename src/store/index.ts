import {configureStore} from '@reduxjs/toolkit';
import {filtersSlice} from './filters/filtersSlice';
import {modalsSlice} from './modals/modalSlice';

export const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    modals: modalsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
