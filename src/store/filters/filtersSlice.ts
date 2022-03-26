import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {startOfDay, getUnixTime} from 'date-fns';

export interface FiltersState {
  day: string;
  channelId: string[];
  type: string[];
  typesList: string[];
  channelsList: string[];
}

const today = getUnixTime(startOfDay(new Date()));

const initialState: FiltersState = {
  day: String(today),
  channelId: [],
  type: [],
  typesList: [],
  channelsList: [],
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
    setChannelsList: (state, action: PayloadAction<string[]>) => {
      state.channelsList = action.payload;
    },
    setTypesList: (state, action: PayloadAction<string[]>) => {
      state.typesList = action.payload;
    },
    resetFilters: state => {
      state.channelId = initialState.channelId;
      state.type = initialState.type;
    },
  },
});

export const {
  setDay,
  setChannels,
  setTypes,
  setChannelsList,
  setTypesList,
  resetFilters,
} = filtersSlice.actions;
