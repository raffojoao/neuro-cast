import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

const AboutAlbum: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Selecione um áudio</S.Title>
      <S.Album
        source={{
          uri: 'https://toppng.com/uploads/preview/music-icon-white-icon-for-music-11553466203knzrpq9ihd.png',
        }}
      />
    </S.Container>
  );
};

export default AboutAlbum;
