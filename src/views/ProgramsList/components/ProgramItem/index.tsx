import React from 'react';
import {Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Programs_programs} from '../../../../gql/types';
import {H2, SmallText} from '../../../../uikit/';
import {ItemWrap, ProgramInfo, Channel, Head, TitleWrap} from './styled';

export const ProgramItem = ({item}: {item: Programs_programs}): JSX.Element => {
  const {title, photo} = item;
  const photos = photo?.split(',');
  const mainPhoto = photos ? photos[0] : '';

  return (
    <ItemWrap>
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          height: 375,
        }}
        source={{
          uri: `http://tvget.ru/tvgate/mv/zh9d3x6v/progimg/${mainPhoto}`,
        }}
      />
      <ProgramInfo>
        <TitleWrap>
          <Head>
            <H2 numberOfLines={1}>{title}</H2>
            <Channel>ТНТ</Channel>
          </Head>
          <SmallText>Сегодня в 17:30 • Сезон 2. 28-я серия</SmallText>
        </TitleWrap>
        <Pressable>
          <Icon name="add-task" size={36} color="#5B5E6F" />
        </Pressable>
      </ProgramInfo>
    </ItemWrap>
  );
};
