import React from 'react';
import {Link} from 'react-router-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Head, Title, TitleWrap} from './styled';

type Props = {
  title: string;
};

export const Toolbar = (props: Props): JSX.Element => {
  return (
    <Head>
      <TitleWrap>
        <Link to="/">
          <Icon name="arrow-back" size={24} color="#FB6580" />
        </Link>
        <Title>{props.title}</Title>
      </TitleWrap>
    </Head>
  );
};
