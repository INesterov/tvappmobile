import React from 'react';
import {Switch} from 'react-native';
import {ItemWrap, Title} from './styled';

type Props = {
  title: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

export const Item = (props: Props): JSX.Element => {
  const {title, value, onChange} = props;

  return (
    <ItemWrap>
      <Title>{title}</Title>
      <Switch
        thumbColor={value ? '#FB6580' : '#5C5E6F'}
        trackColor={{true: '#2B2A3A', false: '#2B2A3A'}}
        onValueChange={onChange}
        value={value}
      />
    </ItemWrap>
  );
};
