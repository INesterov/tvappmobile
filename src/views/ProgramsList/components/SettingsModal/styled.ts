import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #2d2c3c;
  padding: 24px 16px;
  height: 100%;
`;

export const HeadWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 23px;
  color: #ffffff;
  margin-left: 8px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #fb6580;
  padding: 16px;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  width: 100%;
  text-align: center;
`;
