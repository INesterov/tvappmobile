import styled from 'styled-components/native';

type DayProps = {
  isActive: boolean;
};

export const DayValue = styled.Text<DayProps>`
  font-size: 21px;
  font-weight: bold;
  color: ${({isActive}) => (isActive ? '#FB6580' : '#5c5e6f')};
`;

export const DayTitle = styled.Text<DayProps>`
  font-size: 14px;
  color: #5c5e6f;
  color: ${({isActive}) => (isActive ? '#FB6580' : '#5c5e6f')};
`;

export const DayWrap = styled.View`
  width: 80px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
