import React from 'react';
import {View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useQuery, useMutation} from '@apollo/client';
import {useSelector, useDispatch} from 'react-redux';
import {format, fromUnixTime} from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import {setModal} from '../../store/modals/modalSlice';
import {ModalEnum} from '../../store/modals/type';
import {RootState} from '../../store';
import {ProgramsVariables, Programs, UpdatePrograms} from '../../gql/types';
import {programsQuery} from '../../gql/queries/getProgramsQuery.graphql';
import {updatePrograms} from '../../gql/mutations/updateProgramMutation.graphql';
import {H1} from '../../uikit';
import {ProgramItem} from './components/ProgramItem';
import {DaySelect} from './components/DaySelect';
import {
  Container,
  FiltersWrap,
  FilterItem,
  Toolbar,
  DaysWrap,
  ButtonsWrap,
  Button,
} from './styled';

export const ProgramList = (): JSX.Element | null => {
  const selectedDay = useSelector((state: RootState) => state.filters.day);
  const channelId = useSelector((state: RootState) => state.filters.channelId);
  const type = useSelector((state: RootState) => state.filters.type);
  const dispatch = useDispatch();
  const formattedSelectedDay = format(
    fromUnixTime(Number(selectedDay)),
    'd MMMM',
    {locale: ruLocale},
  );
  const {data} = useQuery<Programs, ProgramsVariables>(programsQuery, {
    variables: {day: selectedDay, type, channelId},
  });

  const [update] = useMutation<UpdatePrograms, null>(updatePrograms);

  return (
    <View>
      <Container>
        <Toolbar>
          <H1>{formattedSelectedDay}</H1>
          <ButtonsWrap>
            <Button onTouchEnd={() => dispatch(setModal(ModalEnum.SETTING))}>
              <Icon name="settings" size={24} color="#5B5E6F" />
            </Button>
            <Button onTouchEnd={() => update()}>
              <Icon name="update" size={24} color="#5B5E6F" />
            </Button>
          </ButtonsWrap>
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
