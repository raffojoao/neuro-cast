import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Player from './pages/Player';
import * as S from './styles';

const Main: React.FC = () => {
  return (
    <>
      <StatusBar style="light" />
      <S.Background>
        <Player />
      </S.Background>
    </>
  );
};

export default Main;
