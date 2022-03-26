import React from 'react';
import {Modal, Pressable, useWindowDimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useQuery} from '@apollo/client';
import {Filters} from '../../../../gql/types';
import {getFiltersQuery} from '../../../../gql/queries/getFiltersQuery.graphql';
import {
  setChannelsList,
  setTypesList,
  resetFilters,
} from '../../../../store/filters/filtersSlice';
import {ChannelTab} from './components/ChannelTab';
import {TypesTab} from './components/TypesTab';
import {TimeTab} from './components/TimeTab';
import {Container, HeadWrap, Title, Button, ButtonText} from './styled';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const renderScene = SceneMap({
  channels: ChannelTab,
  types: TypesTab,
  time: TimeTab,
});

export const SettingsModal = (props: Props): JSX.Element => {
  const {isVisible, onClose} = props;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'channels', title: 'Каналы'},
    {key: 'types', title: 'Категории'},
    {key: 'time', title: 'Время'},
  ]);
  const layout = useWindowDimensions();
  const dispatch = useDispatch();

  const {data} = useQuery<Filters, null>(getFiltersQuery);

  React.useEffect(() => {
    const channels = data?.channels;
    const types = data?.types ?? [];
    const channelsList = channels?.map(channel => channel.id) ?? [];

    dispatch(setChannelsList(channelsList));
    dispatch(setTypesList(types));
  }, [data?.channels, data?.types, dispatch]);

  return (
    <Modal animationType="slide" visible={isVisible} onRequestClose={onClose}>
      <Container>
        <HeadWrap>
          <Pressable onTouchEnd={onClose}>
            <Icon name="arrow-back" size={24} color="#FB6580" />
          </Pressable>
          <Title>Фильтры</Title>
        </HeadWrap>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={tabProps => (
            <TabBar
              {...tabProps}
              style={{backgroundColor: '#2d2c3c'}}
              labelStyle={{fontSize: 10}}
              indicatorStyle={{backgroundColor: '#FB6580'}}
            />
          )}
          initialLayout={{width: layout.width}}
        />
        <Button onPress={() => dispatch(resetFilters())}>
          <ButtonText>Сбросить фильтры</ButtonText>
        </Button>
        <Button onPress={onClose}>
          <ButtonText>Сохранить</ButtonText>
        </Button>
      </Container>
    </Modal>
  );
};
