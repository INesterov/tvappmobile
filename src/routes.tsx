import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {ProgramList} from './views/ProgramsList';

export const Router = (): JSX.Element => (
  <NativeRouter>
    <Routes>
      <Route path="/" element={<ProgramList />} />
    </Routes>
  </NativeRouter>
);
