import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {H2, SmallText} from '../../../../uikit/';
import {ItemWrap, ProgramInfo, Channel, Head} from './styled';

export const ProgramItem = (): JSX.Element => {
  return (
    <ItemWrap>
      <ProgramInfo>
        <View>
          <Head>
            <H2>Жуки</H2>
            <Channel>ТНТ</Channel>
          </Head>
          <SmallText>Сегодня в 17:30 • Сезон 2. 28-я серия</SmallText>
        </View>
        <Pressable>
          <Icon name="add-task" size={36} color="#5B5E6F" />
        </Pressable>
      </ProgramInfo>
    </ItemWrap>
  );
};
