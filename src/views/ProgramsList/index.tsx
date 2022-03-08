import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {H1} from '../../uikit';
import {Container, FiltersWrap, FilterItem} from './styled';

export const ProgramList = (): JSX.Element => {
  return (
    <View>
      <Container>
        <H1>Сегодня</H1>
        <View>
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
          <Pressable>
            <Icon name="settings" size={24} color="#5B5E6F" />
          </Pressable>
        </View>
      </Container>
    </View>
  );
};
