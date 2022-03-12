import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {H1} from '../../uikit';
import {Program} from '../../types/program';
import {ProgramItem} from './components/ProgramItem';
import {DaySelect} from './components/DaySelect';
import {
  Container,
  FiltersWrap,
  FilterItem,
  Toolbar,
  List,
  DaysWrap,
} from './styled';

const programList: Program[] = [
  {id: '1', name: 'aaaaaa'},
  {id: '2', name: 'aaaaaa'},
  {id: '3', name: 'aaaaaa'},
  {id: '4', name: 'aaaaaa'},
  {id: '5', name: 'aaaaaa'},
  {id: '6', name: 'aaaaaa'},
  {id: '7', name: 'aaaaaa'},
  {id: '8', name: 'aaaaaa'},
  {id: '9', name: 'aaaaaa'},
  {id: '10', name: 'aaaaaa'},
];

export const ProgramList = (): JSX.Element => {
  return (
    <View>
      <Container>
        <Toolbar>
          <H1>Сегодня</H1>
          <Pressable>
            <Icon name="settings" size={24} color="#5B5E6F" />
          </Pressable>
        </Toolbar>
        <FiltersWrap horizontal>
          <FilterItem>Сериалы</FilterItem>
          <FilterItem>Реалити шоу</FilterItem>
          <FilterItem>Ужасы</FilterItem>
          <FilterItem>Сериалы</FilterItem>
          <FilterItem>Реалити шоу</FilterItem>
          <FilterItem>Ужасы</FilterItem>
          <FilterItem>Сериалы</FilterItem>
          <FilterItem>Реалити шоу</FilterItem>
          <FilterItem>Ужасы</FilterItem>
          <FilterItem>Сериалы</FilterItem>
          <FilterItem>Реалити шоу</FilterItem>
          <FilterItem>Ужасы</FilterItem>
          <FilterItem>Сериалы</FilterItem>
          <FilterItem>Реалити шоу</FilterItem>
          <FilterItem>Ужасы</FilterItem>
          <FilterItem>Сериалы</FilterItem>
          <FilterItem>Реалити шоу</FilterItem>
          <FilterItem>Ужасы</FilterItem>
          <FilterItem>Сериалы</FilterItem>
          <FilterItem>Реалити шоу</FilterItem>
          <FilterItem>Ужасы</FilterItem>
        </FiltersWrap>
        <List
          data={programList}
          renderItem={ProgramItem}
          keyExtractor={item => item.id}
        />
        <DaysWrap horizontal>
          <DaySelect />
        </DaysWrap>
      </Container>
    </View>
  );
};
