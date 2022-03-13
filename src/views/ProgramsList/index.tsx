import React from 'react';
import {View, Pressable, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useQuery} from '@apollo/client';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {ProgramsVariables, Programs} from '../../gql/types';
import {programsQuery} from '../../gql/queries/getProgramsQuery.graphql';
import {H1} from '../../uikit';
import {ProgramItem} from './components/ProgramItem';
import {DaySelect} from './components/DaySelect';
import {Container, FiltersWrap, FilterItem, Toolbar, DaysWrap} from './styled';

export const ProgramList = (): JSX.Element | null => {
  const selectedDay = useSelector((state: RootState) => state.filters.day);
  const {data} = useQuery<Programs, ProgramsVariables>(programsQuery, {
    variables: {day: selectedDay, type: [], channelId: []},
  });

  if (!data?.programs) {
    return null;
  }

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
        <FlatList
          data={data.programs}
          renderItem={({item}) => <ProgramItem item={item} />}
          keyExtractor={item => item._id}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: '74%',
          }}
        />
        <DaysWrap horizontal>
          <DaySelect />
        </DaysWrap>
      </Container>
    </View>
  );
};
