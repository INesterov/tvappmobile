import React from 'react';
import {View, Pressable, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useQuery} from '@apollo/client';
import {useSelector, useDispatch} from 'react-redux';
import {format, fromUnixTime} from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import {setChannelsList, setTypesList} from '../../store/filters/filtersSlice';
import {RootState} from '../../store';
import {ProgramsVariables, Programs} from '../../gql/types';
import {programsQuery} from '../../gql/queries/getProgramsQuery.graphql';
import {H1} from '../../uikit';
import {ProgramItem} from './components/ProgramItem';
import {DaySelect} from './components/DaySelect';
import {SettingsModal} from './components/SettingsModal';
import {Container, FiltersWrap, FilterItem, Toolbar, DaysWrap} from './styled';

export const ProgramList = (): JSX.Element | null => {
  const selectedDay = useSelector((state: RootState) => state.filters.day);
  const channelId = useSelector((state: RootState) => state.filters.channelId);
  const types = useSelector((state: RootState) => state.filters.type);
  const dispatch = useDispatch();
  const [isVisibleSettingsModal, setVisibleSettingsModal] =
    React.useState(false);
  const formattedSelectedDay = format(
    fromUnixTime(Number(selectedDay)),
    'd MMMM',
    {locale: ruLocale},
  );
  const {data} = useQuery<Programs, ProgramsVariables>(programsQuery, {
    variables: {day: selectedDay, type: types, channelId},
  });

  React.useEffect(() => {
    const channels = data?.channels;
    const types = data?.types ?? [];
    const channelsList = channels?.map(channel => channel.id) ?? [];

    dispatch(setChannelsList(channelsList));
    dispatch(setTypesList(types));
  }, [data?.channels, data?.types, dispatch]);

  return (
    <View>
      <SettingsModal
        isVisible={isVisibleSettingsModal}
        onClose={() => setVisibleSettingsModal(false)}
      />
      <Container>
        <Toolbar>
          <H1>{formattedSelectedDay}</H1>
          <Pressable onTouchEnd={() => setVisibleSettingsModal(true)}>
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
        {data?.programs ? (
          <FlatList
            data={data.programs}
            renderItem={({item}) => <ProgramItem item={item} />}
            keyExtractor={item => item._id}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: '74%',
            }}
          />
        ) : null}
        <DaysWrap horizontal>
          <DaySelect />
        </DaysWrap>
      </Container>
    </View>
  );
};
