import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ModalEnum} from './store/modals/type';
import {closeModal} from './store/modals/modalSlice';
import {SettingsModal} from './views/ProgramsList/components/SettingsModal';
import {RootState} from './store';
import {Router} from './routes';

export const Main = (): JSX.Element => {
  const dispatch = useDispatch();
  const modalType = useSelector((state: RootState) => state.modals.modalType);
  const isVisibleSettingsModal = modalType === ModalEnum.SETTING;

  return (
    <>
      <SettingsModal
        isVisible={isVisibleSettingsModal}
        onClose={() => dispatch(closeModal())}
      />
      <Router />
    </>
  );
};
