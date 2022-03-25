import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {ProgramList} from './views/ProgramsList';
import {ProgramView} from './views/ProgramView';

export const Router = (): JSX.Element => (
  <NativeRouter>
    <Routes>
      <Route path="/" element={<ProgramList />} />
      <Route path="/program/:id" element={<ProgramView />} />
    </Routes>
  </NativeRouter>
);
