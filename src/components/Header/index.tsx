import { Feather } from '@expo/vector-icons';
import React from 'react';

import { Container, ImgLogo, Button } from './style';
import logo from '../../assets/images/icon.png';

const Header: React.FC = ({ handleToggleList }) => {
  return (
    <Container>
      <ImgLogo source={logo} />
      <Button onPress={handleToggleList}>
        <Feather name="list" size={24} color="white" />
      </Button>
    </Container>
  );
};

export default Header;
