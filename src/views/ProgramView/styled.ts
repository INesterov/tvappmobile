import styled from 'styled-components/native';

export const Description = styled.Text`
  font-size: 14px;
  color: #9fa4b7;
  line-height: 17px;
  margin-top: 16px;
  padding: 0 16px;
`;

export const Gallery = styled.ScrollView`
  padding: 0 16px;
  margin-top: 16px;
`;

export const Photo = styled.Image`
  margin-right: 8px;
`;

export const SubtitleWrap = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-top: 16px;
  padding: 0 16px;
`;

export const Subtitle = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #ffffff;
  margin-right: 8px;
`;

export const Channel = styled.Text`
  font-size: 18px;
  color: #fb6580;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const FooterItem = styled.Text`
  font-size: 12px;
  color: #727c8e;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #f11775;
  padding: 16px;
  width: 100%;
  text-align: center;
  margin-top: 16px;
`;

export const ButtonTitle = styled.Text`
  text-align: center;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  text-transform: uppercase;
`;
