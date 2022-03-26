import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ModalEnum} from './type';

export interface ModalState {
  modalType?: ModalEnum;
}

const initialState: ModalState = {
  modalType: undefined,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<ModalEnum>) => {
      state.modalType = action.payload;
    },
    closeModal: state => {
      state.modalType = undefined;
    },
  },
});

export const {setModal, closeModal} = modalsSlice.actions;
