import React from 'react';
import {Pressable, Image} from 'react-native';
import {Link} from 'react-router-native';
import {fromUnixTime, format} from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {channelsMap} from '../../../../constants/channels';
import {Programs_programs} from '../../../../gql/types';
import {H2, SmallText} from '../../../../uikit/';
import {ItemWrap, ProgramInfo, Channel, Head, TitleWrap} from './styled';

export const ProgramItem = ({item}: {item: Programs_programs}): JSX.Element => {
  const {title, photo, channel_id, from, _id} = item;
  const photos = photo?.split(',');
  const mainPhoto = photos ? photos[0] : '';
  const date = fromUnixTime(Number(from));
  const day = format(date, 'd MMMM', {locale: ruLocale});
  const time = format(date, 'HH:mm', {locale: ruLocale});

  return (
    <ItemWrap>
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          height: 375,
        }}
        source={{
          uri: `https://tvget.ru/tvgate/mv/zh9d3x6v/progimg/${mainPhoto}`,
        }}
      />
      <ProgramInfo>
        <TitleWrap>
          <Head>
            <Link to={`/program/${_id}`}>
              <H2 numberOfLines={1}>{title}</H2>
            </Link>
            <Channel>{channelsMap[channel_id]}</Channel>
          </Head>
          <SmallText>
            {day} • в {time}
          </SmallText>
        </TitleWrap>
        <Pressable>
          <Icon name="add-task" size={36} color="#5B5E6F" />
        </Pressable>
      </ProgramInfo>
    </ItemWrap>
  );
};
