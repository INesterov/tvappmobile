import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {startOfDay, getUnixTime} from 'date-fns';

export interface FiltersState {
  day: string;
  channelId: string[];
  type: string[];
}

const today = getUnixTime(startOfDay(new Date()));

const initialState: FiltersState = {
  day: String(today),
  channelId: [],
  type: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setDay: (state, action: PayloadAction<string>) => {
      state.day = action.payload;
    },
    setChannels: (state, action: PayloadAction<string[]>) => {
      state.channelId = action.payload;
    },
    setTypes: (state, action: PayloadAction<string[]>) => {
      state.type = action.payload;
    },
  },
});

export const {setDay, setChannels, setTypes} = filtersSlice.actions;
