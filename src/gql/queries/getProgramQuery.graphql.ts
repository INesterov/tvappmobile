import {gql} from '@apollo/client';

export const programQuery = gql`
  query Program($id: String!) {
    program(id: $id) {
      title
      photo
      description
      channel_id
      type
      from
    }
  }
`;
