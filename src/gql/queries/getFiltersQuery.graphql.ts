import {gql} from '@apollo/client';

export const getFiltersQuery = gql`
  query Filters {
    types
    channels {
      id
      title
    }
  }
`;
