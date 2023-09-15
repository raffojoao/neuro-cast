import { Feather } from '@expo/vector-icons';
import React from 'react';

import * as S from './styles';

const AudioPlayer: React.FC = () => {
  return (
    <S.Container>
      <S.ButtonContainer>
        <S.ButtonAction>
          <Feather name="chevron-left" size={24} color="white" />
        </S.ButtonAction>
        <S.ButtonAction primary>
          <Feather name="play" size={32} color="white" />
        </S.ButtonAction>
        <S.ButtonAction>
          <Feather name="chevron-right" size={24} color="white" />
        </S.ButtonAction>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default AudioPlayer;
