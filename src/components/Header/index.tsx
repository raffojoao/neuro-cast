import { Feather } from '@expo/vector-icons';
import React from 'react';

import * as S from './styles';
import logo from '../../assets/icon.png';

interface HeaderProps {
  handleToggleList: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleToggleList }) => {
  return (
    <S.Container>
      <S.ImgLogo source={logo} />
      <S.Button onPress={handleToggleList} />
      <Feather name="list" size={24} color="white" />
    </S.Container>
  );
};

export default Header;
