import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../../../../store';
import {setChannels} from '../../../../../../store/filters/filtersSlice';
import {channelsMap} from '../../../../../../constants/channels';
import {Item} from '../Item';

export const ChannelTab = (): JSX.Element => {
  const dispatch = useDispatch();
  const channelsList = useSelector(
    (state: RootState) => state.filters.channelsList,
  );
  const channelIds = useSelector((state: RootState) => state.filters.channelId);

  const handleChange = React.useCallback(
    (value: boolean, channelId: string) => {
      if (value) {
        const newChannels = [...channelIds, channelId];

        dispatch(setChannels(newChannels));
      } else {
        const newChannels = channelIds.filter(item => item !== channelId);

        dispatch(setChannels(newChannels));
      }
    },
    [dispatch, channelIds],
  );

  return (
    <ScrollView>
      {channelsList.map(channel => (
        <Item
          key={channel}
          title={channelsMap[channel]}
          value={channelIds.includes(channel)}
          onChange={value => handleChange(value, channel)}
        />
      ))}
    </ScrollView>
  );
};
