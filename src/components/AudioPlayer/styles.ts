import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('screen').width - 40;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  width: ${width}px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonAction = styled.TouchableOpacity<{ primary: boolean }>`
  width: ${({ primary }) => (primary ? 85 : 66)}px;
  height: ${({ primary }) => (primary ? 85 : 66)}px;
  background-color: ${({ primary }) => (primary ? '#f43f30' : '#fe9541')};
  border-radius: ${({ primary }) => (primary ? 42 : 33)}px;
  justify-content: center;
  align-items: center;
`;
