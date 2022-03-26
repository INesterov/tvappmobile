import React from 'react';
import {ScrollView, Pressable} from 'react-native';
import {useParams} from 'react-router-native';
import {useQuery} from '@apollo/client';
import {fromUnixTime, format} from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import {ProgramVariables, Program} from '../../gql/types';
import {channelsMap} from '../../constants/channels';
import {programQuery} from '../../gql/queries/getProgramQuery.graphql';
import {MainImage} from './components/MainImage';
import {Toolbar} from './components/Toolbar';
import {
  Description,
  Gallery,
  Photo,
  SubtitleWrap,
  Subtitle,
  Channel,
  Footer,
  FooterItem,
  SaveButton,
  ButtonTitle,
} from './styled';

export const ProgramView = (): JSX.Element | null => {
  const params = useParams();
  const {id = ''} = params;

  const {data} = useQuery<Program, ProgramVariables>(programQuery, {
    variables: {id},
  });

  const program = data?.program;

  const photos =
    program?.photo
      ?.split(',')
      .map(photo => `https://tvget.ru/tvgate/mv/zh9d3x6v/progimg/${photo}`) ??
    [];

  const [selectedPhoto, setPhoto] = React.useState(photos[0]);
  const date = program?.from ? fromUnixTime(Number(program.from)) : new Date();
  const day = format(date, 'd MMMM', {locale: ruLocale});
  const time = format(date, 'HH:mm', {locale: ruLocale});

  return (
    <ScrollView>
      <MainImage photo={selectedPhoto} />
      <Toolbar title={program?.title ?? ''} />
      <Description>{program?.description}</Description>
      <Gallery horizontal>
        {photos.map(photo => (
          <Pressable onTouchEnd={() => setPhoto(photo)}>
            <Photo
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 124,
                height: 124,
              }}
              source={{
                uri: photo,
              }}
            />
          </Pressable>
        ))}
      </Gallery>
      <SubtitleWrap>
        <Subtitle>{program?.title}</Subtitle>
        <Channel>{channelsMap[program?.channel_id ?? '']}</Channel>
      </SubtitleWrap>
      <Footer>
        <FooterItem>
          {day} в {time} •{' '}
        </FooterItem>
        <FooterItem>{program?.type}</FooterItem>
      </Footer>
      <SaveButton>
        <ButtonTitle>Напомнить</ButtonTitle>
      </SaveButton>
    </ScrollView>
  );
};
