import styled from 'styled-components/native';
import {HelpNote} from '../../uikit';

export const Container = styled.View`
  padding-top: 20px;
  justify-content: space-between;
`;

export const FiltersWrap = styled.ScrollView`
  flex-direction: row;
  padding: 16px 20px 8px 20px;
`;

export const FilterItem = styled(HelpNote)`
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Toolbar = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-between;
  padding: 0 20px;
`;

export const DaysWrap = styled.ScrollView`
  flex-direction: row;
  background-color: #181a26;
  height: 100px;
  width: 100%;
  margin-top: 24px;
`;
