import styled from 'styled-components/native';
import {HelpNote} from '../../uikit';

export const Container = styled.View`
  padding: 20px 20px 0;
`;

export const FiltersWrap = styled.ScrollView`
  flex-direction: row;
  padding: 16px 0;
  margin-top: 8px;
`;

export const FilterItem = styled(HelpNote)`
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;
