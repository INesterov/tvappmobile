import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../../../../store';
import {setTypes} from '../../../../../../store/filters/filtersSlice';
import {Item} from '../Item';

export const TypesTab = (): JSX.Element => {
  const dispatch = useDispatch();
  const typesList = useSelector((state: RootState) => state.filters.typesList);
  const types = useSelector((state: RootState) => state.filters.type);

  const handleChange = React.useCallback(
    (value: boolean, type: string) => {
      if (value) {
        const newTypes = [...types, type];

        dispatch(setTypes(newTypes));
      } else {
        const newTypes = types.filter(item => item !== type);

        dispatch(setTypes(newTypes));
      }
    },
    [dispatch, types],
  );

  return (
    <ScrollView>
      {typesList.map(type => (
        <Item
          key={type}
          title={type}
          value={types.includes(type)}
          onChange={value => handleChange(value, type)}
        />
      ))}
    </ScrollView>
  );
};
