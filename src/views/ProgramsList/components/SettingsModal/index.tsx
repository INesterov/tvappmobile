import React from 'react';
import {Modal, Pressable, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ChannelTab} from './components/ChannelTab';
import {TypesTab} from './components/TypesTab';
import {Container, HeadWrap, Title} from './styled';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const renderScene = SceneMap({
  channels: ChannelTab,
  types: TypesTab,
});

export const SettingsModal = (props: Props): JSX.Element => {
  const {isVisible, onClose} = props;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'channels', title: 'Каналы'},
    {key: 'types', title: 'Категории'},
  ]);
  const layout = useWindowDimensions();

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
              indicatorStyle={{backgroundColor: '#FB6580'}}
            />
          )}
          initialLayout={{width: layout.width}}
        />
      </Container>
    </Modal>
  );
};
