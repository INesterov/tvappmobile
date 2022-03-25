import React from 'react';
import {Image} from 'react-native';
import {ImageWrap} from './styled';

type Props = {
  photo: string;
};

export const MainImage = ({photo}: Props): JSX.Element => {
  return (
    <ImageWrap>
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          height: 285,
        }}
        source={{
          uri: photo,
        }}
      />
    </ImageWrap>
  );
};
